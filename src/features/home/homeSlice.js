import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productApi from '../../services/productApi';

const initialState = {
  product: [],
};

export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async () => {
    const response = await productApi.getAll();
    console.log(response);
    return response;
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllProducts.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getAllProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.product = payload;
      state.isSuccess = true;
    },
    [getAllProducts.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

export default productsSlice.reducer;
