<script lang="ts">
  import { enhance } from "$app/forms";
  import { page } from "$app/stores";
  import { addToast } from "$lib/stores/toast";

  interface Props {
    isSignedIn: boolean;
    showingSheet: boolean;
  }

  const { isSignedIn, showingSheet }: Props = $props();

  // $: isHomePage = $page.url.pathname === "/";
  const isLogin = $derived($page.url.pathname === "/login");
  const isLogout = $derived($page.url.pathname === "/logout");
  const isSignup = $derived($page.url.pathname === "/signup");
</script>

<li
  class:border-left={!showingSheet}
  class:borderBottom={showingSheet}>
</li>
{#if isSignedIn}
  <form
    class="logout-wrapper"
    id="logoutForm"
    method="POST"
    action="/logout"
    use:enhance={async () => {
      return async ({ result, update }) => {
        if (result.status === 302) {
          update();
          addToast({
            message: `Logged out.`,
            type: "message",
            iconType: "check",
            dismissible: true,
            timeout: 5000,
          });
        } else {
          update();
        }
      };
    }}>
    <li class:current={isLogout}>
      <button
        class="logout-button"
        type="submit">Logout</button>
    </li>
  </form>
{:else}
  <li
    class:current={isSignup}
    class="signup">
    <a href="/signup"> Sign up </a>
  </li>
  <li class:current={isLogin}>
    <a href="/login"> Login </a>
  </li>
{/if}

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
  /* CLASSES */
  .logout-button {
    box-shadow: none;
    font-size: var(--font-size-0);
    text-transform: uppercase;
  }
  * {
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  a,
  .logout-button {
    display: inline-block;
    position: relative;
    padding-block: var(--size-1);
    color: var(--text-2);
    font-weight: var(--font-weight-7);
    text-decoration: none;
  }
  a:before,
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

  .logout-wrapper .logout-button:hover,
  a:hover,
  .current a {
    color: var(--text-1);
  }

  .logout-wrapper .logout-button:hover:before,
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
  .logout-button {
    background: inherit;
    padding: 0;
  }
  .signup > a {
    color: var(--link);
  }
  .borderBottom {
    border-bottom: 1px solid var(--border);
    width: 35%;
  }
</style>
