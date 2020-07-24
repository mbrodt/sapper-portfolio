<script>
  export let author, quote, imageUrl;
</script>

<div class="relative text-center my-16 lg:-mx-4 px-4">
  <figure class="font-display">
    <blockquote class="text-black relative text-2xl mx-auto italic mb-4">
      “{quote}”
    </blockquote>
    <figcaption class="flex items-center justify-center">
      <img class="rounded-full block h-8 w-8 mr-4" src={imageUrl} alt="" />
      <a
        href="https://www.sarasoueidan.com/blog/refactoring-ui/"
        class="no-underline text-indigo-dark hover:text-indigo uppercase
        tracking-wide font-bold text-base">
        {author}
      </a>
    </figcaption>
  </figure>
</div>
