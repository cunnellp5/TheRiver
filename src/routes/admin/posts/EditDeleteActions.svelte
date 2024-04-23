<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import Pencil from 'lucide-svelte/icons/pencil';
	import Trash from 'lucide-svelte/icons/trash';
	export let slug: string;
	export let redirect: boolean = false;
	export let actionLocation: string = '?/deletePost';
</script>

<a href="/admin/posts/{slug}/edit">
	<button class="edit" type="button">
		<Pencil />
	</button>
</a>
<form
	method="POST"
	action={actionLocation}
	use:enhance={({ cancel }) => {
		if (confirm('Are you sure you want to delete this post?')) {
			if (redirect) {
				return async ({ update }) =>
					update().then(() => {
						goto('/admin/posts');
					});
			}
			return async ({ update }) => update();
		}
		cancel();
	}}>
	<input type="hidden" name="slug" id="slug" value={slug} />
	<button class="delete" type="submit">
		<Trash />
	</button>
</form>
