<script lang="ts">
  import type { PageData } from "./$types";
  import { onNavigate } from "$app/navigation";
  import Toasts from "$lib/components/ui/toasts.svelte";
  // import Footer from "./components/footer/footer.svelte";
  // import Header from "./components/header/header.svelte";
  // import VanishingHeader from "./components/header/vanishing-header.svelte";
  import "open-props/buttons";
  import "open-props/colors-hsl";
  import "open-props/masks/edges";
  import "open-props/normalize";
  import "open-props/style";
  import "../styles/app.css";

  interface Props {
    data: PageData;
    children?: import("svelte").Snippet;
  }

  const {
    // data,
    children,
  }: Props = $props();

  // Use view transitions if available
  onNavigate(navigation => {
    if (!document.startViewTransition) return;

    return new Promise(resolve => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<Toasts />

<div>
  <!-- <VanishingHeader>
    <Header
      isSignedIn={data.isSignedIn}
      user={data.user} />
  </VanishingHeader> -->

  {@render children?.()}

  <!-- <Footer /> -->
</div>
