export const addItemToCart = (cartItems, cartItemToAdd) => {
  let isExisting = cartItems.find((item) => item.id === cartItemToAdd.id);

  if (isExisting) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
};
