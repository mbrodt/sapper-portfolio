<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
  import Post from "../../components/Post.svelte";
  import NewsletterSection from "../../components/NewsletterSection.svelte";
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1
  class="text-red-400 mt-2 text-3xl sm:text-4xl leading-tight xl:text-5xl
  font-semibold">
  Blog
</h1>

<ul class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
  {#each posts as post, index}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <Post {post} {index} />
  {/each}
</ul>
<NewsletterSection title={'Never miss an update'} />
