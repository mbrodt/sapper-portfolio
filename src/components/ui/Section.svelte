<script>
  export let id;
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  // onMount(() => {
  //   gsap.from(`#projects`, {
  //     opacity: 0,
  //     y: 100,
  //     duration: 1,
  //     ease: "power2.out",
  //   });
  // });
</script>

<section data-aos="fade-up" data-aos-delay="800" {id} class="mb-12 xl:mb-24">
  <slot />
</section>
