<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import Newsletter from "../../components/Newsletter.svelte";
  import Author from "../../components/Author.svelte";
  import SubHeading from "../../components/ui/SubHeading.svelte";
  export let post;
</script>

<svelte:head>
  <title>{post.title}</title>
  <meta name="description" content={post.description} />
  <meta name="twitter:title" content={post.title} />
  <meta name="twitter:description" content={post.description} />
</svelte:head>
<div in:fly={{ x: -200, duration: 1000, easing: quintOut }}>
  <div class="mb-12 xl:mb-16 max-w-2xl mx-auto">
    <a href="/">
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-6 h-6 text-gray-500">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7 16l-4-4m0 0l4-4m-4 4h18" />
      </svg>

    </a>
    <h1 class="text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
      {post.title}
    </h1>
    <div class="flex mt-1 sm:mt-2 justify-between items-center">
      <div class="flex items-center text-gray-600">
        <img class="w-6 h-6 rounded-full mr-2" src="/profile.jpg" alt="" />
        <p class="mt-1 text-sm">
          <span class="mt-px leading-none">Mads Brodt</span>
          <span class="leading-none">&bull {post.printDate}</span>
        </p>
      </div>
      <span class="text-gray-600 leading-none text-sm">
        {post.printReadingTime}
      </span>
    </div>
  </div>

  <div class="rich-text w-full overflow-hidden max-w-2xl mx-auto font-body">
    {@html post.html}
    <div class="h-px bg-red-400 opacity-75 my-12 lg:my-16" />

    <Author />
    <!-- {#if post.cta === 'book'}
      <p>
        Thanks for reading! If you enjoyed this article, you're gonna
        <span class="font-bold">love</span>
        the book I'm working on. It will have loads of tips & tricks for landing
        your first development job, improving your technical skills, and
        becoming a better developer. Check it out at
        <a
          href="https://madsbrodt.com/mastering-coding-mindset"
          target="_blank"
          rel="noopener noreferrer">
          Mastering the Coding Mindset
        </a>
        and get a
        <span class="font-bold">free</span>
        sample chapter, or sign up below 👇
      </p>
    {:else} -->
    <!-- <p>
      Thank you for reading! To keep up with all of my writing, follow me on
      <a
        href="https://twitter.com/madsbrodt"
        target="_blank"
        rel="noopener noreferrer">
        Twitter
      </a>
      or sign up with your email below 👇
    </p> -->
    <!-- {/if} -->
  </div>
  <div class="max-w-2xl mx-auto mt-8 sm:mt-12 lg:mt-16">
    <SubHeading>Never miss an update</SubHeading>

    <p class="font-body text-lg mt-2">
      Subscribe to receive my best content related to front-end development and
      navigating a tech career.
      <span class="font-bold">No spam. Unsubscribe any time.</span>
    </p>
    <Newsletter />
  </div>
</div>
