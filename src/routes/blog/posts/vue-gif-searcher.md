---
title: 'Building a Gif Searcher with Vue and the Giphy API'
date: '2018-04-15'
icon: 'vue.svg'
type: 'blog-post'
---

Welcome to this tutorial, I'm happy you made it here. This will be a tutorial on how to fetch and display gifs with Vue, retrieved from the giphy API. We will cover the following parts:

1.  Setting up with Vue-cli
1.  Taking input from the user
1.  Fetching data from the giphy API
1.  Building and displaying gifs
1.  Deploying to Netlify
1.  Conclusion & what's next?

Fair warning - the hardest part of this project is not getting distracted by hilarious gifs when testing your app.

The guide is aimed at beginners with Vue and/or JavaScript, who wants to up their skills by building a "real-world" application and actually putting it online for other people to see. We will cover setting up your Vue project using the Vue-cli, registering user input and use it to request gifs from the giphy API, displaying these gifs on the page, and finally how to put your app online using Netlify (which is awesome and super simple!). I am by no means a Vue expert, but building this project taught me a lot of useful skills and I hope you will feel the same. Plus, it's fun!

## 1. Setting up with Vue-cli

We will be using the Vue-cli 3 beta, so if you have not already installed it, go ahead and grab it with npm by running this in your terminal:

```
npm install -g @vue/cli
```

NB: if you receive an error about permissions, run the command again but with "sudo" in front.

Next, we'll use it to set up our project. Run

```
vue create gif-searcher
```

in your terminal. This will prompt you to use the default or choose your features manually. For the purpose of this tutorial, the defaults are fine. Hit enter, and the CLI will set up your project for you (this might take a while). When it is done, you can write

```
cd gif-searcher && npm run serve
```

to enter your newly created project, and run the Vue development server. Visting http://localhost:8080/ (or whatever it says in your terminal) shows your brand new Vue project running, completely set up with hot reloading and sensible configurations. Hooray! If you run into issues or have any questions, feel more than welcome to write a question below and we'll sort it out.

![Vue img](post_images/vue.png)

## 2. Taking input from the user

So far, we just got the boilerplate Vue project running. For the sake of simplicity, we will be writing all our code within App.vue, so feel free to delete the components folder and strip the App.vue file down so it looks like this:

```html
<template>
  <div id="app"></div>
</template>

<script>
  export default {}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
```

Now we’re ready to do whatever we want. So, our app will consist of the following elements:

- A heading
- An input field
- A Search button
- An area to display the gifs returned from the API

Let’s add those to our template like so:

```html
<template>
  <div id="app">
    <h1>Amazing Gif Searcher</h1>
    <input type="text" /> <button class="button">Search</button>
  </div>
</template>
```

And just add some basic styling as well (nothing fancy, feel free to play around to make the app look however you want). For the purpose of this tutorial, we’ll keep the design / CSS to a minimum by adding the following CSS to our pre-existing app styles:

```css
input {
  padding: 5px;
  margin-bottom: 20px;
}

.button {
  background-color: rgb(0, 172, 0);
  color: white;
  padding: 5px 20px;
  border: none;
  display: block;
  margin: 0 auto;
}

.button:hover {
  background-color: rgb(0, 148, 0);
}
```

Now, we want to use Vue to store whatever the user types in the search input field. We’ll need to use this to request the appropriate gifs from the API, so to accomplish this, we’ll add a `v-model` directive to our input field, and bind this to a `searchTerm` variable in our data. Make your HTML look like this:

```html
<input v-model="searchTerm" type="text" />
```

And your `<script>` tag look like this:

```javascript
<script>
export default {
  data() {
    return {
      searchTerm: ""
    };
  }
};
</script>
```

Cool! We’re now storing whatever the user types in the input field in our application data. We want to use this data to fetch gifs from the giphy API. This will happen in a method that gets fired when the user clicks on our “Search” button. So let’s set this up first before we move on. Make your `<script>` tag look like this:

```javascript
<script>
export default {
  data() {
    return {
      searchTerm: ""
    };
  },
  methods: {
    getGifs() {
      console.log(this.searchTerm);
    }
  }
};
</script>
```

And add the following to your button:

```html
<button class="button" @click="getGifs()">Search</button>
```

You can verify that everything is working by typing something in the input field, clicking the button, and opening up your console. You should see whatever you wrote in the input written to the console. We’re finally ready to actually retrieve some gifs!

## 3. Fetching data from the giphy API

To get data from giphy, we’ll need to know the endpoint from where to request this data, as well as an API key. This will be done within our getGifs() method. A quick trip to the [giphy documentation](https://developers.giphy.com/docs/) shows us that the endpoint for searching gifs is at https://api.giphy.com/v1/gifs/search. For demonstration purposes, we'll be using the public API key, which is `dc6zaTOxFJmzC`. Feel free to create an app on the giphy website if you wish to retrieve a private API key, but for now, the public one will do just fine.

What we need to do is to construct a URL using the endpoint, our API key, our searchTerm and a limit for how many gifs the API will return to us. We construct the URL by using ES6 template strings to combine several variables. Put this code in your getGifs() method:

```javascript
let apiKey = 'dc6zaTOxFJmzC'
let searchEndPoint = 'https://api.giphy.com/v1/gifs/search?'
let limit = 5

let url = `${searchEndPoint}&api_key=${apiKey}&q=${
  this.searchTerm
}&limit=${limit}`
```

Now that we have constructed the URL, we’ll use this to fetch the gif data. We do this using the fetch API. Add this code right below where you built the URL string:

```javascript
fetch(url)
  .then(response => {
    return response.json()
  })
  .then(json => {
    console.log(json)
  })
  .catch(err => {
    console.log(err)
  })
```

What’s happening here is that we are calling fetch with the URL we constructed, consisting of the endpoint on giphy as well as our API key. Fetch returns a promise, which we can call .then() on. The code within .then() is run when the promise returns succesfully with some data. We then return the response from the API as json, by calling the .json() method on the response. When this is done, we log the json to the console. If there is an error retrieving the data, we also print that to the console in the catch block. Let's go take a look in the console, and see what we got from the API!

![Api response](post_images/apiresponse.png)

If you’re seeing the data in your console, awesome! You’ve succesfully grabbed a bunch of gifs from the API, relevant to the searchterm you typed in, and can now manipulate them however you want. If you are not seeing the data in your console, verify that your URL is correct with the right endpoint, API key, and concatenating characters needed.

With that out of the way, let’s focus on outputting the gifs on the page. They aren’t much fun as text data in your console after all.

## 4. Building and displaying gifs

Inside the data we’ve retrieved, each gif is stored as a JavaScript object. Each has a bunch of properties like an id, a URL, direct image links and so on. You might be tempted to take the URL, and put that as the source of an img tag, but unfortunately, that wont work. The URL is a link to the giphy website, and can not be embedded inside our page. What we actually want, is to construct a direct link to the gif that can be put directly on our page. We'll do that in a few steps:

1.  Add a gif array in our data source to store the links
1.  Take our data from the API and map each gif to a direct link we can use as an image
1.  Make a v-for loop to display an image for each gif in our gif array

First things first, create a gif array in our data source like so:

```js
data() {
  return {
    searchTerm: "",
    gifs: []
  };
},
```

For step 2, we want to add an additional method that will take our json data and build gifs from it to store within our gifs array. Create a method called buildGifs(json):

```js
buildGifs(json) {

}
```

And when we retrieve the data from the giphy API, we want to call this method with the data we’ve received. So modify our .then block from the previous method to call the buildGifs method, passing in the json:

```js
.then(json => {
  this.buildGifs(json);
})
```

Back inside the buildGifs method, we’ll do some data massaging and map each gif to a direct link we can display:

```js
buildGifs(json) {
  this.gifs = json.data
    .map(gif => gif.id)
    .map(gifId => {
      return `https://media.giphy.com/media/${gifId}/giphy.gif`;
  });
}
```

What’s happening here is a few steps that may seem weird, but allow us to get a direct image link to display on our page. We take the json from the API, and enter the data part (where all the fun gif stuff is stored). We then map each gif returned from the API to its id. We then take this id, and plug it into a URL. We've now gotten rid of all the data we do not care about, and only store a direct link to each gif inside our gif array. This means that we can use Vue to loop through our gif array, and display each gif on the page, which we'll do next. Back up in our template area, add the following right below the button tag:

```html
<div class="gif-container">
  <img v-for="gif in gifs" :src="gif" :key="gif.id" />
</div>
```

Here, we are grouping all the gifs in a div for convenience. Then, we are looping over each gif in our array, binding the src attribute to the gif itself (which is why we mapped each gif to a specific URL before). That's all there is to it. Go ahead and search for something in your app, and watch the gifs be displayed!

One final thing for this section, is that the gifs are showing up all over the place. This can easily be fixed by styling, so let’s add just a few lines of CSS to our gif-container:

```css
.gif-container {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

Obviously, there are a lot of different ways to display the gifs in a better way, but I’ll leave that to you! In the next section, we will take what we have built so far, and deploy it to Netlify. Don’t be intimidated, it’s really straightforward! If you do not feel like putting your app online just yet, that’s perfectly fine — but I believe it is good practice to understand how to deploy your sites and actually be able to show it off to the world.

If you got lost at any step of the way, the entire code can be found in this GitHub repository:

[Github repo](https://github.com/mbrodt/tutorial-gif-searcher)

## 5. Deploying to Netlify

[Netlify](https://netlify.com) is an awesome service that allow you to host your websites and apps online for free. What’s even cooler, is that Netlify is hooked up to your GitHub repository to trigger automatic redeploys whenever you push changes to GitHub, making your site always be up to date with the latest changes. I can not recommend this service enough. It is expected to have some experience with git and GitHub, so if you’re still a bit confused by all things git, you might want to check out one of the many resources for learning git first. One of my personal favourites is this one: http://rogerdudler.github.io/git-guide/

Head on over to Netlify and sign up with your GitHub account. Once logged in, click the “New site from Git” button and follow the flow to choose the repository containing your gif searcher code. When you get to step 3 in the flow, choose “master” as your deployment branch (or any other, if you prefer), type npm run build in the "Build command" field. This will run the npm build script that minifies your files, making your site run faster. You can leave the publish directory empty. Click on "Deploy site", and Netlify will put your site online and give you a URL to view it as soon as it has finished building (should be around 30 seconds to a minute). That's it! Visit the URL, and watch your app running online - for free, and with almost no set up. Whenever you feel like changing the app, simply push your code to GitHub as you normally would, and Netlify will trigger a rebuild so your updated version gets online.

## 6. Conclusion & what’s next?

Phew, that was a long one. I’m so happy you made it all the way to the end, and hope you learned something from the article. Where to go next with your app is really up to you, but here are some ideas for improvements:

- Allow the user to choose how many gifs to search for (we’ve hardcoded the limit to 5 for now)
- Display the gifs in a grid
- Allow the user to search for random gifs
- Display the link to the gif so the user can share gifs with their friends
- Improve convenience by listening for the “Enter” key press to search, checking to make sure searchTerm is not an empty string before trying to access the API, or displaying a “Loading…” animation while waiting for the API to return the gif data

Thanks for reading! Please leave a comment if you have any feedback for me, I greatly appreciate it.

https://twitter.com/madsbrodt
