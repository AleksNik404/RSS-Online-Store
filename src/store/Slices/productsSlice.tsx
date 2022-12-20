import { createSlice } from '@reduxjs/toolkit';
import { products } from '../data/data2';

// interface IproductsState {}

const initialState = {
  products,
  filterProducts: products,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
