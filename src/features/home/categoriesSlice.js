import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productApi from '../../services/productApi';

const initialState = {
  categories: [],
};

export const getAllCategories = createAsyncThunk(
  'categories/getCategories',
  async () => {
    const data = await productApi.getCategories();
    return data;
    console.log(data);
  }
);

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllCategories.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getAllCategories.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.categories = payload;
      state.isSuccess = true;
    },
    [getAllCategories.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

export default categoriesSlice.reducer;
