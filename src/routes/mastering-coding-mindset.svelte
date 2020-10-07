<script>
  import Hero from "../components/marketing/Hero.svelte";
  import Content from "../components/marketing/Content.svelte";
  import Testimonial from "../components/marketing/Testimonial.svelte";
  import AboutTheAuthor from "../components/marketing/AboutTheAuthor.svelte";
  import Pricing from "../components/marketing/Pricing.svelte";
  import FAQ from "../components/marketing/FAQ.svelte";
  import AnnouncementBar from "../components/marketing/AnnouncementBar.svelte";
  import Waves from "../components/marketing/Waves.svelte";
  import WhatsInside from "../components/marketing/WhatsInside.svelte";
  import Footer from "../components/marketing/Footer.svelte";
  import Feedback from "../components/marketing/Feedback.svelte";

  const traversyQuote = {
    author: "Brad Traversy",
    quote:
      "Mastering the Coding Mindset is an easy to understand, in-depth guide on how to learn, prepare, communicate, deal with self doubt and much more. I would recommend this book to anyone that wants to become or is already working as a software developer.",
    linkUrl: "https://twitter.com/traversymedia",
    imageUrl: "/twitter_profiles/traversy.jpg",
  };

  const simonQuote = {
    author: "Simon Høiberg",
    quote:
      "'Mastering the Coding Mindset' is a great resource for anyone serious about taking their career in Software Development to the next level! Especially for entry-level developers, it has a great introduction to technical fundamentals, without being overwhelming. And even for experienced developers, Mads Brodt is shedding light on a series of great habits that are worth picking up today, and keeping for the rest of a work-life! This book is highly recommended",
    linkUrl: "https://twitter.com/SimonHoiberg",
    imageUrl: "/twitter_profiles/simon.jpg",
  };

  const jamesQuote = {
    author: "James Tucker",
    quote:
      "Mastering the Coding Mindset is a fantastic book because Mads is an empathetic person - you get the sense as you read that he remembers exactly what it was like to be a new developer. This book isn’t about learning shiny new toys - it’s about acquiring the habits and foundational skills needed to succeed as a developer. As such, I wholeheartedly recommend it.",
    linkUrl: "https://twitter.com/tucker_dev",
    imageUrl: "/twitter_profiles/james.jpg",
  };
</script>

<style>
  /* your styles go here */
</style>

<svelte:head>
  <title>Mastering the Coding Mindset</title>
  <meta
    name="description"
    content="Tips and Tricks for Becoming a Better Developer and Having a
    Successful Career" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@madsbrodt" />
  <meta name="twitter:title" content="Mastering the Coding Mindset" />
  <meta
    name="twitter:description"
    content="Tips and Tricks for Becoming a Better Developer and Having a
    Successful Career" />
  <meta name="twitter:image" content="https://madsbrodt.com/book_meta.png" />
</svelte:head>
<div>
  <AnnouncementBar />
  <Hero />
  <Content />
  <Testimonial {...traversyQuote} />
  <Waves />
  <WhatsInside />
  <div class="mt-8 lg:mt-16">
    <Testimonial {...simonQuote} />
  </div>
  <AboutTheAuthor />
  <Feedback />
  <Pricing />
  <FAQ />
  <Testimonial {...jamesQuote} />
  <Waves />
  <Footer />
</div>
