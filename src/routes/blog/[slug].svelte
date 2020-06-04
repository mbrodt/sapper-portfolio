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
	import { fly } from 'svelte/transition';
  export let post;
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div in:fly="{{ y: 200, duration: 500 }}">
  <div class="mb-16 max-w-2xl mx-auto">
    <a href="/#writing">
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-6 h-6 text-gray-500">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7 16l-4-4m0 0l4-4m-4 4h18" />
      </svg>

    </a>
    <h1 class="text-4xl xl:text-5xl font-bold text-gray-900">
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

  <div class="rich-text w-full overflow-hidden max-w-2xl mx-auto font-body">
    {@html post.html}
  </div>
</div>
