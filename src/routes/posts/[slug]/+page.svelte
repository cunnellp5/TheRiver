<script lang="ts">
	import type { PageData } from './$types';
	import formatDate from '$lib/utils/formatDate';

	export let data: PageData;
</script>

<main>
	<section>
		<hgroup>
			<h1>{data.post.title}</h1>
			<p>{formatDate(data.post.createdAt)}</p>
		</hgroup>

		<div class="content">
			{data.post.content}
		</div>
	</section>
</main>

<style>
	h1 {
		font-size: var(--size-8);
		line-height: var(--size-8);
		letter-spacing: -0.2rem;
	}
	hgroup {
		margin-block: var(--size-7);
	}

	p {
		font-size: var(--size-3);
		color: var(--gray-7);
	}

	main {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	section {
		width: var(--size-15);
	}
</style>
