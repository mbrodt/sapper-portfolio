<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>


<Nav {segment}/>

<main class="max-w-6xl w-full mx-auto p-4">
	<slot></slot>
</main>