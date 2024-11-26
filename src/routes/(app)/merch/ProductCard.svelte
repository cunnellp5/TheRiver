<script lang="ts">
	import * as GenericCard from '$lib/components/ui/shadcn/card';
	import { getCart } from './cart.svelte.ts';

	let { product }: { product: App.Product } = $props();

	let cart = getCart();
	let items = $derived(cart.cartItems);
	let cartItemIndex = $derived(items.findIndex((item: App.CartItem) => item.id === product.id));
	let cartProduct = $derived(items[cartItemIndex]);
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
