<script>
  import SubHeading from "./ui/SubHeading.svelte";
  import Newsletter from "./Newsletter.svelte";

  export let title;
</script>

<style>
  /* your styles go here */
</style>

<div data-aos="fade-up" data-aos-delay="500">

  <div class="mt-8 xl:mt-16 max-w-3xl">
    <SubHeading>{title}</SubHeading>

    <p class="font-body text-lg max-w-2xl mt-2">
      Subscribe below to receive content related to front-end development and
      navigating a tech career.
      <span class="font-bold">No spam. Unsubscribe any time.</span>
    </p>
    <div class="mt-4 lg:mt-6">
      <script
        async
        data-uid="87fc2b1a99"
        src="https://madsbrodt.ck.page/87fc2b1a99/index.js">

      </script>
    </div>
  </div>
</div>
