<script lang="ts">
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import LogoR from "$lib/components/svgs/logos/LogoR2.svelte";
  import NavButton from "$lib/components/ui/button/nav-button.svelte";
  import ToggleTheme from "$lib/components/ui/toggle-theme.svelte";
  import { onMount } from "svelte";

  interface Props {
    showingSheet?: boolean;
    isSignedIn: boolean;
    user: any;
  }

  const { showingSheet = false, isSignedIn, user }: Props = $props();

  let showAuthLinks = false;
  let visible = false;

  if (browser) {
    window.addEventListener("click", () => {
      if (showAuthLinks === true) {
        showAuthLinks = false;
      }
    });
  }

  onMount(() => {
    visible = true;
  });

  const includesAdmin = $derived($page.url.pathname.includes("/admin"));
  const includesBlog = $derived($page.url.pathname.includes("/blog"));
  const includesService = $derived($page.url.pathname.includes("/services"));
  const includesMusic = $derived($page.url.pathname.includes("/music"));

  const isContact = $derived($page.url.pathname === "/contact");
  const isDashboard = $derived($page.url.pathname === "/dashboard");
  // $: isHomePage = $page.url.pathname === '/';
  // let isLogin = $derived($page.url.pathname === '/login');
  // let isLogout = $derived($page.url.pathname === '/logout');
  const isShop = $derived($page.url.pathname === "/shop");
  // let isSignup = $derived($page.url.pathname === '/signup');
</script>

<div class:showingSheet>
  <a
    class="logo-link"
    href="/"
    aria-label="Home button logo img">
    <LogoR />
  </a>
  <ul
    class="links"
    class:showingSheet
    class:showingSheetTopSeparator={showingSheet}>
    <li></li>
    {#if user && user.isAdmin}
      <!-- <li class:current={includesAdmin} aria-current={includesAdmin}>
				<a href="/admin"> Admin </a>
			</li> -->
      <NavButton
        route="/admin"
        display="Admin"
        active={includesAdmin} />
    {/if}
    {#if isSignedIn && user}
      <!-- <li class:current={isDashboard} aria-current={isDashboard}>
				<a href="/dashboard"> Dashboard </a>
			</li> -->
      <NavButton
        route="/dashboard"
        display="Dashboard"
        active={isDashboard} />
    {/if}
  </ul>
</div>
<ul
  class="links"
  class:showingSheet>
  {#if showingSheet}
    <li class:borderBottom={showingSheet}></li>
  {/if}
  <!-- <li class:current={includesMusic} aria-current={includesMusic}>
		<a href="/music"> Music </a>
	</li> -->
  <NavButton
    route="/music"
    display="Music"
    active={includesMusic} />

  <!-- <li class:current={includesService} aria-current={includesService}>
		<a href="/services"> services </a>
	</li> -->
  <NavButton
    route="/services"
    display="services"
    active={includesService} />

  <li
    class:current={isShop}
    aria-current={isShop}>
    <!-- <a href="/merch" rel="noopener"> Merch </a> -->
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

  <!-- <li class:current={includesBlog} aria-current={includesBlog}>
		<a href="/blog"> Blog </a>
	</li> -->
  <NavButton
    route="/blog"
    display="Blog"
    active={includesBlog} />
  <!-- <li class:current={isContact} aria-current={isContact}>
		<a href="/contact"> Contact </a>
	</li> -->
  <NavButton
    route="/contact"
    display="Contact"
    active={isContact} />

  <!-- <li class:border-left={!showingSheet} class:borderBottom={showingSheet}></li>
	{#if isSignedIn}
		<form
			class="logout-wrapper"
			id="logoutForm"
			method="POST"
			action="/logout"
			use:enhance={async ({ formElement, formData, action, cancel, submitter }) => {
				return async ({ result, update }) => {
					if (result.status === 302) {
						update();
						addToast({
							message: `Logged out.`,
							type: 'message',
							iconType: 'check',
							dismissible: true,
							timeout: 5000
						});
					} else {
						update();
					}
				};
			}}>
			<li class:current={isLogout}>
				<button class="logout-button" type="submit">Logout</button>
			</li>
		</form>
	{:else}
		<li class:current={isSignup} class="signup">
			<a href="/signup"> Sign up </a>
		</li>
		<li class:current={isLogin}>
			<a href="/login"> Login </a>
		</li>
	{/if}
	<li class:border-left={!showingSheet} class:borderBottom={showingSheet}></li> -->
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
  a.logo-link {
    display: flex;
    width: var(--size-8);
  }
  div {
    display: flex;
    align-items: center;
  }
  /* CLASSES */
  .logout-button {
    box-shadow: none;
    font-size: var(--font-size-0);
    text-transform: uppercase;
  }
  .links {
    & * {
      -webkit-transition: all 0.35s ease;
      transition: all 0.35s ease;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
    & a,
    .logout-button {
      display: inline-block;
      position: relative;
      padding-block: var(--size-1);
      color: var(--text-2);
      font-weight: var(--font-weight-7);
      text-decoration: none;
    }
    & a:before,
    .logout-button:before {
      position: absolute;
      top: 25%;
      right: 0;
      bottom: 25%;
      left: 0;
      opacity: 0;
      -webkit-transition: all 0.35s ease;
      transition: all 0.35s ease;
      border-top: 1px solid var(--link);
      border-bottom: 1px solid var(--link);
      content: "";
    }
  }
  .logout-wrapper .logout-button:hover,
  .links a:hover,
  .links .current a,
  .links-horz a:hover .links-horz .current a {
    color: var(--text-1);
  }

  .logout-wrapper .logout-button:hover:before,
  .links a:hover:before,
  .links .current a:before {
    top: 0;
    bottom: 0;
    opacity: 1;
  }
  .border-left {
    border-left: 1px solid var(--border);
    height: var(--size-5);
  }
  .logout-button {
    background: inherit;
    padding: 0;
  }
  .signup > a {
    color: var(--link);
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
