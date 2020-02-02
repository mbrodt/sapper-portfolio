<script>
  import SectionHeading from "./ui/SectionHeading.svelte";

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
      src: "react.png"
    },
    {
      name: "Gatsby",
      src: "gatsby.png"
    },
    {
      name: "TailwindCSS",
      src: "tailwind.svg"
    },
    //  {
    // 	name: "GitHub",
    // 	src: "github.svg"
    // }
    {
      name: "Git",
      src: "git.svg"
    },
    {
      name: "Webpack",
      src: "webpack.svg"
    },
    {
      name: "Terminal",
      src: "devicon.svg"
    }
  ];

  // function getRandomNumber() {
  // 	const randomNum = Math.floor(Math.random() * skills.length);
  // 	return randomNum
  // }

  setInterval(() => {
    if (focused === skills.length - 1) focused = -1;
    focused += 1;
  }, 3000);
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

<SectionHeading>Skills</SectionHeading>
<div class="full-width bg-gray-900">
  <div
    class="grid grid-cols-2 gap-4 items-center py-12"
    style="justify-items: center">
    {#each skills as skill, idx}
      <div class="w-16 h-16 my-4">
        <!-- <div class="relative bg-gray-700">{skill.name}</div> -->
        <!-- <div class="arrow-down absolute top-0 left-0 right-0 mx-auto" /> -->

        <img
          style="transition-timing-function: ease"
          class="opacity-25 transform transition-all duration-500
          hover:opacity-100 hover:scale-150"
          class:scale-150={idx === focused}
          class:opacity-100={idx === focused}
          src={'skills/' + skill.src}
          alt={skill.name} />
      </div>
    {/each}
  </div>
</div>
