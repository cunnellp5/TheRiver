<script lang="ts">
	import Pencil from 'lucide-svelte/icons/pencil';
	import Trash from 'lucide-svelte/icons/trash';
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	export let slug: string;
	export let redirect: boolean = false;
</script>

<a href="/admin/posts/{slug}/edit" data-sveltekit-noscroll>
	<button class="edit" type="button">
		<Pencil />
	</button>
</a>
<form
	method="POST"
	action="?/deletePost"
	use:enhance={({ cancel }) => {
		// eslint-disable-next-line no-alert, no-restricted-globals
		if (confirm('Are you sure you want to delete this post?')) {
			if (redirect) {
				return async ({ update }) => update().then(() => goto('/admin/posts'));
			}
			return async ({ update }) => update();
		}
		return cancel();
	}}>
	<input type="hidden" name="slug" id="slug" value={slug} />
	<button class="delete" type="submit">
		<Trash />
	</button>
</form>

<style>
	a,
	form {
		flex-shrink: 0;
	}
</style>
