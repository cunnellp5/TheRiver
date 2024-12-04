<script lang="ts">
  let scroll: number = $state(0);
</script>

<svelte:window bind:scrollY={scroll} />

<section class="main-image">
  <h1 class="overlay-text" style:top={`${50 + scroll / 35}%`}>H.M.U.</h1>
  <img
    src="https://res.cloudinary.com/dswpu3qez/image/upload/ar_16:9,c_fill,g_auto,w_1920/v1726747635/The_River_izwv3d.webp"
    alt="Main"
    class="main-image__img"
    style:object-position={`center ${scroll / 45}%`} />
</section>

<style>
	/* ELEMENTS */
	img {
		border-radius: unset;
	}
	h1 {
		font-style: normal;
		font-weight: var(--font-weight-4);
		font-family: 'Lobster', sansserif;
		letter-spacing: 0em;
		text-transform: uppercase;
	}
	/* CLASSES */
	.main-image {
		position: relative;
		width: 100%;
		height: 50vh;
	}
	.main-image__img {
		width: 100%;
		height: 100%;
		object-fit: cover; /* Ensures the image covers the container without shrinking */
		/* object-position: center 10%; Centers the image within the container */
	}
	.overlay-text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1; /* Ensure the text is above the image */
		color: var(--stone-0);
		font-size: var(--size-10);
		text-shadow: 4px 4px var(--yellow-6);
	}
</style>
