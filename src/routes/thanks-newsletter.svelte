<script>
  import confetti from "canvas-confetti";
  import { onMount } from "svelte";

  onMount(() => {
    confetti({
      particleCount: 300,
      spread: 140,
      origin: { y: 0.6 },
    });
  });
</script>

<h1 class="text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
  Thank you for signing up!
</h1>
<p class="max-w-4xl mt-4 text-lg lg:text-xl">
  Your email has been confirmed, so expect some awesome emails headed your way
  shortly ✌
  <br />
  <br />
  In the meantime, you might be interested in checking out my
  <a class="link-underline text-blue-600 font-bold" href="/blog">blog,</a>
  my book on
  <a
    class="link-underline text-blue-600 font-bold"
    href="/mastering-coding-mindset">
    becoming a better developer,
  </a>
  or following me on
  <a
    class="link-underline text-blue-600 font-bold"
    href="https://twitter.com/madsbrodt">
    Twitter.
  </a>

</p>
