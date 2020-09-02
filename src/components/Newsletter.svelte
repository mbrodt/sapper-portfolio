<script>
  import axios from "axios";
  import SubHeading from "./ui/SubHeading.svelte";
  import confetti from "canvas-confetti";

  let states = {
    IDLE: "idle",
    LOADING: "loading",
    SUCCESS: "success",
    ERROR: "error",
  };
  let state = "idle";

  let emailField;
  const handleSubmit = (e) => {
    state = states.LOADING;
    // The path to our serverless function
    const submitUrl = "/api/subscribe";
    axios
      .post(submitUrl, {
        email: emailField,
        // The ID for the "Newsletter" tag
        tagId: "318313",
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
  /* TODO real disabled style */
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>

{#if state === 'success'}
  <p class="mt-1 sm:mt-2 font-body">
    Thank you for subscribing! Expect some great emails coming your way to
    <span class="font-bold">{emailField}</span>
    ✌️
  </p>
{:else}
  <form class="mt-8 flex flex-col">
    <label class="text-sm block text-gray-500" for="email">Email</label>
    <div class="flex mt-1 max-w-sm xl:max-w-lg">
      <input
        class="bg-white rounded px-2 py-4 w-full shadow-lg"
        bind:value={emailField}
        type="email"
        autocapitalize="off"
        autocorrect="off"
        name="email"
        id="email"
        size="25" />
      <button
        class="bg-red-400 w-32 py-2 px-2 xl:px-4 text-center text-white
        font-bold rounded-r hover:bg-red-500 transition-colors duration-300
        ease-in-out shadow-lg"
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
