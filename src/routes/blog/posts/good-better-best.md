---
title: "Good, better, best"
date: "2021-08-02"
tags: ["Programming"]
type: "blog-post"
description: "One of my favourite coding philosophies is the idea that any feature/project can be done in 3 distinct ways"
---

One of my favourite coding philosophies is the idea that any feature/project can be done in 3 distinct ways:

1. The "good" way, that solves a specific problem.
2. The "better" way, that still solves the problem, but adds a little extra to the solution.
3. The "best" way, that goes above and beyond to solve the problem in the most elegant and flexible way.

This might seem a bit abstract, so let's take an example:

You're tasked with building a feature where a user can submit the name of a city to be saved in a database. That's the only requirement, the rest is up to you.

Now, let's start with the "good" solution to this problem. You could add an input tag to your webpage, next to a button type="submit". When the user clicks "submit", you'll take whatever is in the in input field and save it in your database. That's it - you've solved the problem. Your solution is good.

But let's take it one step further. For the "better" solution, maybe we'll disable the button when the input is empty so it can't be submitted. We could also add some validation to make sure the user can't submit an input less than 2 characters, or more than 40 characters. Finally, we could display an error message if something goes wrong with our database call. Again, we've solved the problem - but in a much more useful way this time. We've handled some edge cases and made the solution nicer, but fundamentally it's the same.

Let's then try to think of the "best" solution we can come up with. On top of the previous solution, maybe we could add an autocompletion feature to the input field. When a user starts typing, we'll show a list of all the cities that begin with the characters they've typed. We could even make this search smarter by adding abbreviations, so maybe "NY" would find "New York" etc. Finally, when the user makes a successful database submit, we'll show a nice checkmark animation to indicate that everything went smoothly.

You see where I'm going with this? Each solution solves the given problem, but they do it in very different ways.

The key is knowing which solution you should choose at any given moment, which usually depends on the time constraints, budget and client needs.

I prefer to start with the "good" solution, and then gradually add features if there's room for it when other, more important problems have been solved. It's all about prioritizing your time and energy to what best matches the needs of the project, but hopefully this gives you a frame of reference to start with when designing/implementing new features.

​
