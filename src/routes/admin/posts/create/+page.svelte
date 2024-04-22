<script lang="ts">
	import PostsForm from '$lib/components/ui/posts/PostsForm.svelte';
	import type { ActionData } from '../../../$types';
	export let form: ActionData;
</script>

<section>
	<PostsForm {form} />
</section>

<style>
	section {
		display: flex;
		justify-content: center;
	}
</style>
