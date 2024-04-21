<script lang="ts">
	import { enhance } from '$app/forms';
	import { QuillConfigReadonly, quillContentInit } from '$lib/utils/QuillConfig';
	import formatDate from '$lib/utils/formatDate';
	import Pencil from 'lucide-svelte/icons/pencil';
	import Trash from 'lucide-svelte/icons/trash';
	import type Quill from 'quill';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let quill: Quill | null;
	let reader: string | HTMLElement;

	onMount(async () => {
		try {
			const { default: Quill } = await import('quill');

			quill = new Quill(reader, QuillConfigReadonly);

			let quillData = await quillContentInit(data.post.content);

			quill.setContents(quillData);
		} catch (error) {
			// TODO: unable to load quill, provide some fall back
		}
	});
</script>

<main>
	<section>
		<hgroup>
			<div class="headerAction">
				<h1 id={data.post.slug}>{data.post.title}</h1>
				{#if data.isAdmin}
					<button class="edit" title="Edit this post">
						<a href="/posts/{data.post.slug}/edit"><Pencil /></a>
					</button>
					<form
						method="POST"
						action="/posts?/deletePost"
						use:enhance={({ cancel }) => {
							if (confirm('Are you sure you want to delete this post?')) {
								return async ({ update }) => update();
							}
							cancel();
						}}>
						<input type="hidden" name="slug" id="slug" value={data.post.slug} />
						<button class="delete" type="submit">
							<Trash />
						</button>
					</form>
				{/if}
			</div>
			<date>{formatDate(new Date(data.post.createdAt))}</date>
			<div class="tags">
				{#each data.post.tags as tag}
					<span class="badge"># {tag}</span>
				{/each}
			</div>
		</hgroup>

		<div class="reader-wrapper">
			<div bind:this={reader} />
		</div>
		<!-- TODO figure out if both the following are needed? -->
		<!-- <div class="reader-wrapper" class:hidden={!quill}>
			<div bind:this={reader} />
		</div>

		<p class="content" class:hidden={quill}>
			{data.post.content}
		</p> -->
	</section>
</main>

<style>
	@import '../styles/post.css';

	main {
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	date {
		font-size: var(--font-size-0);
		color: var(--gray-7);
	}

	.headerAction {
		display: flex;
		/* justify-content: space-between; */
		align-items: center;
		& button {
			margin-inline-start: var(--size-2);
		}
	}
	/* .hidden {
		display: none;
	} */
	.reader-wrapper {
		width: 100%;
		& *,
		& *::before,
		& *::placeholder {
			/* background-color: var(--yellow-0); */
			color: var(--stone-2);
		}
		& blockquote {
			padding-inline: var(--size-4);
		}
	}
	.delete {
		background-color: hsl(var(--red-5-hsl) / 80%);
	}
</style>
