---
title: "Static sites vs. server/client-side rendering"
date: "2020-12-27"
tags: ["Programming"]
type: "blog-post"
image: "server.jpg"
description: "There's 3 different ways to build and render a website, each with their own advantages and disavantages."
---

If you've ever worked on a website, you've used one of the the 3 major rendering "modes". But you might not be sure which one, what it means, or what the advantages/disadvantages of it is. In this post, I'll try to clarify the difference between client-side rendering, server-side rendering, and static site generation, including which one to pick depending on your usecase.

The way websites work, is that a user (client) will make a request to another computer (server) where the website is "hosted". This happens from the clients browser, and so the browser asks the server for a specific page, like the front page. The server then does some work, and returns that specific page for the browser to display. But this "work" that the server does before sending back the page is entirely dependent on which rendering mode the website is using. More on that under each section below.

## Server-side rendering (SSR)

The "traditional" method of generating the page is called server-side rendering. This is how languages like PHP, Ruby and Python work. The client requests a page, and the server then runs all the code written by the author of the website. This code might get some data from a database, verify the identity of the user making the request, and lots of other things. The server will then generate a finished HTML document to send back to the client "over the wire".

![Server-side rendering](post_images/ssr.png)

This approach has several advantages. For one, the server can directly access the database and pull out whatever data it needs to display to the user. Since the page is built whenever a user requests it, there's never any "stale" data. Most popular CMS'es like WordPress are built using this method, which makes them easier to create themes and plugins for.

SSR is also great for Search Engine Optimization (SEO). When Google tries to crawl and index a website, it will request it like a normal user. The SSR approach will then build and return the full HTML document for Google to crawl, helping Google address and list the page accurately for others to search for.

The clear downside of SSR is that the user will have to wait for each page to be generated specifically for them. And if a lot of users are requesting a page that doesn't have changing data, the server will do a lot of unnecessary "work" by constantly re-creating the same page. Hence, some smart folks came up with an alternative approach:

## Static Site Generation (SSG)

Static site generation is a bit different. Instead of creating a page when a user requests it, all pages of the website are generated ahead of time. Meaning, the "work" that transforms the website code into HTML documents is only run once - and the resulting HTML pages are then sent to each user requesting that page.

![Static site generation](post_images/ssg.png)

One of the main advantages of SSG is performance. Since the server only has to generate the pages once, it saves a lot of time and computation power. It also means that the page can be returned back to the user right away, resulting in speedier page loads and a better experience for the user - both on the initial request, but also on each subsequent route navigation. And, like with SSR, it's great for SEO since Google's crawler will get the complete HTML document to index.

The major downside to SSG is that we can't rely on pages always having the exact same data. If you think of a website like Facebook, where each user request to facebook.com will need to return a completely unique view based on that users interests, friends, follows etc - SSG is not a good match.

Additionally, even pages that are mostly static and identical on each request might need updated data from time to time. If you think of a blog website, each page will look the same for each user. But you still need to be able to change the content of the website, add new blog posts etc. And so while SSG is a great option for blogs, you'll need a mechanism to re-build the website and generate the HTML again on every content change. This approach works fine for minor sites, but can become a problem on large sites with several thousand pages or pages with frequent content updates (think Wikipedia-type sites).

## Client-side rendering (CSR)

The last approach is client-side rendering, also known as the Single Page Application (SPA) approach. The idea here is that the the server returns a very minimal HTML file right away, along with an associated JavaScript file. The JS file then looks for a specific element in the minimal HTML, usually a div with id="app" or id="root". The JavaScript then "binds" itself to this div, and uses it to generate all the HTML directly in the browser (hence the name, "client-side rendering").

![Client-side rendering](post_images/csr.png)

CSR is very common in web applications where users can log in, since SEO isn't a big factor in those types of apps. CSR guarantees a quick initial response, and the possibility to show a loading spinner while the JavaScript is generating the page in the browser. This also leads to a great user experience on each route navigation, since all the work happens directly in the browser. This also means less strain on the server, as more work is delegated to the client.

The major disadvantages of CSR is SEO, since Google won't be able to crawl the website as effectively as with with SSR or SSG approaches. CSR can also lead to "layout jank", where the layout "jumps around" as more and more JS and images are loaded in the browser. You also won't be able to access your database directly, since all the code is run on the client. Databases are only accessible through server-side code, so you'll need some form of API layer to talk to the DB (or simply use public API's that others have made available for you)

## Which to use

As with most questions in development, there's no single right answer. Each project has unique constraints, goals and challenges. It's your job to weigh the different pros and cons to decide on the approach that best fits your project. However, there are some general rules of thumb to narrow down your choices:

- SSR for large, frequently changing sites, or content tailored to different users. For example, a magazine website might want to show specific articles depending on a users preferences.
- SSG for marketing/content heavy sites, blogs, portfolios. Generally sites with less than a few thousand pages, and where the data/content changes at most a few times per day.
- CSR for apps that are behind a login wall, don't require SEO, but need a smooth user experience. Think dashboards, SaaS apps etc.

Regardless of which approach you go for, you will likely use some tool/framework to help you out. If you're into React, I can recommend NextJS which uses a hybrid approach, allowing you to get the best of all three worlds by combining SSG for pages that rarely change, SSR for dynamic pages, and CSR for quick navigation and rendering after the initial load. You can also go with Gatsby for pure SSG, or Create-React-App for CSR.

For Vue, check out NuxtJS for SSR, Gridsome for SSG, and Vue-cli for CSR projects ✌
