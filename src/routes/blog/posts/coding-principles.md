---

title: "Coding principles"
date: "2021-11-02"
tags: ["Programming"]
type: "blog-post"
description: "If you work as (or currently study to become) a developer, you might've heard of something like the SOLID principles of object-oriented programming. "

---

If you work as (or currently study to become) a developer, you might've heard of something like the SOLID principles of object-oriented programming.

In case you haven't, SOLID is an acronym for 5 software engineering principles: 1. Single Responsibility 2. Open/Closed 3. Lisskov Substitution 4. Interface Segregation and 5. Dependency Inversion.

And if you're anything like me, these words don't mean a single thing to you.

These principles, while great, can feel very disconnected from how we actually develop websites and apps nowadays. That's why I prefer coding by a few easier to understand concepts, that you can apply in your own work every day:

1. **Keep it simple stupid (KISS).** The KISS principle helps you answer which direction you should take a certain feature, or design, or idea. By forcing yourself to always keep it simple, you'll end up with systems that are easier to use and has less bloat. It helps to avoid unnecessary complexity that evolves from convoluted design. And making systems simple is actually the best ways to make them awesome - because simple systems are easier to use, and avoids many pitfalls of complex systems.
2. **You aren't gonna need it (YAGNI).** The idea behind YAGNI is that "you should not add functionality until deemed necessary". It stems from the fact that a lot of software becomes bloated, or worse, never gets shipped because there's always more features to add. Whenever you're about to add a piece of functionality to your project, try to think if this feature will actually benefit the user (or if it's just a fancy idea that someone came up with). If you don't need it right now, then don't create it right now. Simple.
3. **Don't repeat yourself (DRY).** Keeping your code "DRY" means to avoid copy/pasting code, as that can lead to inconsistencies and be difficult to maintain. If you find yourself copy/pasting code, chances are that you need an abstraction. Example: you need a global navigation across all the pages on your website. In pure HTML, with 4 pages, you would need to copy/paste the navigation code 4 times, once for each file. If you then wished to change one of the navigation items, you'd have to change it in 4 places - or the result will be inconsistent. By moving this into a template partial or component, you can keep all the navigation code in 1 place.

I find these 3 principles much more tangible, easier to understand AND more applicable in day-to-day work. I also recommend using them mostly as **guidelines** , rather than hard and fast rules. Sometimes you need to create something complicated, and sometimes copy/pasting code once is a better solution than creating an abstraction.

But keeping these 3 basic rules in mind should help you make much better decisions when working on your projects!

​
