<script>
  import SubHeading from "./ui/SubHeading.svelte";
  import Newsletter from "./Newsletter.svelte";

  export let title;
</script>

<style>
  /* your styles go here */
</style>

<div data-aos="fade-up" data-aos-delay="500">

  <div class="mt-8 xl:mt-16 max-w-2xl">
    <SubHeading>{title}</SubHeading>

    <p class="font-body text-lg mt-2">
      Subscribe below to receive content related to front-end development and
      navigating a tech career.
      <span class="font-bold">No spam. Unsubscribe any time.</span>
    </p>
    <Newsletter />
  </div>
</div>
