const initialState = {
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const item = action.payload;

      // Check if the product already exists in the cart
      const existingItem = state.cartItems.find(cartItem => cartItem.id === item.id);

      if (existingItem) {
        // If it exists, update the quantity
        return {
          ...state,
          cartItems: state.cartItems.map(cartItem =>
            cartItem.id === existingItem.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 } // Increase quantity
              : cartItem
          )
        };
      } else {
        // If it doesn't exist, add the new product to the cart
        return {
          ...state,
          cartItems: [...state.cartItems, { ...item, quantity: 1 }]  // Set default quantity to 1
        };
      }
    
    case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload)
        };
    default:
      return state;
  }
};

export default cartReducer;
