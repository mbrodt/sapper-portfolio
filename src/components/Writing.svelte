<script>
  import SectionHeading from "./ui/SectionHeading.svelte";
  import Section from "./ui/Section.svelte";
  export let posts;
</script>

<Section>
  <SectionHeading>Writing</SectionHeading>
  <ul class="max-w-2xl">
    {#each posts as post}
      <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
      <li class="py-6 border-b-2 border-gray-200">
        <a
          class="text-xl text-red-400 lg:flex lg:justify-between
          lg:items-baseline"
          rel="prefetch"
          href="blog/{post.slug}">
          <p>{post.title}</p>
          <p class="mt-1 lg:mt-0 text-gray-600 text-base">{post.date}</p>
        </a>

      </li>
    {/each}
  </ul>
</Section>
