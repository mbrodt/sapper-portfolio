<script context="module">
  export function preload() {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  import Projects from "../components/Projects.svelte";
  import Intro from "../components/Intro.svelte";
  import Skills from "../components/Skills.svelte";
  import Writing from "../components/Writing.svelte";
  import Contact from "../components/Contact.svelte";
  import SectionHeading from "../components/ui/SectionHeading.svelte";

  export let posts;
</script>

<svelte:head>
  <title>Mads Brodt</title>
</svelte:head>
<!-- 
<h1>My name is cool</h1>
<h1>My name is cool</h1>
<p>&lt;<span class="blinking-line">|</span><span class="">/</span>&gt;</p> -->
<div
  class="max-w-7xl w-full mx-auto px-4 sm:px-12 pt-32 lg:py-48 text-gray-800">
  <Intro />
  <Projects />
  <Skills />
  <Writing {posts} />
  <Contact />
</div>
