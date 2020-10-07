<script>
  import SvgDrawing from "./SvgDrawing.svelte";
  // import { gsap } from "gsap";
  // import { ScrollTrigger } from "gsap/ScrollTrigger";
  // gsap.registerPlugin(ScrollTrigger);
  // import { onMount } from "svelte";
  // let logoWrapper;
  // onMount(() => {
  //   console.log("mounted");
  //   const tl = gsap.timeline();
  //   // gsap.to(".logo-wrapper", {
  //   //   scrollTrigger: {
  //   //     trigger: ".logo-wrapper",
  //   //     start: "top center",
  //   //     end: "top 200px",
  //   //     scrub: true,
  //   //     markers: true,
  //   //   },
  //   //   x: 400,
  //   //   scale: 1.5,
  //   //   duration: 3,
  //   //   rotation: 360,
  //   // });
  //   tl.from(".intro-anim", {
  //     opacity: 0,
  //     y: 100,
  //     duration: 1,
  //     ease: "power2.out",
  //     stagger: 0.5,
  //   });
  // });
</script>

<style>
</style>

<div
  class="pb-12 lg:max-w-full flex flex-col md:flex-row-reverse justify-between
    items-center">
  <div class="mb-8 md:mb-0">
    <SvgDrawing />
    <!-- <div class="logo-wrapper w-32 h-32 bg-orange-600" /> -->
  </div>
  <div>
    <h1
      data-aos="fade-up"
      class="mt-2 text-4xl sm:text-5xl leading-tight xl:text-6xl font-semibold
        text-gray-800">
      Hi, I'm Mads
    </h1>
    <p
      data-aos="fade-up"
      data-aos-delay="300"
      class="mt-3 text-lg max-w-xl lg:max-w-3xl xl:text-2xl font-body">
      I'm a front-end engineer from Copenhagen. I design, create and support
      websites and applications for clients and for fun. I love using modern
      technology to create exceptional user experiences, and always strive to
      create high quality products. <a
        data-aos="fade-up"
        data-aos-delay="500"
        class="text-red-400 hover:text-red-700 transition-colors duration-200
          ease-out group mt-3 flex items-center"
        href="/newsletter">
        Check out my newsletter <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="transform transition-transform duration-200 ease-out
            group-hover:translate-x-4 group-hover:scale-125 ml-2 inline w-5 h-5
            sm:w-5 sm:h-5">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </p>
  </div>
</div>
