<script lang="ts">
  import { enhance } from "$app/forms";
  import Seo from "$lib/components/SEO.svelte";
  import { addToast } from "$lib/stores/toast";
  import { LoaderCircle } from "lucide-svelte";
  import CircleAlert from "lucide-svelte/icons/circle-alert";

  const { form } = $props();

  let email = $state("");
  let password = $state("");
  let loading = $state(false);

  const isFormValid = $derived(email.includes("@") && password.length >= 6);
</script>

<Seo
  title="Login - Access Your Account"
  description="Log in to your account to access your profile and settings. Enter your credentials to get started." />

<main data-sveltekit-reload>
  <section class="hero">
    <h1 class="hero-message">
      <div>Login</div>
    </h1>
    <p class="under-hero">Login to book or view appointments</p>

    {#if form?.message}
      <!-- TODO check to ssee if .errorMessage looks better -->
      <p class="error-message"><CircleAlert />{form.message}</p>
    {/if}

    <form
      method="post"
      use:enhance={async () => {
        loading = true;
        return async ({ result, update }) => {
          if (result.status === 302) {
            addToast({
              message: "Logged in!",
              type: "message",
              dismissible: true,
              timeout: 5000,
              iconType: "check",
            });
          }
          else {
            addToast({
              message: "An error occurred",
              type: "message",
              dismissible: true,
              timeout: 5000,
              iconType: "warning",
            });
          }
          loading = false;
          update();
        };
      }}>
      <div class="email-wrapper">
        <label for="email">Email</label>
        <input bind:value={email} type="email" name="email" id="email" required />
      </div>

      <div class="pw-wrapper">
        <label for="password">Password</label>
        <a href="/reset"> Forgot password? </a>
      </div>
      <input bind:value={password} type="password" name="password" id="password" required />

      <div class="button-list">
        <button disabled={!isFormValid || loading} class="primary" type="submit">
          {#if loading}
            <div class="spinner">
              <LoaderCircle />
            </div>
            Loading
          {:else}
            Login
          {/if}
        </button>
        <hr />
        <a href="/signup"> Don't have an account? Sign up here. </a>
      </div>
    </form>
  </section>
</main>

<style>
	@import '../auth.css';

	.under-hero {
		font-size: var(--font-size-1);
	}

	.email-wrapper {
		display: flex;
		flex-direction: column;
		padding-block: var(--size-3);
	}

	.pw-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: var(--font-size-0);
	}

	@media (max-width: 768px) {
		main {
			display: flex;
			flex-direction: column;
		}
	}
</style>
