<script>
  // your script goes here
  let tempData = {
    settings: {
      after_subscribe: {
        action: "redirect",
        success_message: "Test Msg",
        redirect_url: "madsbrodt.com/confirm-book",
      },
      powered_by: {
        show: false,
        url:
          "https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form",
      },
      recaptcha: { enabled: false },
      return_visitor: { action: "show", custom_content: "" },
      slide_in: {
        display_in: "bottom_right",
        trigger: "timer",
        scroll_percentage: null,
        timer: 5,
        devices: "all",
        show_once_every: 15,
      },
      sticky_bar: {
        display_in: "top",
        trigger: "timer",
        scroll_percentage: null,
        timer: 5,
        devices: "all",
        show_once_every: 15,
      },
    },
    version: "5",
  };

  const data = JSON.stringify(tempData);
</script>

<style>
  /* your styles go here */
</style>

<div>
  <script src="https://f.convertkit.com/ckjs/ck.5.js">
  </script>
  <form
    action="https://app.convertkit.com/forms/1641582/subscriptions"
    class="mt-5 sm:mt-8 sm:flex max-w-xl xl:max-w-2xl"
    method="post"
    data-sv-form="1641582"
    data-uid="5b48bcee5c"
    data-format="inline"
    data-version="5"
    data-options={data}
    min-width="400 500 600 700 800">
    <input
      class="shadow-lg block w-full rounded-lg focus:border-indigo border
        border-transparent sm:rounded-r-none mb-4 sm:mb-0 text-black sm:flex-1
        px-6 py-4 focus:outline-none"
      name="email_address"
      aria-label="Your email address"
      placeholder="Your email address"
      required=""
      type="email"
      style="color: rgb(0, 0, 0); border-color: rgb(227, 227, 227);
      border-radius: 4px; font-weight: 400;" />

    <button
      data-element="submit"
      class="formkit-submit w-full uppercase font-bold flex items-center
        justify-center shadow-lg text-sm px-4 py-4 border border-transparent
        leading-6 rounded-md sm:rounded-l-none text-white bg-indigo-600
        hover:bg-indigo-500 focus:outline-none focus:border-indigo-700
        focus:shadow-outline-indigo transition duration-150 ease-in-out
        md:text-sm sm:w-auto sm:text-xs xl:text-base">
      Get your chapter
    </button>
  </form>
</div>
