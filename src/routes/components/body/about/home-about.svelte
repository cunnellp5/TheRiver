<script lang="ts">
  import ButtonCard from "./button-card.svelte";
</script>

<section class="about">
  <div class="description--header__wrapper">
    <h2 class="descriptionHeader gradientHeaders description--header__music">Music</h2>
    <h2 class="descriptionHeader gradientHeaders description--header__art">Art</h2>
    <h2 class="descriptionHeader gradientHeaders description--header__hair">Hair</h2>
    <h2 class="descriptionHeader gradientHeaders description--header__nails">Nails</h2>
  </div>

  <aside class="description">
    <div class="description__text">
      <h3>About</h3>
      <p>The River is a rising HipHop/R&B artist based in Denver, Colorado.</p>
      <p>
        She is a multi-faceted individual who was a marching band nerd and later explored dance,
        multimedia arts, and songwriting.
      </p>
      <p>
        Today you can find her producing music, making clothes, art, and providing beauty services.
      </p>
    </div>
  </aside>

  <ButtonCard />
</section>

<style>
  /* ELEMENTS */
  section {
    background-size: cover;
    position: relative;
  }
  h3 {
    color: var(--brand);
  }
  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--size-4);
    /* width: 100vw; */
    padding-block: var(--size-7);
    background-position: 60% 85%;
  }
  .description::before {
    position: absolute;
    content: "";
    -webkit-mask: linear-gradient(120deg, transparent 25%, white);
    mask: linear-gradient(120deg, transparent 25%, white);
    background-image: radial-gradient(
      circle at 1px 1px,
      hsl(var(--yellow-5-hsl) / 50%) 1px,
      transparent 0
    );
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: 1rem 1rem;
    background-repeat: repeat;
    background-position: 0.5rem center;
    z-index: -1;
  }
  .description__text {
    display: flex;
    flex-direction: column;
    gap: var(--size-3);
    backdrop-filter: blur(55px);
    padding: var(--size-8);
    border-radius: var(--radius-3);
  }
  .descriptionHeader {
    font-size: var(--size-12);
    line-height: 1;
    font-variant: small-caps;
    text-align: center;
  }
  .description--header__wrapper {
    display: flex;
    flex-flow: wrap;
    justify-content: space-evenly;
    gap: var(--size-4);
    padding: var(--size-4);
    /* backdrop-filter: grayscale(40%); */
    border-radius: var(--radius-2);
  }
  .description--header__art {
    font-family: var(--font-handwritten);
  }
  .description--header__nails {
    font-family: var(--font-didone);
  }
  .description--header__music {
    font-family: var(--font-old-style);
  }
  .description--header__hair {
    font-family: var(--font-geometric-humanist);
  }
  /* CLASSES */
  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--size-2);
    padding-block: var(--size-content-1);
  }
  .about::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset-block: 5%;
    inset-inline: -15% 0;
    border-radius: var(--radius-blob-1);
    background-image: var(--gradient-4), var(--noise-5);
    opacity: 0.8;
    /* filter: var(--noise-filter-6); */
  }
  p {
    /* text-shadow: 0px 0px var(--stone-15); */
    /* color: var(--stone-2); */
    /* line-height: var(--font-lineheight-1); */
    color: var(--gray-8);
    font-size: var(--font-size-3);
    font-weight: var(--font-weight-9);
    font-family: var(--font-system-ui);
  }

  @media (max-width: 768px) {
    /* .beauty, */
    .about {
      padding-block: var(--size-9);
    }
    .about::before {
      display: none;
    }
    .descriptionHeader {
      font-size: var(--size-8);
    }
  }
</style>
