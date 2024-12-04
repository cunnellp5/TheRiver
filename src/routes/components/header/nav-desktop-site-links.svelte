<script lang="ts">
  import { page } from "$app/stores";
  import NavButton from "$lib/components/ui/button/nav-button.svelte";

  interface Props {
    showingSheet: boolean;
  }

  const { showingSheet = false }: Props = $props();
  const includesBlog = $derived($page.url.pathname.includes("/blog"));
  const includesService = $derived($page.url.pathname.includes("/services"));
  const includesMusic = $derived($page.url.pathname.includes("/music"));
  const isContact = $derived($page.url.pathname === "/contact");
  const isShop = $derived($page.url.pathname === "/shop");
</script>

<NavButton
  route="/music"
  display="Music"
  active={includesMusic} />
<NavButton
  route="/services"
  display="services"
  active={includesService} />
<li
  class:current={isShop}
  aria-current={isShop}>
  <a
    href="https://www.etsy.com/shop/TheRiverDesign"
    target="_blank"
    rel="noopener">
    Merch
  </a>
</li>
<li
  class:border-left={!showingSheet}
  class:borderBottom={showingSheet}>
</li>
<NavButton
  route="/blog"
  display="Blog"
  active={includesBlog} />
<NavButton
  route="/contact"
  display="Contact"
  active={isContact} />

<style>
  /* ELEMENTS */
  a {
    color: var(--text-2);
    display: inline-block;
    font-size: var(--font-size-0);
    font-weight: var(--font-weight-7);
    height: 100%;
    letter-spacing: var(--font-letterspacing-2);
    padding-block: var(--size-1);
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.3s ease;
  }
  /* CLASSES */
  /* VERTICLE */
  a:before {
    position: absolute;
    top: -25%;
    right: 0;
    bottom: -25%;
    left: 0;
    opacity: 0;
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;
    border-top: 1px solid var(--link);
    border-bottom: 1px solid var(--link);
    content: "";
  }
  a:hover,
  .current a {
    color: var(--text-1);
  }

  a:hover:before,
  .current a:before {
    top: 0;
    bottom: 0;
    opacity: 1;
  }
  .border-left {
    border-left: 1px solid var(--border);
    height: var(--size-5);
  }
  /* MOBILE SHEET CLASSES */
  .borderBottom {
    border-bottom: 1px solid var(--border);
    width: 35%;
  }
</style>
