<script lang="ts">
  import { enhance } from "$app/forms";
  import { page } from "$app/stores";
  import { addToast } from "$lib/stores/toast";
  import LoaderCircle from "lucide-svelte/icons/loader-circle";

  let emailInput = $state("");
  let showError = $state(false);
  let errorMessage = $state("");
  let loading = $state(false);

  function formSuccess() {
    showError = false;
    addToast({
      message: "Subscribed to newsletter",
      type: "message",
      iconType: "check",
      dismissible: true,
      timeout: 20000,
    });
  }

  const disabled = $derived(emailInput.length === 0);
</script>

<form
  class="fullRow"
  method="POST"
  action="api/newsLetter?/subscribe"
  use:enhance={() => {
    loading = true;
    return async ({ result, update }) => {
      if (result.status === 200) {
        formSuccess();
      } else {
        showError = true;
        errorMessage = result?.data?.message || "An error occurred";
      }
      update();
      loading = false;
    };
  }}>
  {#if !$page.url.pathname.includes("/unsubscribe/")}
    <h2 class="listHeader gradientHeaders descriptionHeader">Subscribe</h2>
    <div class="newsletter-form breaker">
      <div class="buttonWrapper">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          bind:value={emailInput} />
        {#if loading}
          <button disabled>
            <div class="spinner">
              <LoaderCircle size={14} />
            </div>
            Loading
          </button>
        {:else}
          <button
            class:disabled
            class="secondary"
            type="submit"
            {disabled}>
            Subscribe
          </button>
        {/if}
      </div>
      <label
        for="email"
        class="newsletter-form__email-label">
        Unsubscribe at any time
      </label>
      {#if showError}
        <span class="errorMessage">{errorMessage}</span>
      {/if}
    </div>
  {/if}
</form>

<style>
  /* ELEMENTS */
  form {
    background-image: radial-gradient(
      ellipse at center center,
      hsla(330, 80%, 35%, 0.109),
      transparent 75%
    );
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-block: var(--size-10);
    /* background-image: radial-gradient(
      ellipse at center center,
      hsla(330, 80%, 35%, 0.109),
      transparent 75%
    ); */
  }
  input {
    padding: var(--size-3);
    width: var(--size-14);
    color: var(--grey-6);
  }
  label {
    align-self: end;
    color: var(--gray-8);
    font-size: var(--font-size-0);
  }
  /* CLASSES */
  .listHeader {
    color: var(--brand);
    text-transform: capitalize;
  }
  .newsletter-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--size-3);
    margin-block: var(--size-4);
  }
  .buttonWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--size-3);
  }
  .disabled {
    opacity: 0.1;
  }
  .fullRow {
    grid-column-start: 1;
    grid-column-end: 6;
    margin-block-start: var(--size-5);
  }
</style>
