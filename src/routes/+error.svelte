<script lang="ts">
	import Seo from '$lib/components/SEO.svelte';
</script>

<Seo
	title={'Error - Something Went Wrong'}
	description={'Oops! Something went wrong. Please try again later or contact support if the issue persists.'} />

<main class="app-layout hype">
	<h1>The River</h1>
	<section>
		<blockquote>
			<p>
				Life is like the river, sometimes it sweeps you gently along and sometimes the rapids come
				out of nowhere.
			</p>
		</blockquote>
		<small>Something went wrong, this is an error page.</small>
	</section>
</main>

<style>
	.hype > h1 {
		font-size: var(--size-15);
	}
	section {
		display: flex;
		position: absolute;
		flex-direction: column;
		gap: var(--size-4);
	}
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
	p {
		color: var(--text-2);
		font-weight: 200;
		font-size: var(--size-3);
		line-height: var(--font-lineheight-5);
	}

	@media (max-width: 1024px) {
		.hype > h1 {
			font-size: var(--size-12);
		}
		section {
			position: relative;
		}
	}

	@media (max-width: 768px) {
		.hype > h1 {
			font-size: var(--size-10);
		}
		section {
			position: relative;
		}
		main {
			height: 70vh;
		}
	}
</style>
