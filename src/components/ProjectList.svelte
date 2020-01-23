<script>
	import { spring } from 'svelte/motion';
	import {onMount }from 'svelte'
	import VanillaTilt from 'vanilla-tilt'
	let src = 'danfoss.png'	
	onMount(() => {
	console.log(VanillaTilt)
	VanillaTilt.init(document.querySelectorAll(".project"), {
		perspective: 1500,
	max: 10
	});
	})
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

<ul class="my-projects grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
{#each projects as project}
	<li class="w-full ">
		<h3>{project.title}</h3>
		<img class="project " src="{src}" alt="">
		<!-- {#each project.tags as tag}
			<li>{tag}</li>
		{/each} -->
		<a href={project.link}>{project.link}</a>
	</li>
{/each}
</ul>
<!-- markup (zero or more items) goes here -->
<!-- 
	let w = 256
	let h = 256
	let percX = myX / w
	let percY = myY / h
	let tiltX = ((20 / 2) - ((percX) * 20)).toFixed(2);
 	let tiltY = (((percY) * 20) - (20 / 2)).toFixed(2);
	let angle = Math.atan2(e.clientX - (rect.left+w/2),- (e.clientY - (rect.top+h/2)) )*(180/Math.PI); -->

		<!-- on:mouseout="{() => coords.set({x: 0, y:0, s: 1})}"
			  style="will-change: transform; transform: perspective(1500px) rotateX({$coords.x}deg) rotateY({$coords.y}deg);" -->