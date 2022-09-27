import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

export const headerSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const { setName } = headerSlice.actions;
export default headerSlice.reducer;
