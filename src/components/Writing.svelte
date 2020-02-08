<script>
  import SectionHeading from "./ui/SectionHeading.svelte";
  import Section from "./ui/Section.svelte";
  export let posts;
</script>

<Section>
  <SectionHeading>Writing</SectionHeading>
  <ul>
    {#each posts as post}
      <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
      <li class="text-lg text-red-400 py-6 border-b-2 border-gray-200">
        <a rel="prefetch" href="blog/{post.slug}">
          {post.title}
          <span>January 12, 2020</span>
        </a>

      </li>
    {/each}
  </ul>
</Section>
