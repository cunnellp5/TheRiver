<!-- TODO add this to homepage after breaking out of the layout styles so this can be full width rather than being constrained by the layout style width -->
<div class="marquee marquee-hover-pause">
	<div class="marquee_group">
		<span>The River Sings</span>
		<span>The River Speaks</span>
		<span>The River Creates</span>
	</div>
	<div class="marquee_group" aria-hidden="true">
		<span>The River Sings</span>
		<span>The River Speaks</span>
		<span>The River Creates</span>
	</div>
</div>

<style>
	.marquee {
		display: flex;
		padding-top: 11rem;
		padding-bottom: 12rem;
		height: 40vh;
		overflow: hidden;
		user-select: none;
	}

	.marquee:hover {
		-webkit-text-stroke: 1.5px #fff;
		-webkit-text-fill-color: transparent;
		color: transparent;
		-webkit-font-smoothing: antialiased;
	}

	.marquee_group {
		display: flex;
		flex-shrink: 0;
		justify-content: space-between;
		align-items: center;
		gap: 0.2rem;
		animation: scroll 15s linear infinite;
		min-width: 100%;
	}

	.marquee_group span {
		color: white;
		font-weight: 800;
		font-size: 7vw;
		font-family: 'Syne', sans-serif !important;
		white-space: nowrap;
	}

	.marquee-hover-pause:hover .marquee_group {
		animation-play-state: paused;
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
