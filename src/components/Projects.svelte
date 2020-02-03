<script>
  import SectionHeading from "./ui/SectionHeading.svelte";
  import Section from "./ui/Section.svelte";

  import { spring } from "svelte/motion";
  import { onMount } from "svelte";
  import VanillaTilt from "vanilla-tilt";
  onMount(() => {
    VanillaTilt.init(document.querySelectorAll(".project"), {
      perspective: 1500,
      max: 10
    });
  });
  // your script goes here
  let projects = [
    {
      title: "Illuminate the world",
      src: "dfh.svg",
      tags: ["React", "Gatsby", "Tailwind", "React-Spring"],
      link: "https://refugeeworld.org",
      description:
        "A campaign enabling users to light a candle to help refugees around the world. Focused on smooth animations and creating a compelling user experience."
    },
    {
      title: "IT-Fixer",
      src: "itfixer.svg",
      tags: ["React", "Gatsby", "Tailwind"],
      link: "https://it-fixer.dk",
      description:
        "Website to market my IT support business, listing my services and providing users a way to get in touch."
    },
    {
      title: "Andersen-Andersen Webshop",
      src: "andersen.svg",
      tags: ["Shopify", "Liquid", "JavaScript", "Tailwind"],
      link: "https://dev-andersen-andersen.myshopify.com",
      description:
        "A webshop with focus on storytelling and the high quality products created by Andersen-Andersen, a Danish work-wear clothing manufacturer."
    },
    {
      title: "Danfoss IXA",
      src: "danfoss.svg",
      tags: ["React", "Gatsby", "Tailwind", "WordPress"],
      link: "https://danfoss-ixa.com",
      description:
        "The new landing page to showcase Danfoss IXA's products and markets. Focused on a clean design, highlighting the company's new identity."
    },
    {
      title: "Tandlægehuset i Havdrup",
      src: "tandlaegehuset.png",
      tags: ["React", "Gatsby", "Tailwind", "Contentful"],
      link: "https://tandlaegehuset-havdrup.dk",
      description:
        "Website for a dental practice, allowing the users to quickly get an idea of the opening times and the working staff."
    },
    {
      title: "1change",
      src: "1change.png",
      tags: ["React", "Gatsby", "Contentful"],
      link: "https://1change.io",
      description:
        "The 1change Resilience webapp serves as a way for customers to improve their health through different journeys and activities."
    }
  ];
</script>

<Section>
  <SectionHeading>Recent work</SectionHeading>
  <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 sm:gap-8">
    {#each projects as project}
      <li class="w-full">
        <a href={project.link} target="_blank">
          <img
            class="project w-full"
            src={'projects/' + project.src}
            alt="Project showcase" />
        </a>
        <h3 class="tracking-wider uppercase text-gray-900 mt-4">
          {project.title}
        </h3>

        <div class="-mx-1 mt-1">
          {#each project.tags as tag}
            <span class="bg-red-400 text-sm px-2 py-1 mx-1 text-white">
              {tag}
            </span>
          {/each}
        </div>
        <p class="mt-4 text-gray-700">{project.description}</p>
      </li>
    {/each}
  </ul>
</Section>
