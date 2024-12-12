<script lang="ts">
  import RainbowButton from "$lib/components/atoms/rainbow-button.svelte";
</script>

<main>
  <div class="card">
    <img
      src="https://res.cloudinary.com/dswpu3qez/image/upload/w_400,c_fill,ar_1:1,g_auto/v1724875596/TheRiver/alexisArticle3_tl91an.webp"
      alt="music card" />
    <h5 class="gradientHeaders">Music</h5>
    <p>I sing! Checkout my latest tracks.</p>
    <RainbowButton
      href="/music"
      target="_self"
      text="Listen" />
  </div>
  <div class="card">
    <img
      src="https://res.cloudinary.com/dswpu3qez/image/upload/w_400,c_fill,ar_1:1,g_auto/v1733954083/nails1_s7lmgd.jpg"
      alt="nails card" />
    <h5 class="gradientHeaders">Services</h5>
    <p>I do hair and nails.</p>
    <RainbowButton
      href="https://the-river-sings.square.site/"
      target="_blank"
      text="Book now" />
  </div>
  <div class="card">
    <img
      class="card-img"
      src="https://res.cloudinary.com/dswpu3qez/image/upload/w_400,c_fill,ar_1:1,g_auto/v1726746781/emails/jean_jacket.jpg"
      alt="jacket" />
    <h5 class="gradientHeaders">Art</h5>
    <p>I make clothes and other goods, for sale.</p>
    <RainbowButton
      href="https://www.etsy.com/shop/TheRiverDesign"
      target="_blank"
      text="Get some" />
  </div>
</main>

<style>
  main {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: space-evenly;
    max-inline-size: calc(var(--size-content-2) * 4);
    gap: var(--size-4);
    padding: var(--size-5);
  }

  .card {
    flex-basis: var(--size-content-2);
    display: flex;
    flex-direction: column;
    gap: var(--size-2);
    background: var(--surface-3);
    border: 1px solid var(--surface-1);
    padding: var(--size-6);
    border-radius: var(--radius-3);
    box-shadow: var(--shadow-2);
  }

  .card > h5 {
    line-height: var(--font-lineheight-1);
  }

  /* get the last element withing the card class */
  .card > :last-child {
    align-self: center;
  }
</style>
