'use client'
import {   combineReducers } from 'redux';



import { cartReducer } from './reducers/cartReducer';

import { configureStore } from '@reduxjs/toolkit';
import { getProductDetailsReducer } from './reducers/productReducer';





const store = configureStore(
    {
      reducer:{
        cart:cartReducer,
        getProductDetails: getProductDetailsReducer
      }
    }
    
);

export default store;