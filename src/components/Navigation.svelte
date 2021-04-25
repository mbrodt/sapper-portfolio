<script>
  // your script goes here
  import SvgDrawing from "./SvgDrawing.svelte";
  import { logoStore } from "../store";
  import { onMount } from "svelte";
  export let segment;
  console.log("segment", segment);
  let ref;

  onMount(() => {
    $logoStore.navHeight = ref.offsetHeight;
  });
</script>

<div
  bind:this={ref}
  class="fixed top-0 w-full pb-2 pt-3 z-20 hidden sm:block bg-gray-100 shadow"
>
  <nav
    class="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-12"
  >
    <a href="/" class="flex items-center">
      <img
        src="/profile.jpg"
        alt="Mads Brodt"
        class="w-8 h-8 -mt-1 rounded-full"
      />
      <span class="text-gray-700 font-bold ml-4">Mads Brodt</span>
    </a>
    <ul class="flex space-x-2 text-gray-700">
      <li
        class="font-bold hover:bg-gray-200 py-3 px-2 rounded-lg transition-all
          duration-150 ease"
      >
        <a class="h-full" href="/newsletter">Newsletter</a>
      </li>
      <li
        class="font-bold hover:bg-gray-200 py-3 px-2 rounded-lg transition-all
          duration-150 ease"
      >
        <a href="/blog">Blog</a>
      </li>
      <li
        class="font-bold hover:bg-gray-200 py-3 px-2 rounded-lg transition-all
          duration-300 150e-in"
      >
        <a href="/mastering-coding-mindset">Book</a>
      </li>
      <li
        class="font-bold hover:bg-gray-200 py-3 px-2 rounded-lg transition-all
          duration-300 150e-in"
      >
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </nav>
  {#if !segment}
    <SvgDrawing />
  {/if}
</div>

<div
  class="fixed bottom-0 z-10 bg-white py-2 w-full grid grid-cols-4 border-t
    border-gray-400 sm:hidden"
>
  <a href="/" class="flex flex-col items-center">
    <svg
      class="w-6 h-6 text-gray-600 transition-colors duration-300 ease-in"
      class:text-red-400={segment === undefined}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0
        01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6
        0h6"
      />
    </svg>
    <span
      class:text-red-400={segment === undefined}
      class="text-gray-700 text-sm transition-colors duration-300 ease-in"
    >
      Home
    </span>
  </a>
  <a href="/newsletter" class="flex flex-col items-center">
    <svg
      class:text-red-400={segment === 'newsletter'}
      class="w-6 h- transition-colors duration-300 ease-in6 text-gray-600"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0
        00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
    <span
      class:text-red-400={segment === 'newsletter'}
      class="text-gray-700 text-sm transition-colors duration-300 ease-in"
    >
      Newsletter
    </span>
  </a>
  <a href="/blog" class="flex flex-col items-center">
    <svg
      class:text-red-400={segment === 'blog'}
      class="w-6 h-6 text-gray-600 transition-colors duration-300 ease-in"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0
        01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
    <span
      class:text-red-400={segment === 'blog'}
      class="text-gray-700 text-sm transition-colors duration-300 ease-in"
    >
      Blog
    </span>
  </a>
  <a href="/mastering-coding-mindset" class="flex flex-col items-center">
    <svg
      class="w-6 h-6 text-gray-600 transition-colors duration-300 ease-in"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3
        6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168
        5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477
        18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
    <span class="text-gray-700 text-sm transition-colors duration-300 ease-in">
      Book
    </span>
  </a>
</div>

<div />
