<script>
  import SectionHeading from "./ui/SectionHeading.svelte";
  import Section from "./ui/Section.svelte";
	export let posts;
	
	const formatPostTags = (tags) => {
		if (tags.length === 1) {
			return tags[0]
		} else {
			return tags.join(', ')
		}
	}
</script>

<Section id="writing">
  <SectionHeading>Writing</SectionHeading>
  <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
    {#each posts as post}
      <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
				<a class="flex block bg-white shadow-lg transition-shadow transition-transform duration-200 hover:shadow-xl transform hover:-translate-y-1 focus:translate-y-0 focus:shadow rounded-lg cursor-pointer group" href="blog/{post.slug}">
					<div class="flex flex-col flex-1 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
						<div class="text-red-400 uppercase font-bold text-xs mb-1">
							{formatPostTags(post.tags)}
						</div>
						<div class="text-gray-800 font-bold text-lg lg:text-xl xl:text-2xl mb-1 flex-1">{post.title}</div>
						<div class="text-gray-500 uppercase font-bold text-xs">{post.date}</div>
					</div>
					<div class="flex items-center pr-4">
						<svg class="w-6 h-6 transform transition-transform duration-200 ease-out
        group-hover:translate-x-2 group-hover:scale-125" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7"></path></svg>
					</div>
				</a>
      <!-- <li class="py-6 border-b-2 border-gray-200">
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

      </li> -->
    {/each}
  </ul>
</Section>
