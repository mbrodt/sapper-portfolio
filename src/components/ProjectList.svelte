<script>
	// your script goes here
	let projects = [{
		title: "Danfoss IXA",
		tags: ['React', 'Gatsby', 'Tailwind', 'WordPress'],
		link: "https://danfoss-ixa.com",
	},
	{
		title: "Light in the Dark",
		tags: ['React', 'Gatsby', 'Tailwind', 'React-Spring'],
		link: "https://refugeeworld.org",
	},
		{
		title: "Diako19",
		tags: ['React', 'Gatsby', 'Tailwind', 'Contentful'],
		link: "https://diako19.dk",
	}]
</script>

<ul class="grid grid-cols-3 gap-4">
{#each projects as project}
	<li class="w-full bg-red-300 transform scale-100 hover:scale-110 duration-300 ease-out">
		<h3>{project.title}</h3>
		{#each project.tags as tag}
			<li>{tag}</li>
		{/each}
		<a href={project.link}>{project.link}</a>
	</li>
{/each}
</ul>
<!-- markup (zero or more items) goes here -->