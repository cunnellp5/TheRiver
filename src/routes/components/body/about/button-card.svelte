<script lang="ts">
  import RainbowButton from "$lib/components/atoms/rainbow-button.svelte";
</script>

<main>
  <div class="card top-drop-shadow">
    <img
      src="https://res.cloudinary.com/dswpu3qez/image/upload/w_150,c_fill,ar_1:1,g_auto/v1724875596/TheRiver/alexisArticle3_tl91an.webp"
      alt="music card" />
    <div>
      <h5 class="gradientHeaders">Music</h5>
      <p>Checkout my latest tracks and music videos. Download stems and send me creations.</p>
    </div>
    <div class="button-wrapper">
      <RainbowButton
        href="/music"
        target="_self"
        text="Explore" />
    </div>
  </div>
  <div class="card middle-drop-shadow">
    <img
      src="https://res.cloudinary.com/dswpu3qez/image/upload/w_150,c_fill,ar_1:1,g_auto/v1733954083/nails1_s7lmgd.jpg"
      alt="nails card" />
    <div>
      <h5 class="gradientHeaders">Services</h5>
      <p>I do hair and nails.</p>
    </div>
    <div class="button-wrapper">
      <RainbowButton
        href="https://the-river-sings.square.site/"
        target="_blank"
        text="Book now" />
    </div>
  </div>
  <div class="card bottom-drop-shadow">
    <img
      class="card-img"
      src="https://res.cloudinary.com/dswpu3qez/image/upload/w_150,c_fill,ar_1:1,g_auto/v1726746781/emails/jean_jacket.jpg"
      alt="jacket" />
    <div>
      <h5 class="gradientHeaders">Art</h5>
      <p>I make clothes and other goods, for sale.</p>
    </div>
    <div class="button-wrapper">
      <RainbowButton
        href="https://www.etsy.com/shop/TheRiverDesign"
        target="_blank"
        text="Merch" />
    </div>
  </div>
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 1fr;
    max-inline-size: calc(var(--size-content-2) * 4);
    gap: var(--size-7);
    padding: var(--size-5);
  }

  p {
    margin-block: var(--size-2);
    max-inline-size: var(--size-content-1);
  }

  .card {
    /* flex-basis: var(--size-content-2); */
    display: grid;
    grid-template-columns: auto 2fr 1fr;
    /* flex-direction: row; */
    gap: var(--size-4);
    background: var(--surface-3);
    border: 1px solid var(--surface-1);
    padding: var(--size-6);
    border-radius: var(--radius-3);
    /* box-shadow: var(--shadow-3); */
  }
  .top-drop-shadow {
    box-shadow: 4px 4px 15px var(--purple-10);
  }
  .middle-drop-shadow {
    box-shadow: 4px 4px 15px var(--stone-10);
  }
  .bottom-drop-shadow {
    box-shadow: 4px 4px 15px var(--cyan-10);
  }

  h5 {
    line-height: var(--font-lineheight-1);
  }

  /* get the last element withing the card class */

  @media (max-width: 768px) {
    .card {
      /* display: grid; */
      grid-template-columns: 1fr 1fr;
      width: var(--size-content-2);
    }
    .button-wrapper {
      grid-column: 1 / -1;
      /* align-self: center; */
      margin: 0 auto;
    }
  }
</style>
