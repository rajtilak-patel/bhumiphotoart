// Action to add an item to the cart
export const addToCart = (item) => (dispatch, getState) => {
  console.log(item, "Product");
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: item._id,
        name: item.name,
        imageUrl: item.imageUrl,
        price: item.price,
        quantity: item.quantity || 1
      }
    });
  
    // Optionally store the cart in localStorage or make an API call here
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
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
  