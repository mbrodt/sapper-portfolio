<script>
import Timeline from "../components/Timeline.svelte"
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div>
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
