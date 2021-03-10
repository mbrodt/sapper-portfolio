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
  class="card transform opacity-0 translate-y-16 flex flex-col rounded-lg
    shadow-lg overflow-hidden teaser"
  bind:this={postNode}
>
  <div class="flex-shrink-0">
    <img
      class="h-48 w-full object-cover teaser-img"
      src="post_images/{post.image}"
      alt=""
    />
  </div>
  <div class="flex-1 bg-white p-6 flex flex-col justify-between">
    <div class="flex-1">
      <!-- <p class="text-sm leading-5 font-medium text-indigo-600">
        <a href="blog/" class="hover:underline"> Blog </a>
			</p> -->
      <div class="text-red-400 uppercase font-bold text-xs mb-1 space-x-4">
        {#each post.tags as tag}<span>{tag}</span>{/each}
      </div>
      <a href="blog/{post.slug}" class="flex flex-col">
        <h3 class="mt-2 text-2xl leading-7 font-semibold text-gray-900 flex-1">
          {post.title}
        </h3>
        <p class="mt-3 text-base leading-6 text-gray-600">{post.description}</p>
      </a>
    </div>
    <div class="mt-3 flex text-sm leading-5 text-gray-600">
      <time datetime="2020-03-16"> {post.date} </time>
      <span class="mx-1"> &middot; </span>
      <span> {post.readingTime} </span>
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
</style>
