<script lang="ts">
	import type { PageData } from './$types';
	import formatDate from '$lib/utils/formatDate';

	export let data: PageData;
</script>

<main>
	<section>
		<hgroup>
			<h2>{data.post.title}</h2>
			<date>{formatDate(new Date(data.post.createdAt))}</date>
		</hgroup>

		<div class="content">
			{data.post.content}
		</div>
	</section>
</main>

<style>
	h2 {
		line-height: var(--font-lineheight-0);
	}

	hgroup {
		margin-block: var(--size-7);
	}

	date {
		font-size: var(--font-size-0);
		color: var(--gray-7);
	}

	main {
		margin-block-start: var(--size-9);
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	section {
		height: 100vh;
		width: var(--size-15);
	}

	div {
		line-height: var(--font-lineheight-1);
	}
</style>
