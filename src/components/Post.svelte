<script>
  import { onMount } from "svelte";
  export let post;
  const formatPostTags = (tags) => {
    if (tags.length === 1) {
      return tags[0];
    } else {
      return tags.join(", ");
    }
  };
  let postNode;

  let src = post.image ? `post_images/${post.image}` : post.unsplashImage;

  const callback = function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-16");
      }
    });
  };

  onMount(() => {
    const observer = new IntersectionObserver(callback);
    observer.observe(postNode);
  });
</script>

<li
  class="flex flex-col overflow-hidden transform translate-y-16 rounded-lg shadow-lg opacity-0 card teaser"
  bind:this={postNode}
>
  <div class="flex-shrink-0">
    <img class="object-cover w-full h-48 teaser-img" {src} alt="" />
  </div>
  <div class="flex flex-col justify-between flex-1 p-6 bg-white">
    <div class="flex-1">
      <!-- <p class="text-sm font-medium leading-5 text-indigo-600">
        <a href="blog/" class="hover:underline"> Blog </a>
			</p> -->
      <div class="mb-1 space-x-4 text-xs font-bold text-red-400 uppercase">
        {#each post.tags as tag}
          <span>{tag}</span>
        {/each}
      </div>
      <a href="blog/{post.slug}" class="flex flex-col">
        <h3 class="flex-1 mt-2 text-2xl font-semibold leading-7 text-gray-900">
          {post.title}
        </h3>
        <p class="mt-3 text-base leading-6 text-gray-600 post-description">
          {post.description}
        </p>
      </a>
    </div>
    <div class="flex mt-3 text-sm leading-5 text-gray-600">
      <time datetime="2020-03-16">{post.date}</time>
      <span class="mx-1">&middot;</span>
      <span>{post.readingTime}</span>
    </div>
  </div>
</li>

<style>
  .teaser-img {
    transition: all 0.5s ease;
  }

  .teaser:hover .teaser-img {
    transform: scale(1.015);
  }

  .post-description {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
</style>
