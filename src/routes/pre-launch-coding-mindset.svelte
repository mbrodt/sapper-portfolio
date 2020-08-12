<script>
  import axios from "axios";
  import confetti from "canvas-confetti";

  let states = {
    IDLE: "idle",
    LOADING: "loading",
    SUCCESS: "success",
    ERROR: "error",
  };
  let state = "idle";
  let emailField;

  const handleSubmit = () => {
    state = states.LOADING;
    // The path to our serverless function
    const submitUrl = "/api/subscribe";
    axios
      .post(submitUrl, {
        email: emailField,
        // The ID for the "Coding Mastery" tag
        tagId: "317853",
      })
      .then((res) => {
        state = states.SUCCESS;
        confetti({
          particleCount: 200,
          spread: 70,
          origin: { y: 0.6 },
        });
      })
      .catch((err) => {
        state = states.ERROR;
      });
  };
</script>

<style>
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>

<svelte:head>
  <title>Mastering the Coding Mindset</title>
  <meta
    name="description"
    content="Tips & Tricks for becoming a better developer & having a successful
    career" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@madsbrodt" />
  <meta name="twitter:title" content="Mastering the Coding Mindset" />
  <meta
    name="twitter:description"
    content="Tips & Tricks for becoming a better developer & having a successful
    career" />
  <meta name="twitter:image" content="https://madsbrodt.com/book_meta.png" />
</svelte:head>

<div
  class="flex flex-col lg:flex-row lg:items-center max-w-8xl mx-auto px-6 pt-6">
  <div class="w-full lg:w-2/3">
    <div class="mx-auto max-w-screen-xl sm:mt-12 md:mt-16 lg:px-8 xl:mt-28">
      <div class="">
        <h1
          class="text-center lg:text-left text-4xl tracking-tight leading-10
          font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl
          xl:max-w-2xl">
          Everything you need to
          <br class="xl:hidden" />
          <span class="text-indigo-600">become a better developer</span>
        </h1>
        <div class="w-full my-8 px-12 lg:hidden">
          <img
            class="shadow-lg max-w-xs mx-auto w-full"
            src="/cover.png"
            alt="" />
        </div>

        <div
          class="text-base text-gray-700 mt-3 sm:mt-5 sm:text-lg sm:max-w-2xl
          sm:mx-auto md:mt-5 md:text-xl lg:mx-0 ">
          <p class="xl:my-4">
            Learn how to become a better developer and efficiently navigate your
            coding career. The book covers topics like:
          </p>

          <ul class="list-inside list-disc my-2 xl:my-4">
            <li class="flex items-center my-1">
              <img
                class="w-5 h-5 sm:w-6 sm:h-6 mr-2"
                src="/svg-bullet.svg"
                alt="checkmark icon" />
              <span>Doubling down on technical fundamentals</span>
            </li>
            <li class="flex items-center my-1">
              <img
                class="w-5 h-5 sm:w-6 sm:h-6 mr-2"
                src="/svg-bullet.svg"
                alt="checkmark icon" />
              <span>Landing a developer job</span>
            </li>
            <li class="flex items-center my-1">
              <img
                class="w-5 h-5 sm:w-6 sm:h-6 mr-2"
                src="/svg-bullet.svg"
                alt="checkmark icon" />
              <span>Increasing productivity</span>
            </li>
            <li class="flex items-center my-1">
              <img
                class="w-5 h-5 sm:w-6 sm:h-6 mr-2"
                src="/svg-bullet.svg"
                alt="checkmark icon" />
              <span>Learning how to learn</span>
            </li>
            <li class="flex items-center my-1">
              <img
                class="w-5 h-5 sm:w-6 sm:h-6 mr-2"
                src="/svg-bullet.svg"
                alt="checkmark icon" />
              <span>Dealing with self-doubt</span>
            </li>
            <li class="flex items-center my-1">
              <img
                class="w-5 h-5 sm:w-6 sm:h-6 mr-2"
                src="/svg-bullet.svg"
                alt="checkmark icon" />
              <span>Understanding the bigger picture</span>
            </li>
            <li class="flex items-center my-1">
              <img
                class="w-5 h-5 sm:w-6 sm:h-6 mr-2"
                src="/svg-bullet.svg"
                alt="checkmark icon" />
              <span>Improving soft skills</span>
            </li>
          </ul>
          Jam-packed with
          <span class="text-indigo-500 font-bold">examples</span>
          and
          <span class="text-indigo-500 font-bold">
            applicable tips & tricks,
          </span>
          relevant through your entire coding journey - beginner and senior
          alike
          <p class="mt-4">
            Sign up below to get a
            <span class="text-indigo-500 font-bold">free</span>
            sample chapter and a
            <span class="text-indigo-500 font-bold">big</span>
            launch discount!
          </p>
          <form
            on:submit|preventDefault={handleSubmit}
            class="mt-5 sm:mt-8 sm:flex max-w-xl xl:max-w-2xl">
            <input
              class="shadow-lg block w-full rounded-lg focus:border-indigo
              border border-transparent sm:rounded-r-none mb-4 sm:mb-0
              text-black sm:flex-1 px-6 py-4 focus:outline-none"
              type="email"
              bind:value={emailField}
              required
              placeholder="Enter your email" />
            <button
              disabled={state === 'loading'}
              type="submit"
              class="w-full uppercase font-bold flex items-center justify-center
              shadow-lg text-sm px-4 py-4 border border-transparent leading-6
              rounded-md sm:rounded-l-none text-white bg-indigo-600
              hover:bg-indigo-500 focus:outline-none focus:border-indigo-700
              focus:shadow-outline-indigo transition duration-150 ease-in-out
              md:text-sm sm:w-auto sm:text-xs xl:text-base">
              Get your sample chapter
            </button>

          </form>
          {#if state === 'success'}
            <p class="mt-4 sm:mt-8">
              Thank you! You're now signed up to receive updates about the book,
              and your free sample is on its way to
              <span class="text-indigo-500 font-bold">{emailField}</span>
              - please check your spam folder, and let me know if you haven't
              received it ✌️
            </p>
          {/if}

        </div>
      </div>
    </div>
  </div>
  <div class="hidden lg:block w-full lg:w-1/3 my-8 px-12 lg:px-0">
    <img class="shadow-lg mx-auto w-full" src="/cover.png" alt="" />
  </div>

</div>
<div class="mt-12 pb-12 xl:mt-16 xl:pb-16 px-6">
  <img class="rounded-full w-32 h-32 mx-auto" src="/profile.jpg" alt="" />
  <h2 class="text-center text-2xl font-bold text-gray-800 my-4">
    About the author
  </h2>
  <p class="text-gray-700 sm:text-lg sm:max-w-2xl sm:mx-auto">
    Hi there! My name is
    <a
      class="text-blue-500"
      target="_blank"
      href="https://twitter.com/madsbrodt">
      @madsbrodt
    </a>
    and I'm a front-end engineer from Copenhagen. I'm also a huge believer in
    habits, self-improvement and teaching. I've only been coding for a few
    years, but have learned many valuable lessons. This puts me in a unique
    position to teach these lessons, since I was in your shoes not long ago.
    This is the book I wish I had.
  </p>
  <p class="text-gray-700 sm:text-lg sm:max-w-2xl sm:mx-auto mt-2">
    If you have any questions, hit me up on
    <a
      class="text-blue-500"
      target="_blank"
      href="https://twitter.com/madsbrodt">
      Twitter
    </a>
    or
    <a class="text-blue-500" target="_blank" href="mailto:me@madsbrodt.com">
      send me an email ✌️
    </a>
  </p>
</div>
