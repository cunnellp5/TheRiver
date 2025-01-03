<script lang="ts">
  import SparkleRainbowButton from "$lib/components/ui/button/sparkle-rainbow-button.svelte";

  const images = [
    {
      src: "https://res.cloudinary.com/dswpu3qez/image/upload/f_auto/q_auto:eco/TheRiver/AlexisWater1_ji0grg.webp",
      alt: "Water model",
    },
    {
      src: "https://res.cloudinary.com/dswpu3qez/image/upload/f_auto/q_auto:eco/TheRiver/alexismodel1_va2axz.webp",
      alt: "fifth element model",
      buttonText: "Merch",
      link: "https://www.etsy.com/shop/MadeByTheRiverBed",
      rel: "noopener",
      target: "_blank",
    },
    {
      src: "https://res.cloudinary.com/dswpu3qez/image/upload/f_auto/q_auto:eco/TheRiver/alexis_blue_h6x97p.webp",
      alt: "holding comb model",
      buttonText: "Book Services",
      link: "https://the-river-sings.square.site/",
      rel: "noopener",
      target: "_blank",
      sparkles: true,
    },
    {
      src: "https://res.cloudinary.com/dswpu3qez/image/upload/f_auto/q_auto:eco/TheRiver/alexisSing_mmyxg6.webp",
      alt: "singing blue background",
      buttonText: "Music",
      link: "/music",
    },
    {
      src: "https://res.cloudinary.com/dswpu3qez/image/upload/f_auto/q_auto:eco/TheRiver/alexisArticle2_iqx8vk.webp",
      alt: "sitting on yellow floor",
    },
  ];
</script>

<section>
  <article class="gallery">
    {#each images as { src, alt, buttonText, link, rel, target, sparkles }, i}
      <div class="image-container">
        <img
          loading="lazy"
          height="605px"
          width="255px"
          {src}
          {alt} />
        {#if buttonText}
          <SparkleRainbowButton
            {buttonText}
            {link}
            {rel}
            {target}
            {sparkles}
            rainbow={true}
            class="overlay-button" />
        {/if}
      </div>
    {/each}
  </article>
</section>

<style lang="postcss">
  img {
    border-radius: 0;
  }
  .image-container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .gallery {
    --n: 3; /* number of rows*/
    --m: 3; /* number of columns */
    --g: 0px; /* control the gap */
    --f: 0.8; /* control the scale factor */
    display: flex;
    /* grid-template-columns: repeat(var(--m), auto); */
    gap: var(--g);
    width: 100%;
    flex-basis: var(--size-content-2);
    height: 100%;
    position: absolute;
  }
  .gallery img {
    /* filter: grayscale(80%); */
    transition: 0.7s linear;
    transition-delay: var(--transition-delay-2);
    transition-timing-function: cubic-bezier(0.14, 0.8, 0.3, 1);
    /* cursor: pointer; */
    min-height: 100%;
    min-width: 100%;
    height: 0;
    width: 0;
    object-fit: cover;
    object-position: 44% 50%;
    /* -webkit-mask: linear-gradient(0deg, transparent 5%, white, white, white); */
    /* mask: linear-gradient(0deg, transparent 5%, white, white, white); */
  }
  /* .gallery img:hover { */
  /* filter: grayscale(0); */
  /* width: calc(100vh * var(--f) / var(--n)); */
  /* height: calc(100vw * var(--f) / var(--m)); */
  /* } */
  /* QUERIES */
  @media (max-width: var(--size-md)) {
    .gallery {
      flex-direction: column;
      grid-template-columns: auto;
      height: 80vh;
    }
    .gallery img {
      grid-column: auto / span 4;
      object-position: center 25%; /* Move the center of the image down */
    }

    .image-container:last-of-type {
      opacity: 0;
    }

    /* .gallery img:hover {
      height: calc(100vw * var(--f) * 4 / var(--m));
    } */
  }
</style>
