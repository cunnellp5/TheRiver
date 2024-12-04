<script lang="ts">
  import type { ActionData, PageData } from "./$types";
  import { page } from "$app/stores";
  import PostsForm from "../../components/posts-form.svelte";
  import "quill/dist/quill.snow.css";

  interface Props {
    form: ActionData;
    data: PageData;
  }

  const { form, data }: Props = $props();

  const post = data.posts.find(p => p.slug === $page.params.slug);

  const title: string = post?.title || "";
  const content: string = post?.content || "";
  const description: string = post?.description || "";
  const tagInput: string[] = post?.tags || [];
  const published: boolean = post?.published || false;
</script>

<main>
  <section>
    <h2 class="firstHeader">Edit mode</h2>

    <blockquote>
      <ul>
        <li>- Title becomes the 'slug' which is used in the url.</li>
        <li>- Content images | videos must be URLs.</li>
        <li>- You can save a post as unpublished and finish it later</li>
        <li>- Tags must be unique within each post.</li>
      </ul>
    </blockquote>

    {#if form?.error}<p class="formMessage">{form?.message}</p>{/if}

    <PostsForm
      {title}
      {content}
      {description}
      {tagInput}
      {published} />
  </section>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    margin-inline-start: var(--size-7);
  }
  blockquote {
    margin-block: var(--size-7);
    color: var(--stone-7);
    font-size: var(--size-8);
  }
  .firstHeader {
    margin-block: var(--size-7);
  }
  .formMessage {
    margin-block-end: var(--size-4);
    border-radius: var(--size-1);
    background: var(--pink-6);
    padding: var(--size-3);
    font-size: var(--font-size-5);
  }
</style>
