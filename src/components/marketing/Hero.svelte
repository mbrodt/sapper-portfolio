<script>
  import axios from "axios";

  let states = {
    IDLE: "idle",
    LOADING: "loading",
    SUCCESS: "success",
    ERROR: "error",
  };
  let state = "idle";
  let emailField;

  function scrollTo({ target }) {
    document.querySelector(target.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  }

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
      })
      .catch((err) => {
        state = states.ERROR;
      });
  };
</script>

<div class="max-w-8xl mx-auto">
  <div
    class="relative flex flex-wrap flex-col md:flex-row md:items-center mt-8
    lg:mt-16 px-6 lg:px-12 xxl:px-0">
    <div class="md:w-3/5">
      <div class="mb-12 md:mt-12">
        <h1
          class="font-bold text-center md:text-left text-3xl lg:text-4xl
          xl:text-5xl xxl:text-6xl font-display leading-none mb-6 xl:mb-8
          text-gray-900">
          <span class="sm:block">Everything you need to</span>
          <span class="sm:block text-indigo-600">
            become a better developer
          </span>
        </h1>
        <p
          class="text-xl text-center md:text-left md:text-lg lg:text-xl
          xl:text-2xl text-gray-700 leading-normal">
          Learn how to become a better developer, increase your productivity and
          land your dream development job
        </p>
      </div>
      <div class="md:hidden max-w-sm mx-auto px-8 pt-2 pb-4">
        <img class="shadow-2xl" src="/cover.png" alt="" />
      </div>
      <p class="mt-4 text-lg md:text-base lg:text-lg text-gray-700">
        Sign up below to get a
        <span class="font-bold">free</span>
        chapter preview on INSERT LATER
      </p>
      <form
        on:submit|preventDefault={handleSubmit}
        class="mt-5 sm:mt-8 sm:flex max-w-xl xl:max-w-2xl">
        <input
          class="shadow-lg block w-full rounded-lg focus:border-indigo border
          border-transparent sm:rounded-r-none mb-4 sm:mb-0 text-black sm:flex-1
          px-6 py-4 focus:outline-none"
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
          md:text-sm sm:w-auto sm:text-xs xl:text-base ">
          Get your chapter
        </button>

      </form>
      {#if state === 'success'}
        <p class="mt-4 sm:mt-8">
          Thank you! You're now signed up to receive updates about the book, and
          your free sample is on its way to
          <span class="text-indigo-500 font-bold">{emailField}</span>
          - please check your spam folder, and let me know if you haven't
          received it ✌️
        </p>
      {/if}
      <div class="text-lg md:text-base mt-6 text-center md:text-left">
        <p class="text-gray-700">
          <span>Already convinced?</span>
          <a
            class="link-underline font-bold text-blue-600"
            href="#pricing"
            on:click|preventDefault={scrollTo}>
            Buy now
          </a>
        </p>
      </div>
    </div>
    <div class="hidden md:block md:w-2/5 px-8 xl:px-16 pt-2">
      <img class="shadow-2xl" src="/cover.png" alt="" />
    </div>
  </div>
</div>
