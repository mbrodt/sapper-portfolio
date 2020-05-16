<script>
  import SectionHeading from "./ui/SectionHeading.svelte";
  import Section from "./ui/Section.svelte";
  import SocialIcons from "./SocialIcons.svelte";
</script>

<style>
  /* your styles go here */
</style>

<Section>
  <SectionHeading>Get in touch</SectionHeading>
  <div class="md:max-w-lg">
    <p>
      Feel free to reach out if you have any questions, think we could work
      together, or just want to connect ✌️
    </p>
    <a
      class="mt-4 sm:mt-8 block text-red-400 hover:text-red-700
      transition-colors duration-200 ease-out group text-xl"
      href="mailto:madsbrodt3@gmail.com">
      madsbrodt3@gmail.com
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="transform transition-transform duration-200 ease-out
        group-hover:translate-x-4 group-hover:scale-125 -mt-1 inline w-5 h-5
        sm:w-5 sm:h-5">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
    <p class="mt-4 sm:mt-8 mb-2">
      Freelance status:
      <span
        class="text-sm bg-green-300 text-green-900 py-1 px-3 font-bold
        rounded-full">
        Available for work
      </span>
    </p>

    <SocialIcons />
  </div>
</Section>
