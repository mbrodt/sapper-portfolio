<script>
  import Testimonial from "./Testimonial.svelte";

  const danQuote = {
    author: "Dan Spratling",
    quote:
      "Development is more than just about writing code. Learning to get into the right mind-space to be effective is one of the hardest challenges for a programmer. If you want to think like a programmer, rather than just write code, then this is the book you need. Learn all of the soft skills you need which would usually take years of experience to acquire, and use it to find your next job.",
    linkUrl: "https://twitter.com/dan_spratling",
    imageUrl: "/twitter_profiles/dan.jpg",
    option: "small",
  };

  const annieQuote = {
    author: "Annie Bombanie",
    quote:
      "Well-structured, relevant information to return to again and again. Mads presents advice in an easy-to-understand digestible format that's indispensable for the developer starting out, but also serves as excellent reminders for the more seasoned.",
    linkUrl: "https://twitter.com/anniebombanie_",
    imageUrl: "/twitter_profiles/annie.jpg",
    option: "small",
  };

  const devinQuote = {
    author: "Devin Ford",
    quote:
      "This book was an eye opener for me! It changed the way i approach projects, learning, and most of all my mindset when it comes to learning. If you need some tips, or new ways to think, I can’t suggest this book enough, it’s something I will reference for a long time!",
    linkUrl: "https://twitter.com/devinDford",
    imageUrl: "/twitter_profiles/devin.jpg",
    option: "small",
  };

  const jackQuote = {
    author: "Jack Domleo",
    quote:
      "Currently reading through 'Mastering the Coding Mindset' by Mads Brodt and I am impressed. It's a topic that is extremely important but often missed and overlooked. Mads has taken his time and done some thorough research to ensure this book is well detailed and useful. I fully believe it will be useful for the majority of developers to think more about how they tackle a problem, go about their day-to-day routine and just overall improve their coding mindset. The book structure is laid out into 4 well-outlined sections with a fair amount of images and easy-to-read font (clear readable text and well-structured paragraphs and chapters).",
    linkUrl: "https://twitter.com/jackdomleo7",
    imageUrl: "/twitter_profiles/jack.jpg",
    option: "small",
  };
</script>

<div class="container mx-auto lg:mt-32 xl:mt-48">
  <h2 class="h2">What people are saying</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2">
    <Testimonial {...danQuote} />
    <Testimonial {...annieQuote} />
    <Testimonial {...devinQuote} />
    <Testimonial {...jackQuote} />
  </div>
</div>
