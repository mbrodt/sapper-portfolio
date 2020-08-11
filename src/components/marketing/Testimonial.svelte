<script>
  export let author, quote, linkUrl, imageUrl, option;
</script>

{#if option === 'small'}
  <div class="relative text-center my-16 px-4 max-w-3xl mx-auto">
    <figure class="font-display">
      <blockquote
        class="relative prose prose-lg lg:prose-xl mx-auto italic mb-4">
        “{quote}”
      </blockquote>
      <figcaption class="flex items-center justify-center">
        <img class="rounded-full block h-8 w-8 mr-4" src={imageUrl} alt="" />
        <a
          target="_blank"
          href={linkUrl}
          class="no-underline text-indigo-600 hover:text-indigo uppercase
          tracking-wide font-bold text-base">
          {author}
        </a>
      </figcaption>
    </figure>
  </div>
{:else}
  <div class="overflow-x-hidden">
    <div class="relative max-w-5xl mx-auto px-8 py-12 sm:py-32">

      <div
        class="relative mx-auto rounded-full h-16 sm:h-24 w-16 sm:w-24 border-2">
        <div class="rounded-full border-2">
          <img class="rounded-full block" src={imageUrl} alt="" />
        </div>
      </div>
      <div class="relative text-center">
        <figure class="font-display">
          <blockquote
            class="relative text-xl sm:text-2xl lg:text-3xl mx-auto italic mb-4
            sm:px-12 pt-8 text-gray-700 prose ">
            <div class="absolute left-0 top-0 -mt-5">
              <svg
                class="h-8 w-8 sm:h-12 sm:w-12 fill-current text-indigo-500"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M30.216 9H35c-2.591 4.338-4.385 8.474-5.282
                  12.307h4.784L32.907 32H22.542l.697-4.842C24.435 19.289 27.226
                  13.237 30.216 9zM12.674 9h4.884c-2.69 4.338-4.485 8.474-5.382
                  12.307h4.784L15.365 32H5l.698-4.842C6.894 19.289 9.684 13.237
                  12.674 9z"
                  fill-rule="evenodd" />
              </svg>
            </div>
            {quote}
          </blockquote>
          <figcaption
            class="uppercase text-indigo-600 tracking-wide font-bold text-lg">
            <a
              target="_blank"
              href={linkUrl}
              class="text-indigo-600 hover:text-indigo no-underline">
              {author}
            </a>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
{/if}
