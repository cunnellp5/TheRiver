<script lang="ts">
  const { services } = $props();

  let activeIndex: number | null = $state(null);
</script>

<ul class="dots">
  {#each Object.entries(services) as [category], index}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <li
      class:active={index === activeIndex}
      onclick={() => (activeIndex = index)}
      title={category}>
      <a href={`#${category}`}>
        {category}
      </a>
    </li>
  {/each}
</ul>

<style>
	.dots {
		display: flex;
		flex-direction: column;
		gap: var(--size-5);

		& .active {
			& a {
				-webkit-transform: scale3d(1.3, 1.3, 1.3);
				transform: scale3d(1.3, 1.3, 1.3);

				&:after {
					height: 100%;
				}
			}
		}

		& li {
			display: block;
			position: relative;
			float: left;
			cursor: pointer;
			margin-inline: var(--size-3);
			width: 20px;
			height: 20px;

			& a {
				position: absolute;
				top: 0;
				left: 0;
				-webkit-transform: scale3d(1, 1, 1);
				transform: scale3d(1, 1, 1);
				-webkit-transition: all 0.3s ease;
				transition: all 0.3s ease;
				cursor: pointer;
				outline: none;
				box-shadow: inset 0 0 0 2px var(--link);
				border-radius: 50%;
				background-color: transparent;
				width: 100%;
				height: 100%;
				overflow: hidden;
				text-indent: -999em;

				&:after {
					position: absolute;
					bottom: 0;
					left: 0;
					-webkit-transition: height 0.3s ease;
					transition: height 0.3s ease;
					box-shadow: 0 0 1px var(--link);
					background-color: var(--link);
					width: 100%;
					height: 0;
					content: '';
				}
			}
		}
	}
	/* LABELS */
	[title] {
		position: relative;
	}
	[title]:after {
		position: absolute;
		right: 150%;
		bottom: 0%;
		opacity: 0;
		-webkit-transition: opacity 0.1s ease-in-out;
		transition: opacity 0.1s ease-in-out;
		border-radius: var(--radius-round);
		background-color: var(--surface-3);
		padding-inline: var(--size-2);
		width: max-content;
		content: attr(title);
		color: var(--text-2);
		font-size: var(--font-size-0);
		text-transform: uppercase;
	}
	[title]:hover:after {
		opacity: 1;
	}

	@media (max-width: 768px) {
		.dots {
			position: absolute;
			right: -40px;
		}
	}
</style>
