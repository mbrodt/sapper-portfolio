<script>
  export let segment;
</script>

{#if segment === 'mastering-coding-mindset'}
  <div class="font-inter bg-gray-200">
    <slot />
  </div>
{:else}

  <div class="font-inter border-t-4 border-red-400 bg-gray-100">
    <main
      class="max-w-7xl w-full mx-auto px-4 sm:px-12 pb-8 pt-12 md:pt-24 lg:py-48
      text-gray-800">
      <slot />
    </main>
  </div>
{/if}
