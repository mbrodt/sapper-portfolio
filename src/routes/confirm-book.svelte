<script>
  import confetti from "canvas-confetti";
  import { onMount } from "svelte";

  onMount(() => {
    setTimeout(() => {
      confetti({
        particleCount: 300,
        spread: 140,
        origin: { y: 0.6 },
      });
    }, 500);
  });
</script>

<h1 class="text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
  Thank you! Now check your email.
</h1>
<p class="max-w-4xl mt-4 text-lg lg:text-xl">
  The sample chapter is on it's way to you. Check your email, look for the
  download link -
  <strong>
    and make sure to check the Spam folder or "Promotions" tab if you can't see
    it.
  </strong>
  If the email is in the Promotions tab, you can drag it to the Primary tab in
  Gmail if you'd like to receive more awesome free content from me ✌
  <br />
  <br />
  Thanks again!
  <br />
  <br />
  <a class="text-indigo-600 underline font-bold" href="https://gmail.com">
    Open Gmail
  </a>
  <span class="text-indigo-600 font-bold mx-2">|</span>
  <a class="text-indigo-600 underline font-bold" href="http://outlook.com/">
    Open Outlook
  </a>
</p>
