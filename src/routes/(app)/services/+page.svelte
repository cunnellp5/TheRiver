<script lang="ts">
	import Table2 from '$lib/components/ui/Table2.svelte';

	let columns = ['Service', 'Price', 'Duration'];
	let data = [
		{ Service: 'Rainbow hair', Price: '$100', Duration: '1 hour' },
		{ Service: 'Nails', Price: '$200', Duration: '2 hours' }
		// Add more rows as needed
	];
</script>

<main>
	<section class="top">
		<h1>THE RIVER BEAUTY</h1>
		<p>Denver based beauty</p>
		<img
			src="https://res.cloudinary.com/dswpu3qez/image/upload/v1714083850/TheRiver/alexisArt_fr62uy.png"
			alt="" />

		<div class="page-indicator">1</div>
	</section>
	<section class="service-table">
		<Table2 {columns} {data} />
	</section>
</main>

<style>
	main {
		grid-column: 2;
		margin: 0 auto;
		line-height: var(--font-lineheight-4);
		letter-spacing: var(--font-letterspacing-3);
	}
	img {
		position: absolute;
		top: var(--size-8);
		left: 0;
		z-index: -1;
		clip-path: polygon(0 0, 100% 0, 100% 75%, 0% 100%);
	}
	.page-indicator {
		display: flex;
		position: fixed;
		bottom: 0;
		justify-content: center;
		align-items: center;
		margin-bottom: var(--size-4);
		border-right: 1px solid var(--link);
		padding-right: var(--size-2);
		height: var(--size-7);
		color: var(--link);
	}
	.top {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: end;
		width: 100%;
		height: 100vh;
	}
	.service-table {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		width: 100%;
		height: 100vh;
	}
</style>
