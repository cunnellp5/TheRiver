<img class="skeleton" alt="imgage loading" />

<style>
	img {
		-webkit-transform: scale(1);
		transform: scale(1);
		-webkit-transition: 0.3s ease-in-out;
		transition: 0.3s ease-in-out;
		transition-delay: var(--transition-delay-1);
		border-radius: 0;
		aspect-ratio: var(--ratio-square);
		min-width: 400px;
		min-height: 400px;
		object-fit: cover;
	}

	.skeleton {
		opacity: 0.7;
		animation: skeleton-loading 1s linear infinite alternate;
	}

	@keyframes skeleton-loading {
		0% {
			background-color: hsl(200, 20%, 40%);
		}
		100% {
			background-color: hsl(200, 20%, 90%);
		}
	}
</style>
