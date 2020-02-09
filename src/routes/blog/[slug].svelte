<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="px-4 sm:px-12 pt-32 lg:py-48 max-w-7xl mx-auto">
  <div class="mb-16 max-w-2xl">
    <a href="/">
      <svg
        class="text-gray-500 fill-current"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" />
      </svg>
    </a>
    <h1
      class="text-red-400 mt-2 text-3xl sm:text-4xl leading-tight xl:text-5xl
      font-semibold">
      {post.title}
    </h1>
    <div class="flex mt-1">

      <p class="text-gray-600">
        <span>{post.printDate}</span>
        <span>&bull</span>
        <span>{post.printReadingTime}</span>
      </p>
    </div>
  </div>

  <div class="rich-text w-full overflow-hidden max-w-2xl">
    {@html post.html}
  </div>
</div>
