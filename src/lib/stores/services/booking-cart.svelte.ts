const cartItems = $state<App.ServiceItem[]>([]);
let cartTotals = $state<{ price: number; duration: number; quantity: number }>({
  price: 0,
  duration: 0,
  quantity: 0,
});

export function serviceCart() {
  function addToCart(serviceItem: App.ServiceItem) {
    const { id } = serviceItem;
    const itemPosition = cartItems.findIndex(
      cartItems => cartItems.id === id,
    );
    if (itemPosition === -1) {
      // item is not in the cart at all, so add the object to the cart
      cartItems.push(serviceItem);
    }
    else {
      // item is already in the cart, do i need to do anything?
    }
    calcTotal();
  }

  function removeFromCart(id: string) {
    const itemPosition = cartItems.findIndex(
      cartItems => cartItems.id === id,
    );
    cartItems.splice(itemPosition, 1);
    calcTotal();
  }

  function calcTotal() {
    const { price, duration, quantity } = cartItems.reduce(
      (acc, item) => {
        acc.price += item.price;
        acc.duration += item.duration;
        acc.quantity += 1;
        return acc;
      },
      { price: 0, duration: 0, quantity: 0 },
    );
    cartTotals = { price, duration, quantity };
  }

  return {
    get cartItems() {
      return cartItems;
    },
    get cartTotals() {
      return cartTotals;
    },
    addToCart,
    removeFromCart,
    calcTotal,
  };
}
