<script lang="ts">
  interface Props {
    display?: string;
  }

  const { display = "THE RIVER" }: Props = $props();
</script>

<div class="marquee marquee-hover-pause">
  <div class="marquee_group">
    <span class="font1">{display}</span>
    <span>{display}</span>
    <span class="font1">{display}</span>
    <span>{display}</span>
    <span class="font1">{display}</span>
    <span>{display}</span>
  </div>
  <div
    class="marquee_group"
    aria-hidden="true">
    <span class="font1">{display}</span>
    <span>{display}</span>
    <span class="font1">{display}</span>
    <span>{display}</span>
    <span class="font1">{display}</span>
    <span>{display}</span>
  </div>
</div>

<style>
  .marquee {
    display: flex;
    background: var(--surface-1);
    padding: var(--size-4);
    overflow: hidden;
    user-select: none;
  }
  .marquee:hover {
    -webkit-text-stroke: 1.5px var(--link2);
    -webkit-text-fill-color: transparent;
    color: transparent;
    -webkit-font-smoothing: antialiased;
  }
  .marquee_group {
    display: flex;
    flex-shrink: 0;
    animation: scroll 85s linear infinite;
    min-width: 100%;
  }
  .marquee_group span {
    color: var(--link2);
    font-weight: var(--font-weight-8);
    font-size: var(--size-7);
    font-family: var(--font-handwritten);
    white-space: nowrap;
  }
  .marquee-hover-pause:hover .marquee_group {
    animation-play-state: paused;
  }
  .marquee_group span.font1 {
    margin-inline: var(--size-4);
    font-family: var(--font-antique);
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  @media (max-width: 768px) {
    .marquee_group span {
      font-size: var(--size-5);
    }
  }
</style>
