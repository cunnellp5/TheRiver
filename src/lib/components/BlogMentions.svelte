<script lang="ts">
	import { blogReferences } from '$lib/data/marketing';
</script>

<section>
	{#each blogReferences as blogReference}
		<div class="card">
			<figure>
				<img src={blogReference.img.url} alt="cap1" />
			</figure>
			<div class="contentWrapper">
				<h5>{blogReference.link.title}</h5>
				<p>{blogReference.content.message}</p>
				<a href={blogReference.link.url}>{blogReference.link.title}</a>
			</div>
		</div>
	{/each}
</section>

<style>
	section {
		/* display: grid; */
		display: flex;
		/* justify-content: space-evenly; */
		/* background: var(--gradient-15) fixed; */
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		flex-flow: row wrap;
		/* gap: var(--size-6); */
	}

	.card {
		display: flex;
		flex: 1 1 var(--size-14);
		flex-direction: column;
		gap: var(--size-3);
		transition:
			flex-grow 0.5s ease,
			flex-shrink 0.5s ease;
		box-shadow: var(--shadow-1);
		padding: var(--size-4);
	}

	/* .card > h5 {
		line-height: var(--font-lineheight-0);
	} */

	a {
		color: var(--link);
		font-size: var(--font-size-0);
		text-decoration: none;
	}

	p {
		margin-block: var(--size-3);
		color: var(--text-2);
		font-size: var(--font-size-1);
	}

	img {
		-webkit-transform: scale(1);
		transform: scale(1);
		-webkit-transition: 0.3s ease-in-out;
		transition: 0.3s ease-in-out;
		transition-delay: var(--transition-delay-1);
		border-radius: 0;
		aspect-ratio: var(--ratio-square);
		object-fit: cover;
	}

	img:hover {
		-webkit-transform: scale(1.3);
		transform: scale(1.3);
	}

	figure {
		margin: 0;
		padding: 0;
		overflow: hidden;
	}
</style>
