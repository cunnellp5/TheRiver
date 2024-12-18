<script lang="ts">
  import * as GenericCard from "$lib/components/ui/card/index.ts";
  import { getCart } from "./cart.svelte.ts";

  const { product }: { product: App.Product } = $props();

  const cart = getCart();
  const items = $derived(cart.cartItems);
  const cartItemIndex = $derived(items.findIndex((item: App.CartItem) => item.id === product.id));
  const cartProduct = $derived(items[cartItemIndex]);
</script>

<GenericCard.Root>
  <GenericCard.Header>
    <GenericCard.Title class="noPad">{product.name}</GenericCard.Title>
  </GenericCard.Header>
  <GenericCard.Content>
    <p>
      Quantity: <strong>{cartProduct?.quantity ? cartProduct.quantity : 0}</strong>
    </p>
    <p>Price ${product.price}</p>
  </GenericCard.Content>
  <GenericCard.Content>
    <button onclick={() => cart.addToCart(product.id)}>Add</button>
    <button onclick={() => cart.removeFromCart(product.id)}>Remove</button>
  </GenericCard.Content>
</GenericCard.Root>
