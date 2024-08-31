<div class="rainbow">
	<div class="rainbow-progress"></div>
</div>

<style>
	/* Signature Rainbow Bar */
	.rainbow {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
	}

	.rainbow-progress {
		animation: moveGradient 8s linear infinite;
		border-radius: 3px;
		background: linear-gradient(
			90deg,
			red 0%,
			yellow 15%,
			lime 30%,
			cyan 50%,
			blue 65%,
			magenta 80%,
			red 100%
		);
		background-size: 200%;
		width: 100%;
		height: 2px;
	}

	/* Animations */
	@keyframes moveGradient {
		0% {
			background-position: 0%;
		}
		100% {
			background-position: 200%;
		}
	}
</style>
