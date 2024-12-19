let cartItems = $state<App.CartItem[]>([]);

export function getCart() {
  function addToCart(id: string) {
    const itemPosition = cartItems.findIndex(
      cartItems => cartItems.id === id,
    );
    if (itemPosition === -1) {
      // item is not in the cart at all, so add the object to the cart
      cartItems = [...cartItems, { id, quantity: 1 }];
    }
    else {
      // item is already in the cart, add to the quantity of the item
      cartItems = cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    }
  }

  function removeFromCart(id: string) {
    const itemPosition = cartItems.findIndex(
      cartItems => cartItems.id === id,
    );
    if (cartItems[itemPosition].quantity - 1 === 0) {
      cartItems.splice(itemPosition, 1);
    }
    cartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
  }

  return {
    get cartItems() {
      return cartItems;
    },
    addToCart,
    removeFromCart,
  };
}
