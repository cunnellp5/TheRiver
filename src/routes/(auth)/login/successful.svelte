<script lang="ts">
</script>

<h1 class="hero-message">
  <div>Welcome back!</div>
</h1>
<p class="under-hero">Successfully logged in</p>

<style lang="postcss">
  @import "../auth.css";

  .under-hero {
    font-size: var(--font-size-1);
  }

  @media (max-width: 768px) {
    main {
      display: flex;
      flex-direction: column;
    }
  }
</style>
