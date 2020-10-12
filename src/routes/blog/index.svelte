<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
  import Post from "../../components/Post.svelte";
  import NewsletterSection from "../../components/NewsletterSection.svelte";

  import { fly } from "svelte/transition";
  import { onMount } from "svelte";
  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>
<div class="relative pb-20 lg:pb-28">
  <div>
    {#if visible}
      <div class="text-center" in:fly={{ y: 70, duration: 600 }}>
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-bold text-center
            text-gray-900 leading-9 tracking-tight sm:leading-10">
          From the blog
        </h2>
        <p
          class="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-800 sm:mt-4">
          This is where I write about front-end development, coding career
          advice, and anything else going on in my life that might benefit
          others.
        </p>
      </div>
    {/if}
    <ul class="mt-12 grid gap-6 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
      {#each posts as post, index}
        <!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
        <Post {post} {index} />
      {/each}
    </ul>
  </div>
</div>
<!-- <h1
  class="text-red-400 mt-2 text-3xl sm:text-4xl leading-tight xl:text-5xl
  font-semibold">
  Blog
</h1> -->

<!-- <ul class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 mb-12">
  {#each posts as post, index} -->
<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
<!-- <Post {post} {index} />
  {/each}
</ul> -->
<NewsletterSection title={'Never miss an update'} />
