<script>
  function scrollTo({ target }) {
    document.querySelector(target.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  }
</script>

<footer class="bg-gray-850 text-white py-8 lg:py-12">
  <div class="max-w-lg mx-auto text-center px-4">
    <p class="mb-4">
      Created by
      <a target="_blank" href="https://twitter.com/madsbrodt">@madsbrodt</a>
    </p>
    <p>
      You know you want it if you're reading the footer 👇
      <a
        class="block underline mt-2"
        href="#pricing"
        on:click|preventDefault={scrollTo}>
        Buy now
      </a>
    </p>
  </div>
</footer>
