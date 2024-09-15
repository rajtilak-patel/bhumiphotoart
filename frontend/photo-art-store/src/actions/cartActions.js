// Action to add an item to the cart
import axios from 'axios';  // Axios for API calls

export const addToCart = (productId, quantity = 1) => async (dispatch, getState) => {
  try {
    
    // Get the user's ID (if you're storing it in the Redux state)
    const userId = getState().user?.id;

    // API call to the backend to add the product to the cart
    const { data } = await axios.post('/api/cart', {
      userId,        // Assuming you have the user's ID in the state
      productId,     // The product being added
      quantity       // Quantity of the product to be added
    });

    // Dispatch the action to update the cart in Redux
    dispatch({
      type: 'ADD_TO_CART_SUCCESS',
      payload: data // The updated cart returned from the API
    });

    // Optionally save the updated cart to localStorage
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  } catch (error) {
    // Handle errors (e.g., show a notification)
    dispatch({
      type: 'ADD_TO_CART_FAIL',
      payload: error.message
    });
  }
};
  // Action to remove an item from the cart
  export const removeFromCart = (id) => (dispatch, getState) => {
    console.log(id,"Product id");
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: id
    });
  
    // Optionally update localStorage or make an API call here
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };

  // get cart item
  export const getCartItems = () => (dispatch) => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    dispatch({
      type: 'GET_CART_ITEMS_SUCCESS',
      payload: cartItems
    });
  }; 
  