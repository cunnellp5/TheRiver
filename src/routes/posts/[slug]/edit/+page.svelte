<script lang="ts">
	import 'quill/dist/quill.snow.css';
	import type { ActionData, PageData } from '../$types';
	import PostsForm from '../../components/PostsForm.svelte';
	import { page } from '$app/stores';

	export let form: ActionData;
	export let data: PageData;

	let post = data.posts.find((post) => post.slug === $page.params.slug);

	let title: string = post?.title || '';
	let content: string = post?.content || '';
	let description: string = post?.description || '';
	let tagInput: string[] = post?.tags || [];
	let published: boolean = post?.published || false;

	console.log(post);
</script>

<main>
	<section>
		<h1 class="firstHeader">Edit a post</h1>

		<blockquote>
			<ul>
				<li>- Title becomes the 'slug' which is used in the url.</li>
				<li>- Content images | videos must be URLs.</li>
				<li>- You can save a post as unpublished and finish it later</li>
				<li>- Tags must be unique within each post.</li>
			</ul>
		</blockquote>

		{#if form?.error}<p class="formMessage">{form?.message}</p>{/if}

		<PostsForm {form} {title} {content} {description} {tagInput} {published} />
	</section>
</main>

<style>
	main {
		display: flex;
		justify-content: center;
	}
	blockquote {
		color: var(--stone-7);
		margin-block: var(--size-7);
		font-size: var(--size-8);
	}
	.firstHeader {
		margin-block: var(--size-7);
	}
	.formMessage {
		background: var(--pink-6);
		padding: var(--size-3);
		border-radius: var(--size-1);
		margin-block-end: var(--size-4);
		font-size: var(--font-size-5);
	}
</style>
