import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Login async thunk
export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('http://localhost:4000/api/auth/login', { email, password });
      localStorage.setItem('user', JSON.stringify(data.user._id)); // Save user to localStorage
      localStorage.setItem('token', data.token); // Save token to localStorage
      console.log(data.user);
      const user = {_id:data.user._id,username:data.user.username,email:data.user.email};
      return user;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Signup async thunk
export const signupUser = createAsyncThunk(
  'auth/signup',
  async ({ email, password, name }, { rejectWithValue }) => {
    try {
      console.log(email, password, name);
      const { data } = await axios.post('/api/auth', { email, password, username:name });
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token);
      console.log(data.user);
      return data.user;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null, // Persist user from localStorage
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user'); // Clear user from localStorage
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
