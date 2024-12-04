<script lang="ts">
  import TypingAnimation from "$lib/components/atoms/TypingAnimation.svelte";

  let scroll: number = $state(0);
</script>

<svelte:window bind:scrollY={scroll} />

<div class="app-layout">
  <div class="image-container">
    <img
      style:object-position={`center ${40 + scroll / 45}%`}
      src="https://res.cloudinary.com/dswpu3qez/image/upload/q_auto/v1727811530/backgrounds/modelingChairOffCenter2_lcf3i0.webp"
      alt="looking in the mirror" />
  </div>

  <div class="titleWrapper app-layout">
    <a href="/blog">
      <TypingAnimation text="The River Blogs." />
    </a>
  </div>
</div>

<style>
	/* ELEMENTS */
	a {
		text-decoration: none;
	}
	/* CLASSES */
	.app-layout {
		position: relative;
	}
	.titleWrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: var(--size-content-2);
		user-select: none;
	}
	.image-container {
		position: absolute;
		z-index: -1;
		width: 100%;
		height: var(--size-content-2);
		overflow: hidden;
	}
	.image-container img {
		border-radius: unset;
		padding-inline: var(--size-7);
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
