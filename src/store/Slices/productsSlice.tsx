import { createSlice } from '@reduxjs/toolkit';
import { products } from '../data/data2';

import { SortDirection } from '../../types';
import { useSearchParams } from 'react-router-dom';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const initialState = {
  products,
  filterProducts: products,
  query: {
    sort: urlParams.get('sort') || '',
    searchField: urlParams.get('searchField') || '',
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    sortItems(state, action) {
      if (action.payload === SortDirection.PRICE_LOWER_TO)
        state.filterProducts.sort((a, b) => a.price - b.price);
      if (action.payload === SortDirection.PRICE_HIGHER_TO)
        state.filterProducts.sort((a, b) => b.price - a.price);
      if (action.payload === SortDirection.NAME_A_TO_Z)
        state.filterProducts.sort((a, b) => a.title.localeCompare(b.title));
      if (action.payload === SortDirection.NAME_Z_TO_A)
        state.filterProducts.sort((a, b) => b.title.localeCompare(a.title));

      state.query.sort = action.payload;
    },

    // updateQuery(state, action) {
    //   const key: keyof typeof state.query = action.payload[0];
    //   state.query[key] = action.payload[1];
    // },
    searchItems(state, action) {
      state.query.searchField = action.payload;

      state.filterProducts = state.products.filter((item) => {
        let isMatch = false;

        if (item.description.includes(action.payload)) isMatch = true;
        if (item.description2.includes(action.payload)) isMatch = true;
        if (item.category.includes(action.payload)) isMatch = true;
        if (item.brand.includes(action.payload)) isMatch = true;
        if (item.title.includes(action.payload)) isMatch = true;
        if (item.price.toString().includes(action.payload)) isMatch = true;
        if (item.stock.toString().includes(action.payload)) isMatch = true;

        return isMatch;
      });
    },
  },
});

export const { sortItems, searchItems } = productsSlice.actions;

export default productsSlice.reducer;
