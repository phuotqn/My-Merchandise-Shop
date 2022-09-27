import { configureStore, combineReducers } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import productReducer from '../features/home/homeSlice';
import categoriesReducer from '../features/home/categoriesSlice';
import headerReducer from '../components/headerSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    categories: categoriesReducer,
    search: headerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
