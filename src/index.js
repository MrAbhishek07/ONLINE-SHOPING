import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { combineReducers, configureStore, createReducer, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from "react-redux";

import productsReducer, { productFetch } from "./features/productsSlice"
import { productsApi } from './features/productsApi';
import cartReducer, { getTotals } from './features/cartSlice'
import authReducer  from "./features/authSlice"

const rootReducer = combineReducers({
  auth: authReducer,
})

const store = configureStore({
  reducer:{
    reducer : rootReducer,
    products : productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath] : productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware().concat(productsApi.middleware)
  
});

store.dispatch(productFetch());
store.dispatch(getTotals());



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <App />

  </Provider>
  </React.StrictMode>
);
