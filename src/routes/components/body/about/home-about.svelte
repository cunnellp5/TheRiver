<script lang="ts">
  import Socials from "$lib/components/ui/socials.svelte";
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
    <img
      src="https://res.cloudinary.com/dswpu3qez/image/upload/c_fill,g_auto/v1732155330/backgrounds/feature-collage-2_laljnw.webp"
      class="main-image__img"
      alt="The River tracks collage" />
    <div class="description__text">
      <h3 class="gradientHeaders">About</h3>
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

  <div class="footer">
    <p>Let's <span class="lobster">flow</span> together.</p>
    <div class="socials">
      <Socials />
    </div>
  </div>
</section>

<style>
  /* ELEMENTS */
  section {
    background-image: radial-gradient(
      circle at top right,
      hsla(98, 36%, 30%, 0.109),
      transparent 75%
    );
    background-size: cover;
    position: relative;
  }
  .main-image__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* object-fit: contain; */
    /* object-position: center; */
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 35%;
      object-position: center 30%;
    }
  }
  .description {
    background: var(--surface-4);
    padding: var(--size-4);
    border-radius: var(--radius-3);

    display: flex;
    /* position: relative;/ */
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    gap: var(--size-4);
    margin-block: var(--nav-height);
    height: var(--size-content-3);
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
  .description__text {
    display: flex;
    flex-direction: column;
    gap: var(--size-8);
  }
  .descriptionHeader {
    font-size: var(--size-12);
    line-height: 1;
    font-variant: small-caps;
    text-align: center;
  }
  .description--header__wrapper {
    display: flex;
    justify-content: space-evenly;
    gap: var(--size-4);
    padding-block: var(--size-4);
  }
  .description--header__art {
    font-family: "Lobster", cursive;
  }
  .description--header__nails {
    font-family: "Atyp BL Display Medium";
  }
  .description--header__music {
    font-family: "Raleway", sans-serif;
  }
  /* CLASSES */
  .lobster {
    color: var(--link);
    font-family: "Lobster", cursive;
  }
  /* .beauty, */
  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--size-2);
    padding-block: var(--size-content-1);
    & p {
      font-weight: 400;
      font-size: var(--font-size-3);
      font-family: "Ambit Light";
      text-transform: none;
    }
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

  .footer {
    display: flex;
    flex-basis: var(--size-content-1);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--size-2);
    background: var(--surface-3);
    border: 1px solid var(--surface-1);
    padding: var(--size-4);
    border-radius: var(--radius-3);
    box-shadow: var(--shadow-2);
  }

  @media (max-width: 768px) {
    /* .beauty, */
    .about {
      padding-block: var(--size-9);
    }
    .descriptionHeader {
      font-size: var(--size-8);
    }
  }
</style>
