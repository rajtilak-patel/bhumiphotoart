const initialState = {
  cartItems: [],  // Cart items array
  loading: false,
  error: null
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART_REQUEST':
      return { ...state, loading: true };
      
    case 'ADD_TO_CART_SUCCESS':
      return { ...state, loading: false, cartItems: action.payload };

    case 'ADD_TO_CART_FAIL':
      return { ...state, loading: false, error: action.payload };
    
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
