<script lang="ts">
  const { href, target = "_self", text } = $props();
</script>

<a
  {href}
  {target}
  rel="noopener">
  <button>{text}</button>
</a>

<style>
  @property --bg-angle {
    inherits: false;
    initial-value: 0deg;
    syntax: "<angle>";
  }
  a {
    display: contents;
  }
  /* TODO just make this a component if im going to use it one more time */
  /* ELEMENTS */
  button {
    animation: spin 2.5s infinite linear paused;
    box-shadow:
      var(--shadow-2),
      0 0px var(--surface-3),
      0 0 0 var(--_highlight-size) var(--_highlight);
    border: 1px solid transparent;
    background-color: unset;
    background:
      linear-gradient(to bottom, #222, #111) padding-box,
      conic-gradient(from var(--bg-angle) in oklch longer hue, oklch(0.65 0.17 0) 0 0) border-box;
    min-width: var(--size-content-1);
    color: var(--stone-1);
    font-weight: var(--font-weight-6);
    &:hover {
      animation-play-state: running;
    }
  }

  @keyframes spin {
    to {
      --bg-angle: 360deg;
    }
  }
</style>
