<!-- TODO add this to homepage after breaking out of the layout styles so this can be full width rather than being constrained by the layout style width -->
<div class="marquee marquee-hover-pause">
	<div class="marquee_group">
		<span>THE RIVER SINGS&nbsp;</span>
		<span>THE RIVER SPEAKS&nbsp;</span>
		<span>THE RIVER CREATES&nbsp;</span>
	</div>
	<div class="marquee_group" aria-hidden="true">
		<span>THE RIVER SINGS&nbsp;</span>
		<span>THE RIVER SPEAKS&nbsp;</span>
		<span>THE RIVER CREATES&nbsp;</span>
	</div>
</div>

<style>
	.marquee {
		display: flex;
		/* padding-top: 11rem; */
		/* padding-bottom: 12rem; */
		/* height: 40vh; */
		overflow: hidden;
		user-select: none;
		-webkit-text-stroke: 1.5px var(--link);
		-webkit-text-fill-color: transparent;
		color: transparent;
		-webkit-font-smoothing: antialiased;
	}

	/* .marquee:hover {
	} */

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
		font-weight: 800;
		font-size: var(--size-content-1);
		font-family: 'Syne', sansserif !important;
		white-space: nowrap;
	}

	/* .marquee-hover-pause:hover .marquee_group { */
	/* animation-play-state: paused; */
	/* cursor:
			url('https://fav.farm/🎙️') 15 0,
			auto; */
	/* } */

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
