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
      class="mt-4 sm:mt-8 block underline text-red-400 text-xl"
      href="mailto:madsbrodt3@gmail.com">
      madsbrodt3@gmail.com
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
