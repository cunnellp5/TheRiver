<section class="beauty">
  <h2 class="descriptionHeader gradientHeaders">Merch</h2>
  <a
    class="hairLink"
    href="https://www.etsy.com/shop/TheRiverDesign"
    target="_blank"
    rel="noopener">
    <button class="primary">Get some. @Etsy</button>
  </a>
</section>

<style>
  @property --bg-angle {
    inherits: false;
    initial-value: 0deg;
    syntax: "<angle>";
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
      conic-gradient(from var(--bg-angle) in oklch longer hue, oklch(0.85 0.37 0) 0 0) border-box; /* extends to outer border edges */
    min-width: var(--size-content-1);
    color: var(--stone-1);
    font-weight: var(--font-weight-6);
    &:hover {
      animation-play-state: running;
    }
  }

  section {
    background-image: radial-gradient(
      ellipse at center center,
      hsla(330, 80%, 35%, 0.109),
      transparent 75%
    );
    background-size: cover;
  }
  /* CLASSES */
  /* .about, */
  .beauty {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--size-3);
    padding-block: var(--size-content-1);
    & button {
      min-width: var(--size-content-1);
    }
  }

  @media (max-width: 768px) {
    /* .about, */
    .beauty {
      padding-block: var(--size-9);
    }
    .descriptionHeader {
      font-size: var(--size-8);
    }
  }

  @keyframes spin {
    to {
      --bg-angle: 360deg;
    }
  }
</style>
