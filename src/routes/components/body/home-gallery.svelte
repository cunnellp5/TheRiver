<script lang="ts">
  const images = [
    {
      src: "https://res.cloudinary.com/dswpu3qez/image/upload/f_auto/q_auto:eco/TheRiver/alexismodel1_va2axz.webp",
      alt: "fifth element model",
    },
    {
      src: "https://res.cloudinary.com/dswpu3qez/image/upload/f_auto/q_auto:eco/TheRiver/AlexisWater1_ji0grg.webp",
      alt: "Water model",
    },
    {
      src: "https://res.cloudinary.com/dswpu3qez/image/upload/f_auto/q_auto:eco/TheRiver/alexis_blue_h6x97p.webp",
      alt: "holding comb model",
    },
    {
      src: "https://res.cloudinary.com/dswpu3qez/image/upload/f_auto/q_auto:eco/TheRiver/alexisArticle2_iqx8vk.webp",
      alt: "sitting on yellow floor",
    },
    {
      src: "https://res.cloudinary.com/dswpu3qez/image/upload/f_auto/q_auto:eco/TheRiver/alexisSing_mmyxg6.webp",
      alt: "singing blue background",
    },
  ];
</script>

<main>
  <article class="gallery">
    {#each images as { src, alt }, i}
      <img
        loading="lazy"
        height="604.7px"
        width="254.6px"
        style="--i: {i}"
        {src}
        {alt} />
    {/each}
  </article>
</main>

<style>
  /* ELEMENTS */
  main {
    display: grid;
    place-items: center;
    margin: 0;
    /* min-height: 100vh; */
    height: 100%;
  }
  img {
    border-radius: 0;
  }
  /* CLASSES */
  .gallery {
    --n: 1; /* number of rows*/
    --m: 5; /* number of columns */
    --g: 0px; /* control the gap */
    --f: 0.8; /* control the scale factor */
    display: grid;
    grid-template-columns: repeat(var(--m), auto);
    gap: var(--g);
    width: 100%;
    /* height: 80vh; */
    height: var(--size-content-3);
  }
  .gallery img {
    filter: grayscale(80%);
    transition: 0.7s linear;
    transition-delay: var(--transition-delay-2);
    transition-timing-function: cubic-bezier(0.14, 0.8, 0.3, 1);
    cursor: pointer;
    width: 0;
    min-width: 100%;
    height: 0;
    min-height: 100%;
    object-fit: cover;
    animation: grayscaleAnimation 8s infinite;
    /* Apply increasing delays to each image */
    animation-delay: calc(var(--i) * 1.5s);
  }
  .gallery img:hover {
    filter: grayscale(0);
    /* width: calc(100vh * var(--f) / var(--n)); */
    /* height: calc(100vw * var(--f) / var(--m)); */
  }
  /* QUERIES */
  @media (max-width: 768px) {
    .gallery {
      grid-template-columns: auto;
      height: 100%;
    }
    .gallery img {
      grid-column: auto / span 4;
      object-position: center 25%; /* Move the center of the image down */
    }
    /* .gallery img:hover {
      height: calc(100vw * var(--f) * 4 / var(--m));
    } */
  }

  @keyframes grayscaleAnimation {
    0% {
      filter: grayscale(100%);
    }
    50% {
      filter: grayscale(0%);
      /* width: calc(100vh * var(--f) / var(--n)); */
      /* height: calc(100vw * var(--f) / var(--m)); */
    }
    100% {
      filter: grayscale(100%);
    }
  }
</style>
