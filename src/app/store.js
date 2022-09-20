import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productReducer from '../features/home/homeSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
