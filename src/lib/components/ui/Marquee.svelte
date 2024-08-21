<!-- TODO add this to homepage after breaking out of the layout styles so this can be full width rather than being constrained by the layout style width -->
<div class="marquee marquee-hover-pause">
	<div class="marquee_group">
		<span class="font1">THE RIVER</span>
		<span>THE RIVER</span>
		<span class="font1">THE RIVER</span>
		<span>THE RIVER</span>
		<span class="font1">THE RIVER</span>
		<span>THE RIVER</span>
	</div>
	<div class="marquee_group" aria-hidden="true">
		<span class="font1">THE RIVER</span>
		<span>THE RIVER</span>
		<span class="font1">THE RIVER</span>
		<span>THE RIVER</span>
		<span class="font1">THE RIVER</span>
		<span>THE RIVER</span>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

	.marquee {
		display: flex;
		background: var(--surface-1);
		/* padding-top: 11rem; */
		/* padding-bottom: 12rem; */
		/* height: 40vh; */
		overflow: hidden;
		user-select: none;
	}
	.marquee:hover {
		-webkit-text-stroke: 1.5px var(--link);
		-webkit-text-fill-color: transparent;
		color: transparent;
		-webkit-font-smoothing: antialiased;
	}
	.marquee_group {
		display: flex;
		flex-shrink: 0;
		/* justify-content: space-between; */
		/* align-items: center; */
		animation: scroll 45s linear infinite;
		min-width: 100%;
	}
	.marquee_group span {
		color: var(--link);
		font-weight: var(--font-weight-8);
		font-size: var(--size-10);
		font-family: 'Syne', sansserif;
		white-space: nowrap;
	}
	.marquee-hover-pause:hover .marquee_group {
		animation-play-state: paused;
		/* cursor:
			url('https://fav.farm/🎙️') 15 0,
			auto; */
	}
	.marquee_group span.font1 {
		margin-inline: var(--size-4);
		font-family: 'Lobster', sansserif;
		/* text-transform: lowercase; */
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			/* transform: translateX(calc(-100% - 2rem)); */
			transform: translateX(-100%);
		}
	}
</style>
