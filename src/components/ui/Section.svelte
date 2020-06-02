<script>
	import {onMount} from 'svelte'

	export let id
	let section

	onMount(() => {
		ScrollReveal({
			origin: 'bottom',
			distance: '20px',
			duration: 500,
			delay: 400,
			rotate: { x: 0, y: 0, z: 0 },
			opacity: 0,
			scale: 1,
			easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
			mobile: true,
			reset: false,
			useDelay: 'always',
			viewFactor: 0,
			viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  	}).reveal(section)
	})


</script>

<section bind:this={section} {id} class="mb-12">
  <slot />
</section>
