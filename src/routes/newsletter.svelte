<script>
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";
  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<div class="max-w-3xl mx-auto">
  {#if visible}
    <div class="text-center" in:fly={{ y: 70, duration: 600 }}>
      <h1
        class="text-2xl sm:text-3xl md:text-4xl font-bold text-center
          text-gray-900 leading-9 tracking-tight sm:leading-10"
      >
        Want to improve your coding career?
      </h1>
      <p class="text-lg md:text-xl max-w-lg md:max-w-xl mt-2 mx-auto">
        Join over 2600+ developers and get weekly resources, updates and
        development advice straight to your inbox. No spam - just high quality
        content to aid you on your coding journey.
      </p>
    </div>
    <div
      class="max-w-3xl mx-auto mt-8 lg:mt-12 px-4 pt-6 pb-2 sm:px-8 md:pt-12
        md:pb-10 border border-gray-400"
      in:fly={{ y: 70, duration: 600, delay: 400 }}
    >
      <script
        async
        data-uid="f86832cf8a"
        src="https://madsbrodt.ck.page/f86832cf8a/index.js">
      </script>
    </div>
    <div
      class="mt-12 lg:mt-24 prose sm:prose-lg lg:prose-xl"
      in:fly={{ y: 70, duration: 600, delay: 800 }}
    >
      <h2 class="">Sign up for the Top 3 in Tech newsletter</h2>
      <div>
        <p>
          Every week I pick out my Top 3 and send it directly to your inbox. No
          spam, and nothing annoying or unexpected. Just valuable lessons to
          apply for yourself.
        </p>
        <p>As a subscriber, you'll receive:</p>
        <ul>
          <li>
            A weekly email with amazing resources, updates on various
            tools/frameworks, and hand-crafted advice directly from me
          </li>
          <li>
            Occasional discounts and offers on my book or other courses down the
            road
          </li>
          <li>
            Occasional updates about me, when I get a new job and the lessons
            from that
          </li>
        </ul>
        <p>
          I'm sure you're already subscribed to plenty of newsletters, and
          you're worried that this will be another one you sign up for and never
          read. That won't be the case. My goal is to make you look forward to
          each and every issue, because it'll contain so much value and
          actionable advice that you'd be foolish not to read it. That's a high
          bar, but it's what I'm striving to hit whenever I send an email to
          you.
        </p>
        <p>Sign up with the form above, and I'll be in touch shortly ✌</p>
      </div>
    </div>
  {/if}
</div>
