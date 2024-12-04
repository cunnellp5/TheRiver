<script lang="ts">
  let scroll: number = $state(0);
</script>

<svelte:window bind:scrollY={scroll} />

<section class="title">
  <div class="overlayText">
    <h1>The River Sings</h1>
  </div>
  <img
    src="https://res.cloudinary.com/dswpu3qez/image/upload/c_fill,g_auto/v1732155330/backgrounds/feature-collage-2_laljnw.webp"
    class="main-image__img"
    alt="The River tracks collage"
    style:object-position={`center ${40 + scroll / 35}%`} />
</section>

<style>
	/* ELEMENTS */
	h1 {
		border-radius: var(--radius-2);
		background-color: var(--stone-12);
		padding-inline: var(--size-6);
		padding-block: var(--size-3);
		font-variant: small-caps;
		font-size: var(--size-11);
		line-height: 1;
		font-family: 'Atyp BL Display Medium';
	}
	.overlayText {
		position: absolute;
		top: -3%;
		left: 1%;
		transform: rotate(-2deg);
		animation: moveGradient 8s linear infinite;
		border-radius: var(--radius-2);

		background: linear-gradient(
			90deg,
			var(--life) 0%,
			var(--healing) 15%,
			var(--sunlight) 30%,
			var(--nature) 50%,
			var(--serenity) 65%,
			var(--spirit) 80%,
			var(--life) 100%
		);
		background-size: 200%;
		padding: var(--size-1);

		color: var(--sand-1);
	}

	/* CLASSES */
	.main-image__img {
		width: 100%;
		height: 100%;
		object-fit: cover; /* Ensures the image covers the container without shrinking */
		object-position: center 35%;
	}
	.title {
		display: flex;
		position: relative;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: var(--size-4);
		margin-block: var(--nav-height);
		height: var(--size-content-3);
	}

	@keyframes moveGradient {
		0% {
			background-position: 0%;
		}
		100% {
			background-position: 200%;
		}
	}

	@media (max-width: 1024px) {
		.overlayText {
			top: 0%;
			left: 50%;
			transform: rotate(0deg) translate(-50%, -50%);
		}
		h1 {
			font-size: var(--size-7);
			white-space: nowrap;
		}
	}

	/* @media (max-width: 768px) {
	} */
</style>
