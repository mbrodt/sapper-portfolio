<script>
  import SectionHeading from "./ui/SectionHeading.svelte";
  import Section from "./ui/Section.svelte";
  import SubHeading from "./ui/SubHeading.svelte";
  import Newsletter from "./Newsletter.svelte";
  import Post from "./Post.svelte";
  export let posts;
</script>

<Section id="writing">
  <SectionHeading>Writing</SectionHeading>
  <SubHeading>Blog</SubHeading>
  <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
    {#each posts as post, index}
      <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
      <Post {post} {index} />
    {/each}
  </ul>
  <div data-aos="fade-up" data-aos-delay="500">
    <div class="mt-8 xl:mt-16 max-w-2xl">
      <SubHeading>Front-end & tech career newsletter</SubHeading>

      <p class="font-body text-lg mt-2">
        Subscribe to my newsletter to receive content related to front-end
        development, navigating a tech career, and general life improvement
        tips.
        <span class="font-bold">No spam. Unsubscribe any time.</span>
      </p>
      <Newsletter />
    </div>
  </div>
</Section>
