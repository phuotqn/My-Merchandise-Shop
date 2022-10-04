import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from '../features/Login/LoginSlice';
import productReducer from '../features/home/homeSlice';
import categoriesReducer from '../features/home/categoriesSlice';
import headerReducer from '../components/headerSlice';
import cartReducer from '../features/cart/CartSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    product: productReducer,
    categories: categoriesReducer,
    search: headerReducer,
    user: userReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
