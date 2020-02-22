<script>
  // your script goes here
  import SocialIcons from "./SocialIcons.svelte";
  import Dots from "./Dots.svelte";
</script>

<style>

</style>

<div class="pb-12 lg:max-w-full flex justify-between items-center">
  <div>
    <SocialIcons />
    <h1
      class="mt-2 text-4xl sm:text-5xl leading-tight xl:text-6xl font-semibold
      text-gray-800">
      Hi, I'm Mads
    </h1>
    <p class="mt-3 text-lg max-w-xl lg:max-w-3xl xl:text-2xl">
      I'm a front-end developer from Copenhagen. I design, create and support
      websites and applications for clients and for fun. I love using modern
      technology to create exceptional user experiences, and always strive to
      create high quality products.
    </p>
  </div>
  <div class="hidden lg:block">
    <Dots />
  </div>
</div>
