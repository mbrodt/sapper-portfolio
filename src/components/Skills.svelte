<script>
  import SectionHeading from "./ui/SectionHeading.svelte";
  import Section from "./ui/Section.svelte";

  let focused = 0;

  let skills = [
    {
      name: "HTML5",
      src: "html.svg"
    },
    {
      name: "CSS3",
      src: "css.svg"
    },
    {
      name: "JavaScript",
      src: "js.svg"
    },
    {
      name: "Vue",
      src: "vue.svg"
    },
    {
      name: "React",
      src: "react.svg"
    },
    {
      name: "Gatsby",
      src: "gatsby.png"
    },
    {
      name: "Shopify",
      src: "shopify.svg"
    },
    {
      name: "Svelte",
      src: "svelte.svg"
    },
    {
      name: "Tailwind",
      src: "tailwind.svg"
    },
    {
      name: "Git",
      src: "git.svg"
    }
  ];

  setInterval(() => {
    if (focused === skills.length - 1) focused = -1;
    focused += 1;
  }, 2500);
</script>

<style>
  /* your styles go here */
  .full-width {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  }
</style>

<Section>
  <SectionHeading>Skills</SectionHeading>
  <div class="full-width bg-gray-900">
    <div
      class="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8 lg:grid-cols-5
      items-center py-12 lg:max-w-7xl lg:mx-auto"
      style="justify-items: center">
      {#each skills as skill, idx}
        <div class="w-20 h-20 my-4 relative group">

          <div
            class="absolute left-0 right-0 text-center bg-red-400 rounded
            transition-all duration-700 opacity-0 px-2 group-hover:opacity-100"
            class:opacity-100={idx === focused}
            style="top: -50px; transition-timing-function: ease">
            <p class="text-white text-sm">{skill.name}</p>
            <div
              class="arrow-down absolute left-0 right-0 mx-auto"
              style="margin-top: -1px" />
          </div>

          <img
            style="transition-timing-function: ease"
            class="opacity-25 transform transition-all duration-500
            hover:opacity-100 hover:scale-125"
            class:scale-125={idx === focused}
            class:opacity-100={idx === focused}
            src={'skills/' + skill.src}
            alt={skill.name} />
        </div>
      {/each}
    </div>
  </div>
</Section>
