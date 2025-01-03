<script lang="ts">
  import Seo from "$lib/components/seo.svelte";
  import LoginForm from "./login-form.svelte";
  import Successful from "./successful.svelte";

  const { form } = $props();

  const email = $state("");
  const password = $state("");
  const loading = $state(false);
</script>

<Seo
  title="Login - Access Your Account"
  description="Log in to your account to access your profile and settings. Enter your credentials to get started." />

<main data-sveltekit-reload>
  <section class="hero">
    {#if form?.success}
      <Successful />
    {:else}
      <LoginForm
        {form}
        {email}
        {password}
        {loading} />
    {/if}
  </section>
</main>

<style lang="postcss">
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .hero {
    display: grid;
    gap: var(--size-1);
    padding-block: var(--size-content-1);
  }
</style>
