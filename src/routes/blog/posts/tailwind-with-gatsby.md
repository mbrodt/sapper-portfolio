---
title: 'Setting up TailwindCSS with Gatsby'
date: '2018-11-28'
icon: 'tailwind.svg'
type: 'blog-post'
---

[Tailwind](https://tailwindcss.com/) is an amazing CSS framework created by Adam Wathan & friends. Tailwind follows a "utility-first" approach, which enables a crazy fast workflow and enforces consistency across your website. After learning Tailwind, writing normal CSS feels tedious and boring in comparison.

Anyway, if you're here, you probably already know how to use Tailwind, but you are unable to get it working with Gatsby. This is a quick tutorial of the steps required to add Tailwind to an existing Gatsby project in order to style with utilities. So lets get started.

## The Steps

I'm assuming you have Tailwind installed and have generated the tailwind.js config file. I put it in the root of my Gatsby folder and named it `tailwind.js`. After that, you will need to install `autoprefixer` and `postcss-cli` manually. To do this, type

```
npm install autoprefixer postcss-cli
```

Next, you'll need to add a postcss.config.js in the root of your Gatsby folder. Inside it, write the following JavaScript code:

```javascript
const tailwindcss = require('tailwindcss')
module.exports = {
  plugins: [tailwindcss('./tailwind.js'), require('autoprefixer')],
}
```

Next up, you need to add some scripts to your `package.json` file. If you're on Linux or Mac, you can use the following:

```
"build:css": "postcss src/css/index.css -o src/css/generated.css",
"watch:css": "postcss src/css/index.css -o src/css/generated.css -w",
"build": "npm run build:css && gatsby build",
"develop": "npm run watch:css & gatsby develop",
```

If you're on Windows, you'll need to install `npm-run-all` which allows you to run scripts concurrently.

```
npm install npm-run-all
```

Your `package.json` scripts could then look something like this (my personal preference, feel free to organize the scripts the way you want them to):

```
"build:css": "postcss src/css/index.css -o src/css/generated.css",
"watch:css": "postcss src/css/index.css -o src/css/generated.css -w",
"build": "npm run build:css && gatsby build",
"dev": "run-p watch:css gatsby",
"gatsby": "gatsby develop",
```

If your scripts are like this, create a folder in your `src` folder and name it `css`. Inside it, create an `index.css` file and stuff the Tailwind specific stuff in there:

```css
@tailwind preflight;
@tailwind components;
@tailwind utilities;
```

That's it! Now run

```
npm run develop
```

or

```
npm run dev
```

depending on your script setup. This will generate a file `generated.css` next to your `index.css` file. Import this in your top level React component, for example like this in a Layout component:

```
import '../css/generated.css'
```

You now have full access to the Tailwind utilities in your whole project!

## Before deploying

Before deploying your site to production, you should remove the Tailwind classes that you don't use to keep your CSS bundle small. You can do this manually by going through the tailwind.js file (not recommended) or use a tool like PurgeCSS to remove the unused CSS automatically. I won't cover this, but google Tailwind + PurgeCSS and you'll find out how.

Thanks for reading!
