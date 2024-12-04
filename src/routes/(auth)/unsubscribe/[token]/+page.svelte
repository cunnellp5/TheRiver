<script lang="ts">
  import type { LayoutData } from "./$types";
  import { enhance } from "$app/forms";
  import { addToast } from "$lib/stores/toast";
  import { LoaderCircle } from "lucide-svelte";

  // const { newsLetter } = $props();
  const { data }: { data: LayoutData } = $props();

  let emailInput = $state(data.newsLetter.email);
  let loading = $state(false);
  let errorMessage = $state("");
  let tokenInput = $state(data.newsLetter.token);

  const disabled = $derived(emailInput.length === 0);
</script>

<section class="app-layout">
  <section class="breaker">
    <h1>Un&#8203;sub&#8203;scribe</h1>
    <p>Enter email to unsubscribe from the newsletter</p>
  </section>

  <form
    method="POST"
    class="column"
    use:enhance={async ({}) => {
      loading = true;
      return async ({ result, update }) => {
        if (result.status === 302) {
          addToast({
            message: "Unsubscribed",
            type: "message",
            iconType: "warning",
            dismissible: true,
            timeout: 5000,
          });
        }
        else {
          errorMessage = result?.data?.message || "An error occurred";
        }
        update();
        loading = false;
      };
    }}>
    <div class="column">
      <!-- <label for="email">Email</label> -->
      <input
        bind:value={emailInput}
        type="email"
        name="email"
        id="email"
        placeholder="Enter email"
        required />
      <input bind:value={tokenInput} type="hidden" name="token" id="token" required />
      {#if errorMessage}
        <span class="errorMessage">errorMessage</span>
      {/if}
    </div>
    {#if loading}
      <button disabled={loading}>
        <div class="spinner">
          <LoaderCircle />
        </div>
        Loading
      </button>
    {:else}
      <button class="delete-button" type="submit" {disabled}>Un&#8203;sub&#8203;scribe</button>
    {/if}
  </form>
</section>

<style>
	h1 {
		margin-block-end: var(--size-2);
		font-size: var(--font-size-7);
		text-transform: uppercase;
	}
	p {
		color: var(--text-2);
	}
	form {
		gap: var(--size-4);
		/* min-width: var(--size-content-1); */
	}
	label {
		margin-bottom: var(--size-1);
		color: var(--text-2);
		font-size: var(--font-size-0);
	}
	section {
		margin-block: var(--size-9);
		max-width: var(--size-content-2);
	}
	.column {
		display: flex;
		flex-direction: column;
	}
	@media (max-width: 768px) {
		h1 {
			font-size: var(--font-size-5);
		}
		p {
			font-size: var(--font-size-1);
		}
	}
</style>
