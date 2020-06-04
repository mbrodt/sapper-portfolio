<script>
import Timeline from "../components/Timeline.svelte"
import { fly } from 'svelte/transition';

// function translate(node, { delay, duration }) {
// 		const o = +getComputedStyle(node).opacity;

// 	return {
// 		delay,
// 		duration,
// 		css: t => `opacity: ${t * o}; transform: translateY(${t * 20}px)`
// 	};
// 	}
</script>

<svelte:head>
	<title>About</title>
</svelte:head>
<div in:fly="{{ y: 200, duration: 500 }}">
<a href="/">
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
    <h1
      class="text-red-400 mt-2 text-3xl sm:text-4xl leading-tight xl:text-5xl
      font-semibold">
      About me
    </h1>
	<Timeline />
</div>
