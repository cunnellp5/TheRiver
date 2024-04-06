<script lang="ts">
	import { blogReferences } from '$lib/data/marketing';
</script>

<section>
	{#each blogReferences as blogReference}
		<div class="card">
			<img src={blogReference.img.url} alt="cap1" />
			<h5>{blogReference.link.title}</h5>
			<p>{blogReference.content.message}</p>
			<a href={blogReference.link.url}>{blogReference.link.title}</a>
		</div>
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-flow: row wrap;
		align-items: flex-start;
		justify-content: space-around;
		/* max-inline-size: calc(var(--size-content-1) * ); */
		gap: var(--size-5);
		padding: var(--size-5);
	}

	.card {
		flex-basis: var(--size-content-2);
		display: flex;
		flex-direction: column;
		gap: var(--size-2);
		background: var(--surface-4);
		border: 1px solid var(--surface-1);
		padding: var(--size-4);
		border-radius: var(--radius-2);
		box-shadow: var(--shadow-2);
	}

	.card > h5 {
		line-height: var(--font-lineheight-0);
	}

	a {
		color: var(--link);
		text-decoration: none;
		font-size: var(--font-size-0);
	}

	p {
		margin-block: var(--size-3);
		font-size: var(--font-size-1);
	}
</style>
