<script lang="ts">
  import { enhance } from "$app/forms";
  import { goto } from "$app/navigation";
  import Pencil from "lucide-svelte/icons/pencil";
  import Trash from "lucide-svelte/icons/trash";

  interface Props {
    slug: string;
    redirect?: boolean;
  }

  const { slug, redirect = false }: Props = $props();
</script>

<a href="/admin/posts/{slug}/edit" data-sveltekit-noscroll>
  <button class="update-button" type="button">
    <Pencil /> Edit
  </button>
</a>
<form
  method="POST"
  action="?/deletePost"
  use:enhance={({ cancel }) => {
    // eslint-disable-next-line no-alert
    if (confirm("Are you sure you want to delete this post?")) {
      if (redirect) {
        return async ({ update }) => update().then(() => goto("/admin/posts"));
      }
      return async ({ update }) => update();
    }
    return cancel();
  }}>
  <input type="hidden" name="slug" id="slug" value={slug} />
  <button class="delete-button" type="submit">
    <Trash /> Delete
  </button>
</form>

<style>
	a,
	form {
		flex-shrink: 0;
	}
</style>
