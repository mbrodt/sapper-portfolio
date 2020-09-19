<script>
import {onMount} from "svelte"
import Post from "./Post.svelte"
import Section from "./ui/Section.svelte";
import SectionHeading from "./ui/SectionHeading.svelte";

  export let currentPost
  let relatedPosts = []
  onMount(async () => {
    fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        const related = posts.filter(post => {
          return post.tags.includes(currentPost.tags[0]) && (post.slug !== currentPost.slug)
        })
        console.log('related:', related)
        relatedPosts = related
    });
  })


</script>

<style>
  /* your styles go here */
</style>
<Section>

  <SectionHeading>Related Posts</SectionHeading>
  <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
    {#each relatedPosts as post, index}
      <Post {post} {index} />
    {/each}
  </ul>
</Section>