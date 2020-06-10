<script>
  import axios from "axios";
  import SubHeading from "./ui/SubHeading.svelte";

  let states = {
    IDLE: "idle",
    LOADING: "loading",
    SUCCESS: "success",
    ERROR: "error"
  };
  let state = "idle";

  let emailField;
  const handleSubmit = e => {
    state = states.LOADING;
    // The path to our serverless function
    const submitUrl = "/api/subscribe";
    axios
      .post(submitUrl, {
        email: emailField
      })
      .then(res => {
        state = states.SUCCESS;
      })
      .catch(err => {
        state = states.ERROR;
      });
  };
</script>

<style>
  /* TODO real disabled style */
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>

<div class="mt-8 xl:mt-16 max-w-2xl">
  <SubHeading>Front-end & tech career newsletter</SubHeading>

  <p class="font-body mt-2">
    Subscribe to my newsletter to receive content related to front-end
    development, navigating a tech career, and general life improvement tips. My
    goal is to deliver content that you look forward to receive -
    <span class="font-bold">no spam.</span>
    If you change your mind, you can unsubscribe at any time.
  </p>
</div>
{#if state === 'success'}
  <p class="mt-1 sm:mt-2 font-body">
    Thank you for subscribing! I've sent you a welcome email at
    <span class="font-bold">{emailField}</span>
    - please check your spam folder, and let me know if you haven't received it
    ✌️
  </p>
{:else}
  <form class="mt-8 flex flex-col">
    <label class="text-sm block text-gray-500" for="email">Email</label>
    <div class="flex mt-1 max-w-sm xl:max-w-lg">
      <input
        class="bg-white rounded shadow-xs px-2 py-2 xl:py-4 w-full"
        bind:value={emailField}
        type="email"
        autocapitalize="off"
        autocorrect="off"
        name="email"
        id="email"
        size="25" />
      <button
        class="bg-red-400 w-32 py-2 px-2 xl:px-4 text-center text-white
        font-bold rounded-r"
        on:click|preventDefault={handleSubmit}
        type="submit"
        disabled={state === 'loading'}>
        Submit
      </button>
    </div>

  </form>
{/if}
{#if state === 'error'}
  <p class="mt-1 sm:mt-2 font-body">
    Something went wrong - maybe you already signed up with this email? If not,
    please try again ✌️
  </p>
{/if}
