<script>
  import { draw } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { onMount } from "svelte";
  import { logoStore } from "../store";
  import { mapConstrain } from "../utils";

  export let ref,
    placeholder = false;

  let showLogo = false,
    floatingStyling = "",
    scrollY;

  $: if (!placeholder && ref) {
    const threshold = window.innerHeight * 0.5;
    const x = mapConstrain(
      -scrollY,
      -threshold,
      0,
      window.innerWidth * 0.5,
      $logoStore.x
    );
    const xOffset = mapConstrain(
      scrollY,
      0,
      threshold,
      0,
      $logoStore.width * 0.5
    );
    const y = mapConstrain(-scrollY, -threshold, 0, 0, $logoStore.y);
    const yOffset = mapConstrain(
      scrollY,
      0,
      threshold,
      0,
      $logoStore.height * 0.5 - $logoStore.navHeight * 0.5
    );
    const scale = -mapConstrain(
      scrollY,
      0,
      threshold,
      -1,
      -(($logoStore.navHeight - 16) / $logoStore.height)
    );

    const rotation = mapConstrain(scrollY, 0, threshold, 0, 360);

    floatingStyling = `
      width: ${$logoStore.width}px;
      height: ${$logoStore.height}px;
      transform: translate(${x - xOffset}px, ${
      y - yOffset
    }px) scale(${scale}) rotate(${-rotation}deg);
    `;
  }

  onMount(() => {
    showLogo = !showLogo;
    setTimeout(() => {
      const paths = document.querySelectorAll(".text-path");
      paths.forEach((path) => {
        path.style.fill = "#fc8181";
      });
    }, 5600);
    if (placeholder) {
      const { top: y, left: x, width, height } = ref.getBoundingClientRect();
      logoStore.update(() => ({
        ...$logoStore,
        x,
        y,
        width,
        height,
      }));
    }
  });
</script>

<svelte:window bind:scrollY />
<svg
  class="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-64 xl:h-64 z-30 {placeholder ? 'lg:opacity-0' : ''}"
  class:floating={!placeholder}
  class:top-0={!placeholder}
  class:left-0={!placeholder}
  class:fixed={!placeholder}
  viewBox="0 0 200 200"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style={floatingStyling}
  bind:this={ref}
>
  {#if showLogo}
    <path
      in:draw={{ duration: 2500, delay: 2200, easing: quintOut }}
      d="M103 6.35085L179.603 50.5774C181.459 51.6491 182.603 53.6299 182.603
      55.7735V144.227C182.603 146.37 181.459 148.351 179.603 149.423L103
      193.649C101.144 194.721 98.8564 194.721 97 193.649L20.3975 149.423C18.5411
      148.351 17.3975 146.37 17.3975 144.227V55.7735C17.3975 53.6299 18.5411
      51.6491 20.3975 50.5774L97 6.35085C98.8564 5.27905 101.144 5.27906 103
      6.35085Z"
      stroke="#fc8181"
      stroke-width="8"
    />
    <path
      class="text-path"
      in:draw={{ duration: 2000, delay: 3600, easing: quintOut }}
      d="M48.0875 137.464C47.1921 138.365 53.3972 137.965 56.1465
      137.464C58.8957 136.963 84.8005 87.9048 84.8005 87.0038C84.8005 86.1028
      88.3823 86.1028 88.3823 87.0038C88.3823 87.9048 78.5324 124.849 81.2188
      125.75C83.9051 126.651 88.4453 126.15 88.3823 125.75C88.3192 125.35
      120.124 83.6721 123.304 87.9048C126.485 92.1375 100.981 130.656 100.918
      132.959C100.855 135.261 106.354 135.662 108.977 135.662C111.601 135.662
      114.35 136.162 114.35 134.761C123.218 109.103 151 64.9775 151 64.0764C151
      63.1753 135.442 62.4467 135.84 63.5759C136.239 64.705 100.497 98.6255
      98.2321 98.7178C95.9674 98.8101 104.694 67.5656 105.396 65.378C106.097
      63.1905 85.414 62.0848 84.8005 66.2791C84.187 70.4734 84.1143 73.9077
      83.0096 75.2898C81.905 76.672 48.983 136.563 48.0875 137.464Z"
    />
  {/if}
</svg>

<style>
  .text-path {
    stroke: #fc8181;
    fill: transparent;
    transition: 0.8s;
  }
</style>
