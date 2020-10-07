<script>
  import { onMount } from "svelte";

  export let project;
  export let index;
  let projectNode;

  const callback = function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("opacity-0", "translate-y-16");
      }
    });
  };

  onMount(() => {
    setTimeout(() => {
      const observer = new IntersectionObserver(callback);
      observer.observe(projectNode);
    }, 800);
  });
</script>

<li
  bind:this={projectNode}
  class="w-full card opacity-0 transform translate-y-16"
  style="--transition-order: {index + 2}">
  <a href={project.link} target="_blank" rel="noopener noreferrer">
    <img
      class="project w-full"
      src={'projects/' + project.src}
      alt="Project showcase" />
  </a>
  <h3 class="tracking-wider uppercase text-gray-900 mt-4">{project.title}</h3>

  <div class="-mx-1">
    {#each project.tags as tag}
      <span
        class="bg-red-200 text-red-700 text-xs font-bold inline-block leading-4
          px-2 py-1 mx-1 mt-2 rounded">
        {tag}
      </span>
    {/each}
  </div>
  <p class="mt-4 font-body">{project.description}</p>
</li>
