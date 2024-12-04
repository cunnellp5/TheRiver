<script lang="ts">
  import { onMount } from "svelte";

  const { videos } = $props();

  let slider: HTMLElement = $state();
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  function handlePointerDown(e: PointerEvent) {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  }

  function handlePointerLeave() {
    isDown = false;
    slider.classList.remove("active");
  }

  function handlePointerUp() {
    isDown = false;
    slider.classList.remove("active");
  }

  function handlePointerMove(e: PointerEvent) {
    if (!isDown)
      return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; // scroll-fast
    slider.scrollLeft = scrollLeft - walk;
  }

  onMount(() => {
    slider.addEventListener("pointerdown", handlePointerDown);
    slider.addEventListener("pointerleave", handlePointerLeave);
    slider.addEventListener("pointerup", handlePointerUp);
    slider.addEventListener("pointermove", handlePointerMove);

    return () => {
      slider.removeEventListener("pointerdown", handlePointerDown);
      slider.removeEventListener("pointerleave", handlePointerLeave);
      slider.removeEventListener("pointerup", handlePointerUp);
      slider.removeEventListener("pointermove", handlePointerMove);
    };
  });
</script>

<ul class="cards" bind:this={slider}>
  {#each videos as video, i (i)}
    <a
      class="is-snapped-anchor"
      target="_blank"
      rel="noopener"
      href={`https://www.youtube.com/watch?v=${video.videoId}`}>
      <li>
        <img src={video.thumbnail} alt={video.title} class="thumbnail" width="800" height="800" />
      </li>
    </a>
  {/each}
</ul>

<style>
	@layer base, components;

	@supports (view-timeline: --works) {
		/* Hide warning when native view-timeline support detected */
		.warning {
			display: none;
		}

		/* Animation bumps up the z-index, to make sure it’s on top */
		@keyframes adjust-z-index {
			0% {
				z-index: var(--layer-1);
			}
			50% {
				z-index: var(--layer-4); /* When at the center, be on top */
			}
			100% {
				z-index: var(--layer-1);
			}
		}

		/* Animation that rotates the cover */
		@keyframes rotate-cover {
			0% {
				transform: translateX(-60%) rotateY(-45deg);
			}
			35% {
				transform: translateX(0) rotateY(-45deg);
			}
			50% {
				transform: rotateY(0deg) translateZ(1em) scale(1.5);
			}
			65% {
				transform: translateX(0) rotateY(45deg);
			}
			100% {
				transform: translateX(60%) rotateY(45deg);
			}
		}

		.cards li {
			/* Track this element as it intersects the scrollport */
			view-timeline-name: --li-in-and-out-of-view;
			view-timeline-axis: inline;

			/* Link an animation to the established view-timeline and have it run during the contain phase */
			animation: linear adjust-z-index both;
			animation-duration: auto;
			animation-timeline: --li-in-and-out-of-view;
			animation-range: contain 0% contain 100%; /* For Canary */

			position: relative;

			/* Make the 3D stuff work… */
			perspective: 40em;
			z-index: var(--layer-1);
			will-change: z-index;

			/* pointer-events: none; */
			user-select: none;
		}

		.cards li > img {
			/* Link an animation to the established view-timeline (of the parent li) and have it run during the contain phase */
			animation: linear rotate-cover both;
			animation-duration: auto;
			animation-timeline: --li-in-and-out-of-view;
			animation-range: contain 0% contain 100%;

			/* Prevent FOUC */
			transform: translateX(-100%) rotateY(-45deg);

			will-change: transform;

			/* overrides */
			border-radius: unset;
			aspect-ratio: 1 / 1;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	@layer base {
		ul {
			box-sizing: border-box;
			margin: 0;
			padding: 0;
		}

		:root {
			--cover-size: var(--size-13);
		}

		@media (max-width: 800px) {
			:root {
				--cover-size: 9rem;
			}
		}

		@media (max-width: 500px) {
			:root {
				--cover-size: 6rem;
			}
		}

		@supports (place-content: safe center) {
			ul {
				place-content: safe center;
			}
		}

		a {
			color: papayawhip;
		}

		.cards {
			border-radius: var(--radius-1);
			background: rgba(0 0 0 / 0.5);
			width: 100%;
			overflow-x: scroll;
			list-style: none;
			white-space: nowrap;
		}

		.cards:focus {
			outline-color: #666;
		}

		/* only enable snapping when not dragging round*/
		.cards:not(.active) {
			scroll-snap-type: x mandatory;
		}

		.cards li {
			display: inline-block;
			width: var(--cover-size);
			height: var(--cover-size);
			scroll-snap-align: center;
		}

		.cards li img {
			/* display: block; */
			width: var(--cover-size);
			height: var(--cover-size);

			-webkit-box-reflect: below 0.5em linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.25));
		}

		.cards {
			margin: 0 auto;
			padding: calc(var(--cover-size) / 3) 0;

			max-width: calc(var(--cover-size) * 6);
			min-height: calc(var(--cover-size) * 2.5);
		}

		.cards li:first-of-type {
			margin-left: calc(50% - var(--cover-size) / 2);
		}
		.cards li:last-of-type {
			margin-right: calc(50% - var(--cover-size) / 2);
		}
	}

	.cards {
		padding: calc(var(--cover-size) / 3) 50%;
	}
</style>
