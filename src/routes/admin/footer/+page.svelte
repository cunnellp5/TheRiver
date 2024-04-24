<script lang="ts">
	// eslint-disable-next-line import/no-unresolved
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	export let data: PageData;

	let title = '';
	let url = '';

	let isCreatingSocialLink = false;
</script>

<h2>Footer links</h2>
<p>This shows all your links in the footer</p>

<div class="table">
	<div class="table-title-wrapper">
		<span class="table-title">Title</span>
		<span class="table-title">File</span>
		<span>
			<button
				on:click={() => {
					isCreatingSocialLink = !isCreatingSocialLink;
					return isCreatingSocialLink;
				}}>
				+ Add
			</button>
		</span>
	</div>

	{#if isCreatingSocialLink}
		<form class="table-form-items-wrapper" method="post" action="?/addLink">
			<span>
				<label for="title">Title</label>
				<input bind:value={title} name="title" id="title" required />
			</span>
			<span>
				<label for="url">url</label>
				<input bind:value={url} name="url" id="url" required />
			</span>
			<span class="table-actions"> <button>create</button> </span>
		</form>
	{/if}

	<div class="table-items-wrapper">
		{#each data.socialLinks as link}
			<span>{link.title}</span>
			<span>{link.url}</span>
			<span>
				<div class="table-actions">
					<button> edit </button>
					<form method="POST" action="?/deleteLink" use:enhance>
						<input type="hidden" name="linkId" id="linkId" value={link.id} />
						<button type="submit"> delete </button>
					</form>
				</div>
			</span>
		{/each}
	</div>
</div>

<style>
	form {
		& input {
			margin-inline: var(--size-3);
			border: 1px solid var(--border);
			width: 100%;
		}
	}

	p {
		font-size: var(--font-2);
	}

	/* TABLE STYLES */
	.table-form-items-wrapper,
	.table-title-wrapper,
	.table-items-wrapper {
		display: grid;
		grid-template-columns: 2fr 3fr 1fr;
	}

	.table {
		& .table-title {
			color: var(--pink-7);
		}

		& span {
			display: flex;
			align-items: center;
			border-bottom: 1px solid var(--border);
			padding: var(--size-3);
		}

		& .table-actions {
			display: flex;
			align-items: center;
			gap: var(--size-3);
		}
	}
</style>
