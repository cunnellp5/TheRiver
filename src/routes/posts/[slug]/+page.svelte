<script lang="ts">
	import formatDate from '$lib/utils/formatDate';
	import type { PageData } from './$types';
	import EditForm from './EditForm.svelte';

	export let form;
	export let data: PageData;
	let isEditing = true;

	function update() {
		isEditing = !isEditing;
	}
</script>

<input type="checkbox" on:change={update} />
<main class:editing={isEditing} class:center={!isEditing}>
	<section>
		<hgroup>
			<h2>{data.post.title}</h2>
			<date>{formatDate(new Date(data.post.createdAt))}</date>
			<div class="tags">
				{#each data.post.tags as tag}
					<span class="badge"># {tag}</span>
				{/each}
			</div>
		</hgroup>

		<p class="content">
			{data.post.content}
		</p>
	</section>
	{#if isEditing}
		<EditForm {data} {form} />
	{/if}
</main>

<style>
	@import './post.css';

	.editing {
		margin-block-start: var(--size-9);
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	.center {
		margin-block-start: var(--size-9);
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
