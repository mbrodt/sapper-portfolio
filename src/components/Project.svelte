<script>
	export let project
</script>

<!-- {#if isVisible} -->
<!-- transition:fly="{{ y: 200, duration: 500, delay: index * 500 }}" -->
 <li  class="w-full">
	<a href="{project.link}" target="_blank" rel="noopener noreferrer">
		<img class="project w-full" src={'projects/' + project.src} alt="Project
		showcase" />
	</a>
	<h3 class="tracking-wider uppercase text-gray-900 mt-4">
		{project.title}
	</h3>

	<div class="-mx-1">
		{#each project.tags as tag}
		<span
			class="bg-red-200 text-red-700 text-xs font-bold inline-block leading-4 px-2 py-1 mx-1 mt-2 rounded"
		>
			{tag}
		</span>
		{/each}
	</div>
	<p class="mt-4">{project.description}</p>
</li>
<!-- {/if} -->
