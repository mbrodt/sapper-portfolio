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

<Intro />
<Projects />
<Skills />
<Writing {posts} />
<Contact />
