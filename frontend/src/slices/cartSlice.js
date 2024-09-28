import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchCart, postCart } from '../api';

// Async thunk to handle API call for adding to cart
export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ productId, quantity }, { getState, rejectWithValue }) => {
    try {
      const userId = getState().user?.id; // Assuming you have userId stored
      const { data } = await axios.post('/api/cart', {
        userId,
        productId,
        quantity,
      });

      return data;  // The updated cart data from the backend
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk to fetch all cart items from the API
export const getCartItems = createAsyncThunk(
    'cart/getCartItems',
    async () => {
      try {
        const { data } = await fetchCart();
        console.log(data[0],"cart data");
        return data[0];  // The array of cart items
      } catch (error) {
         console.log(error);
      }
    }
  );

  export const postCartData = createAsyncThunk(
    'cart/postCartData',
    async (data, { rejectWithValue }) => {
      try {
        const res = await postCart({data,quantity:1});
        console.log(res);
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );


const initialState = {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
    loading: false,
    error: null,
  };

  export const cartSlice = createSlice({
    // ...
    name: 'cart',
    initialState,
    reducers: {
      clearCart: (state) => {
        state.cartItems = [];
        localStorage.removeItem('cartItems');
      },
    },
    extraReducers: (builder) => {
      builder.addCase(addToCart.fulfilled, (state, action) => {
        state.cartItems = action.payload;
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      })
      .addCase(getCartItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    },
  });

export const { clearCart } = cartSlice.actions;  // Export your regular reducers
export default cartSlice.reducer;
