<script lang="ts">
  import { enhance } from "$app/forms";
  import { addToast } from "$lib/stores/toast";
  import { LoaderCircle } from "lucide-svelte";
  import CircleAlert from "lucide-svelte/icons/circle-alert";

  let { email, password, loading, form } = $props();

  function handleToast(status: number = 400): void {
    const toastConfig = {
      message: "An error occurred",
      iconType: "warning",
    };

    if (status === 200) {
      toastConfig.message = "Logged in!";
      toastConfig.iconType = "check";
    }

    addToast(toastConfig);
  }

  const isFormValid = $derived(email.includes("@") && password.length >= 6);
</script>

<h1 class="hero-message">
  <div>Login</div>
</h1>
<p class="under-hero">Login to book or view appointments</p>

{#if form?.success === false}
  <p class="error-message"><CircleAlert />Invalid email or password</p>
{/if}

<form
  method="post"
  action="?/loginUser"
  use:enhance={async () => {
    loading = true;
    return async ({ result, update }) => {
      handleToast(result.status);
      loading = false;
      update();
    };
  }}>
  <div class="email-wrapper">
    <label for="email">Email</label>
    <input
      bind:value={email}
      type="email"
      name="email"
      id="email"
      required />
  </div>

  <div class="pw-wrapper">
    <label for="password">Password</label>
    <a href="/reset"> Forgot password? </a>
  </div>
  <input
    bind:value={password}
    type="password"
    name="password"
    id="password"
    required />

  <div class="button-list">
    <button
      disabled={!isFormValid || loading}
      class="primary"
      type="submit">
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

<style>
  @import "../auth.css";

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
</style>
