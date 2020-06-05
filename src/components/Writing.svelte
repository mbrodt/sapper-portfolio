<script>
  import SectionHeading from "./ui/SectionHeading.svelte";
  import Section from "./ui/Section.svelte";
  import Post from "./Post.svelte";
  export let posts;
</script>

<Section id="writing">
  <SectionHeading>Writing</SectionHeading>
  <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
    {#each posts as post, index}
      <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
      <Post {post} {index} />
    {/each}
  </ul>
</Section>
