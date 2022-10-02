---
title: "State machines"
date: "2021-05-02"
tags: ["Programming"]
type: "blog-post"
description: "You might have heard about the concepts of 'finite state machines'. But if you haven't, I don't blame you - they're largely a mathematical / computer science concept. Let's explore how we can use them."
---

You might have heard about the concepts of "finite state machines". But if you haven't, I don't blame you - they're largely a mathematical / computer science concept. The idea is that a system can only be in a single "state" at any given time, like a traffic light. It can only ever be red, yellow or green. If it was multiple at the same time, people would get hurt. That would be no good!

Now you might be wondering what on Earth that has to do with coding or web development. But if you think about it, our systems / websites are often quite similar in nature to this traffic light. Say you have a website that fetches some data from an API when the user clicks a button. The website can exist in a few different states:

1. The empty / idle state (on initial load)
2. A loading state (on button press)
3. A success state (showing the data)
4. A failure state (something went wrong)

If you think of any webapp you use on a daily basis (Twitter, Reddit, StackOverflow etc.), they all work this way, except that the loading state is usually triggered automatically on page load. And they can never exist in multiple states at the same time. Either you're fetching data, showing it, or something broke and you're seeing an error message. Seems pretty straightforward, right?

That's why state machines are cool. They can help us improve our code and avoid weird bugs, by thinking with a certain mental model.

Think of the data fetching on click example. You could have a function like this:

```js
let isLoading, isError, data;

function fetchData() {
  isLoading = true;
  fetch("https://some-api-endpoint")
    .then((fetchedData) => (data = fetchedData))
    .catch((err) => (isError = true));
}
```

At first glance, this code looks good. It handles a loading state and keeps track of the fetched data and potential error, which we could then use to display different UI to the user.

But what happens when this function finishes, either by getting the data or error'ing out? Our isLoading state is still true. So if we were using this "state" to show a loading spinner somewhere in our template, it would continue being there. Of course we could end the function by setting isLoading = false, but we'd need to reset the data and error variables for each call to the function, too. If not, we could easily end up with some combination of isLoading, isError and data being true at the same time. That doesn't make sense!

And trust me, as your application grows, keeping track of these different "flags" gets messy real quick. So let's look at the same example, but using a simple state machine instead:

```js
let state = "idle";
function fetchData() {
  state = "loading";
  fetch("https://some-api-endpoint")
    .then((fetchedData) => {
      data = fetchedData;
      state = "success";
    })
    .catch((err) => {
      error = err;
      state = "error";
    });
}
```

Here we're using a single outside variable to keep track of the "state" of our program. And because of this, it can only ever be in a single state at once (idle, loading, success or error). As we set the state to one thing, we automatically "unset" the other things.

This makes it super simple to display different UI in a template, and we never risk having conflicting UI shown at the same time. Our code is slightly more verbose, but we'll avoid a whole array (hah, see what I did there?) of annoying, hard-to-debug issues. I'd consider that a win!

This is just a simple example of the concept behind state machines to get you fired up. If you're interested in learning more, there's a cool JavaScript library called xState that expands on the concepts and helps you implement more complex state machines:

​[Learn more about xState and the state machine concept](https://xstate.js.org/docs/about/concepts.html)​

​
