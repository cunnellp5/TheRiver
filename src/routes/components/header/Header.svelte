<script lang="ts">
  import NavDesktop from "./nav-desktop.svelte";
  import NavMobile from "./nav-mobile.svelte";
  import NavSheet from "./nav-sheet.svelte";

  interface Props {
    isSignedIn?: boolean;
    user: any;
  }

  const { isSignedIn = false, user }: Props = $props();

  let showSheet = $state(false);
</script>

<!--
 NavSheet shows the NavDesktop links in a modified modal for mobile devices
 NavMobile just shows the hamburger icon for mobile devices
-->
<section class="app-layout">
  <NavSheet
    {user}
    {isSignedIn}
    show={showSheet}
    on:handleClose={() => (showSheet = false)} />

  <nav class="nav-desktop">
    <NavDesktop
      {user}
      {isSignedIn}></NavDesktop>
  </nav>

  <nav class="nav-mobile">
    <NavMobile on:openSheet={() => (showSheet = true)}></NavMobile>
  </nav>
</section>

<style>
  /* ELEMENTS */
  nav {
    align-items: center;
    padding-block: var(--size-2);
  }
  /* CLASSES */
  .nav-desktop {
    display: none;
  }
  .nav-mobile {
    display: flex;
    justify-content: space-between;
  }
  /* QUERIES */
  @media (min-width: 768px) {
    nav {
      justify-content: space-between;
    }
    .nav-desktop {
      display: flex;
    }
    .nav-mobile {
      display: none;
    }
  }
</style>
