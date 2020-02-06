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

<div
  style="height: 70vh; background: linear-gradient(120deg, rgb(212, 252, 121)
  0%, rgb(150, 230, 161) 100%)">

  <h1>{post.title}</h1>
</div>

<div class="content">
  {@html post.html}
</div>
