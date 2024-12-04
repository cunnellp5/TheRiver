<script lang="ts">
  import { page } from "$app/stores";
  import NavButton from "$lib/components/ui/button/nav-button.svelte";

  interface Props {
    isSignedIn: boolean;
    user: any;
  }
  const { isSignedIn, user }: Props = $props();
  const includesAdmin = $derived($page.url.pathname.includes("/admin"));
  const isDashboard = $derived($page.url.pathname === "/dashboard");
</script>

{#if user && user.isAdmin}
  <NavButton
    route="/admin"
    display="Admin"
    active={includesAdmin} />
{/if}
{#if isSignedIn && user}
  <NavButton
    route="/dashboard"
    display="Dashboard"
    active={isDashboard} />
{/if}
