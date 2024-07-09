<script lang="ts">
	export let articleImage;
	export let articleTitle;
	export let message;
	export let link;
</script>

<div class="card">
	<figure>
		<figure>
			<img src={articleImage} alt={articleTitle} />
		</figure>
	</figure>
	<div class="contentWrapper">
		<h5>{articleTitle}</h5>
		<p>{message}</p>
		<a href={link}>{articleTitle}</a>
	</div>
</div>

<style>
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
