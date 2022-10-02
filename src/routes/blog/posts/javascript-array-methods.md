---
title: "JavaScript array methods"
date: "2021-07-02"
tags: ["Programming", "Front-end"]
type: "blog-post"
description: "In case you're not familiar, JavaScript offers many awesome array methods to make manipulating data much easier. Especially in this time with modern front-end frameworks handling lots of data, being able to control that with brief and clear code is a godsend. "
---

In case you're not familiar, JavaScript offers many awesome array methods to make manipulating data much easier. Especially in this time with modern front-end frameworks handling lots of data, being able to control that with brief and clear code is a godsend.

For me, properly learning how the various JS array methods work has been a significant productivity booster and made my code much easier to understand and work with. And once you get the hang of the most important ones, they're actually not that hard to grasp. Personally I find myself mostly using the below 3:

1. Array.map(). The "map" function allows you to iterate an array and modify each element, before returning a new array of the same length. This is useful for stuff like multiplying each number in an array, adding a new property to each object in the array, or turning an array of objects into a simpler list of values.
2. Array.filter(). The "filter" function also iterates the array, but returns a new array only containing the elements that satisfy a given condition. This is great for removing elements and retrieving a subset of the original array, like getting a new array with only paying users for example.
3. Array.find(). The "find" function is a bit different, because it doesn't return a new array. Instead, it returns the first element that satisfies a given condition (unlike filter that returns all of them). Super useful to find specific elements in an array, like finding a user by their username.

These are just some of the most popular array methods, but there's lots of other ones like reduce(), some(), every() etc. And the cool thing about these methods is that they're immutable - meaning they always return a new array or single value, rather than mutating the original array.

I definitely recommend investing some time into getting comfortable with these methods, as they will seriously improve your workflow on top of producing more readable JS code!

​
