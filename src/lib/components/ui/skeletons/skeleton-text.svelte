<script lang="ts">
  interface Props {
    short?: boolean;
    title?: boolean;
  }

  const { short = false, title = false }: Props = $props();
</script>

<div
  class="skeleton skeleton-text"
  class:skeleton-text-short={short}
  class:skeleton-text-title={title}>
</div>

<style>
  .skeleton,
  .skeleton-text,
  .skeleton-text-short,
  .skeleton-text-title {
    animation: skeleton-loading 1s linear infinite alternate;
    border-radius: var(--radius-1);
  }

  .skeleton,
  .skeleton-text {
    opacity: 0.7;
  }

  .skeleton-text,
  .skeleton-text-title {
    margin-block: var(--size-2);
    width: 100%;
  }

  .skeleton-text {
    height: var(--size-3);
  }

  .skeleton-text-short {
    margin-top: var(--size-3);
    width: 20%;
    height: var(--size-2);
  }

  .skeleton-text-title {
    margin-bottom: var(--size-3);
    height: var(--size-5);
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
