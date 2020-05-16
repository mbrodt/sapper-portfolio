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
          class="text-xl text-red-400 hover:text-red-700 transition-colors
          duration-200 ease-out group lg:flex lg:justify-between
          lg:items-baseline "
          rel="prefetch"
          href="blog/{post.slug}">
          <p class="">
            {post.title}
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="transform transition-transform duration-200 ease-out
              group-hover:translate-x-4 group-hover:scale-125 -mt-1 inline w-5
              h-5 sm:w-5 sm:h-5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </p>
          <p class="mt-1 lg:mt-0 text-gray-600 text-base">{post.date}</p>
        </a>

      </li>
    {/each}
  </ul>
</Section>
