<script>
  import SectionHeading from "./ui/SectionHeading.svelte";
  import Section from "./ui/Section.svelte";
  import SubHeading from "./ui/SubHeading.svelte";
  import NewsletterSection from "./NewsletterSection.svelte";
  import NewsletterForm from "./NewsletterForm.svelte";
  import Post from "./Post.svelte";
  export let posts;
</script>

<Section id="writing">
  <SectionHeading>Writing</SectionHeading>
  <SubHeading>Blog</SubHeading>
  <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
    {#each posts as post, index}
      <Post {post} {index} />
    {/each}
  </ul>
  <a
    class="mt-4 sm:mt-8 block text-red-400 hover:text-red-700 transition-colors
    duration-200 ease-out group text-xl text-right"
    data-aos="fade-up"
    data-aos-delay="300"
    href="/blog">
    Check out more of my writing
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      class="transform transition-transform duration-200 ease-out
      group-hover:translate-x-4 group-hover:scale-125 ml-2 inline w-5 h-5 sm:w-5
      sm:h-5">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </a>

  <NewsletterSection title="Front-end & tech career newsletter" />
</Section>
