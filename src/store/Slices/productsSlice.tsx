import { createSlice } from '@reduxjs/toolkit';
import { products } from '../data/data';

// interface IproductsState {}

const initialState = {
  products,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
