<script lang="ts">
  import type { ActionData } from "./$types";

  import { enhance } from "$app/forms";
  import Card from "$lib/components/ui/Card.svelte";
  import { addToast } from "$lib/stores/toast";
  import { run } from "svelte/legacy";

  type ArticleForm = {
    dbError?: undefined;
    success?: undefined;
    fail: boolean;
    message: string;
    error: {
      articleTitle: [string, ...string[]] | undefined;
      author: [string, ...string[]] | undefined;
      description: [string, ...string[]] | undefined;
      img: [string, ...string[]] | undefined;
      link: [string, ...string[]] | undefined;
    };
  };

  interface Props {
    form: ActionData & ArticleForm; // This isn't ideal and i dont like how redundant this is, but TS isnt recognizing the inferred nested ActionData types below, and If i just go with the explicitly typed form object, it causes issues with the form object in the script tag
  }

  let { form = $bindable() }: Props = $props();

  function showToast(msg: string, type: string) {
    addToast({ message: msg, type, dismissible: true, timeout: 5000 });
  }

  let article;
  run(() => {
    article = {
      articleTitle: "",
      author: "",
      description: "",
      img: "",
      link: "",
    };
  });

  run(() => {
    if (form?.success) {
      // Reset article fields
      article = {
        articleTitle: "",
        author: "",
        description: "",
        img: "",
        link: "",
      };

      // Show success toast
      showToast(form.message, "success");

      // Reset the form object (if i dont this was causing issues)
      form = { ...form, success: undefined, message: "" };
    }
  });

  run(() => {
    if (form?.dbError) {
      showToast(form.message, "error");
    }
  });
</script>

<h2>Add article:</h2>

<section>
  <form method="POST" use:enhance>
    <!-- TODO refactor this to have an img upload flow for cloudinary, for now lets assume we have a url -->
    <div class="input-group">
      <label for="articleTitle">Title:</label>
      <input
        class:error={form?.fail && form?.error?.articleTitle}
        id="articleTitle"
        name="articleTitle"
        type="text"
        bind:value={article.articleTitle} />
      <p class="error-text">
        {#if form?.error?.articleTitle}
          {form?.error?.articleTitle[0]}
        {/if}
      </p>
    </div>

    <div class="input-group">
      <label for="img"> Article Image URL: </label>
      <input
        class:error={form?.fail && form?.error?.img}
        id="img"
        name="img"
        type="text"
        bind:value={article.img} />
      <p class="error-text">
        {#if form?.error?.img}
          {form?.error?.img[0]}
        {/if}
      </p>
    </div>

    <div class="input-group">
      <label for="description">Content Message:</label>
      <textarea
        class:error={form?.fail && form?.error?.description}
        id="description"
        name="description"
        bind:value={article.description}></textarea>
      <p class="error-text">
        {#if form?.error?.description}
          {form?.error?.description[0]}
        {/if}
      </p>
    </div>

    <div class="input-group">
      <label for="author">Content Author:</label>
      <input
        class:error={form?.fail && form?.error?.author}
        id="author"
        name="author"
        type="text"
        bind:value={article.author} />
      <p class="error-text">
        {#if form?.error?.author}
          {form?.error?.author[0]}
        {/if}
      </p>
    </div>

    <div class="input-group">
      <label for="link">Link URL:</label>
      <input
        class:error={form?.fail && form?.error?.link}
        id="link"
        name="link"
        type="text"
        bind:value={article.link} />
      <p class="error-text">
        {#if form?.error?.link}
          {form?.error?.link[0]}
        {/if}
      </p>
    </div>

    <button class="primary" type="submit">Submit Article</button>
  </form>

  <div>
    <h4>Example article:</h4>
    <Card
      author="Author name"
      articleImage="https://place-hold.it/300x300"
      articleTitle="Title goes here"
      description="Description goes here"
      link="actual link url">
    </Card>
  </div>
</section>

<style>
	/* ELEMENTS */
	h2 {
		padding-block-end: var(--size-7);
	}
	form {
		min-width: 50%;
	}
	label {
		color: var(--link);
		font-weight: bold;
	}
	input,
	textarea {
		border: 1px solid var(--border);
		border-radius: var(--size-1);
		padding: var(--size-2);
	}
	section {
		display: flex;
		justify-content: space-evenly;
		width: 100%;
	}
	/* CLASSES */
	.input-group {
		display: flex;
		flex-direction: column;
		gap: var(--size-2);
		margin-block-end: var(--size-2);
	}
	.error-text {
		display: block;
		min-height: var(--size-4);
		color: var(--error-text);
		font-size: var(--font-size-0);
	}
	.error {
		border: 1px solid var(--error-text);
	}
</style>
