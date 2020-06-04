<script>
  import SectionHeading from "./ui/SectionHeading.svelte";
  import Section from "./ui/Section.svelte";
	import Project from "./Project.svelte";

  import VanillaTilt from "vanilla-tilt";
	import { onMount } from "svelte";

	  onMount(() => {
    VanillaTilt.init(document.querySelectorAll(".project"), {
      perspective: 1500,
      max: 10,
    });
  });

  let projects = [
    {
      title: "Illuminate the world",
      src: "dfh.svg",
      tags: ["React", "Gatsby", "Tailwind", "React-Spring"],
      link: "https://refugeeworld.org",
      description:
        "A campaign enabling users to light a candle to help refugees around the world. Focused on smooth animations and creating a compelling user experience.",
    },
    {
      title: "Technical portfolios",
      src: "techportfolios.svg",
      tags: ["React", "Next", "Tailwind", "Hasura"],
      link: "https://portfolios.tech",
      description:
        "A website where people can share their favorite technical portfolios. Allows filtering by different categories like development, branding and UX.",
    },
    {
      title: "Andersen-Andersen Webshop",
      src: "andersen.svg",
      tags: ["Shopify", "Liquid", "JavaScript", "Tailwind"],
      link: "https://dev-andersen-andersen.myshopify.com",
      description:
        "A webshop with focus on storytelling and the high quality products created by Andersen-Andersen, a Danish work-wear clothing manufacturer.",
    },
    {
      title: "Danfoss IXA",
      src: "danfoss.png",
      tags: ["React", "Gatsby", "Tailwind", "WordPress"],
      link: "https://danfoss-ixa.com",
      description:
        "The new landing page to showcase Danfoss IXA's products and markets. Focused on a clean design, highlighting the company's new identity.",
    },
    {
      title: "Tandlægehuset i Havdrup",
      src: "tandlaegehuset.png",
      tags: ["React", "Gatsby", "Tailwind", "Contentful"],
      link: "https://tandlaegehuset-havdrup.dk",
      description:
        "Website for a dental practice, allowing the users to quickly get an idea of the opening times and the working staff.",
    },
    {
      title: "1change",
      src: "1change.png",
      tags: ["React", "Gatsby", "SCSS", "Contentful"],
      link: "https://1change.io",
      description:
        "The 1change Resilience webapp serves as a way for customers to improve their health through different journeys and activities.",
    },
	];
</script>

<Section>
  <SectionHeading>Recent work</SectionHeading>
  <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 sm:gap-8">
    {#each projects as project, index}
			<Project {project} {index} />
    {/each}
  </ul>
</Section>
