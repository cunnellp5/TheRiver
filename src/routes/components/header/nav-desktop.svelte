<script lang="ts">
  import LogoR from "$lib/components/svgs/logos/logo-r2.svelte";
  import TheRiver from "$lib/components/svgs/logos/the-river.svelte";
  import ToggleTheme from "$lib/components/ui/toggle-theme.svelte";
  import NavDesktopAuthLinks from "./nav-desktop-auth-links.svelte";
  import NavDesktopSiteLinks from "./nav-desktop-site-links.svelte";
  // import NavDesktopUserLinks from "./nav-desktop-user-links.svelte";

  interface Props {
    showingSheet?: boolean;
    isSignedIn: boolean;
    user: any;
  }

  const { showingSheet = false, isSignedIn, user }: Props = $props();
</script>

<div class:showingSheet>
  <a
    class:bigLogo={showingSheet}
    class:defaultLogo={!showingSheet}
    href="/"
    aria-label="Home button logo img">
    {#if showingSheet}
      <div id="bigLogo">
        <TheRiver />
      </div>
    {:else}
      <LogoR />
    {/if}
  </a>
  <ul
    class="links"
    class:showingSheet
    class:showingSheetTopSeparator={showingSheet}>
    <li></li>
    <NavDesktopAuthLinks
      {isSignedIn}
      {user} />
  </ul>
</div>
<ul
  class="links"
  class:showingSheet>
  {#if showingSheet}
    <li class:borderBottom={showingSheet}></li>
  {/if}

  <NavDesktopSiteLinks {showingSheet} />

  <!-- <NavDesktopUserLinks
    {isSignedIn}
    {showingSheet} /> -->

  <li
    class:border-left={!showingSheet}
    class:borderBottom={showingSheet}>
  </li>
  <ToggleTheme />
</ul>

<style>
  /* ELEMENTS */
  a {
    transition: color 0.3s ease;
    height: 100%;
    color: var(--text-2);
    font-weight: var(--font-weight-5);
    font-size: var(--font-size-0);
    letter-spacing: var(--font-letterspacing-2);
    text-decoration: none;
    text-transform: uppercase;
  }
  a.defaultLogo {
    display: flex;
    width: var(--size-8);
  }
  a.bigLogo {
    width: var(--size-12);
  }
  div {
    display: flex;
    align-items: center;
  }
  /* CLASSES */
  .links * {
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .border-left {
    border-left: 1px solid var(--border);
    height: var(--size-5);
  }
  /* MOBILE SHEET CLASSES */
  .showingSheet {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--size-5);
    & a,
    button {
      font-size: var(--font-size-2);
    }
  }
  .showingSheetTopSeparator {
    margin-bottom: var(--size-5);
  }
  .borderBottom {
    border-bottom: 1px solid var(--border);
    width: 35%;
  }
  /* QUERIES */
  @media (min-width: 768px) {
    .links {
      display: flex;
      align-items: center;
      gap: var(--size-5);
    }
  }
</style>
