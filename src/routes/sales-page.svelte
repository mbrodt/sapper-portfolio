<script>
  import Hero from "../components/marketing/Hero.svelte";
  import Content from "../components/marketing/Content.svelte";
  import Testimonial from "../components/marketing/Testimonial.svelte";
  import AboutTheAuthor from "../components/marketing/AboutTheAuthor.svelte";
  import FAQ from "../components/marketing/FAQ.svelte";
</script>

<style>
  /* your styles go here */
</style>

<div class="border-t-8 border-indigo-600">
  <Hero />
  <Content />
  <Testimonial
    author={'Sara Soueidan'}
    quote={`Please tell me you’re going to write a book with all your tips someday?
I'd give you my money in a heartbeat.`}
    imageUrl={'https://refactoring-ui.nyc3.cdn.digitaloceanspaces.com/landing/sara-soueidan.jpg'} />
  <AboutTheAuthor />
  <FAQ />

</div>
