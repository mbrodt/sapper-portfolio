<script>
  import Projects from "../components/Projects.svelte";
  import Intro from "../components/Intro.svelte";
  import Skills from "../components/Skills.svelte";
  import Writing from "../components/Writing.svelte";
  import Contact from "../components/Contact.svelte";
</script>

<svelte:head>
  <title>Cool title!</title>
</svelte:head>
<!-- 
<h1>My name is cool</h1>
<h1>My name is cool</h1>
<p>&lt;<span class="blinking-line">|</span><span class="">/</span>&gt;</p> -->
<div
  class="max-w-7xl w-full mx-auto px-4 sm:px-12 pt-32 lg:py-48 text-gray-700">
  <Intro />
  <Projects />
  <Skills />
  <!-- <Writing /> -->
  <Contact />
</div>
