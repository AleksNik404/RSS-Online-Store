import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { products } from '../data/data2';

import { SortDirection } from '../../types';
import { useParams, useSearchParams } from 'react-router-dom';
import { ProductType } from '../data/data2';

type UPDATE_SORT_TYPE = string;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// interface IProducts {
//   products: product[];
//   filterProducts: product[];
//   minMaxPrice: { min: null | number; max: null | number };
//   minMaxStock: { min: null | number; max: null | number };
//   query: { [key: string]: string };
// }

const initialState = {
  products,
  filterProducts: products,

  minMaxPrice: { min: 0, max: 1 },
  minMaxStock: { min: 0, max: 1 },

  minMaxFiltPrice: { min: 0, max: 1 },
  minMaxFiltStock: { min: 0, max: 1 },

  query: {
    sort: urlParams.get('sort') || 'Sort options',
    minMaxPrice: urlParams.get('minMaxPrice') || '',
    minMaxStock: urlParams.get('minMaxStock') || '',
    textField: urlParams.get('textField') || '',
    brands: urlParams.get('brands') || '',
    categories: urlParams.get('categories') || '',
    isBigGrid: Boolean(urlParams.get('isBigGrid')) || '',
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    sortItems(state, action) {
      if (action.payload === SortDirection.PRICE_LOWER_TO) state.filterProducts.sort((a, b) => a.price - b.price);
      if (action.payload === SortDirection.PRICE_HIGHER_TO) state.filterProducts.sort((a, b) => b.price - a.price);
      if (action.payload === SortDirection.NAME_A_TO_Z)
        state.filterProducts.sort((a, b) => a.title.localeCompare(b.title));
      if (action.payload === SortDirection.NAME_Z_TO_A)
        state.filterProducts.sort((a, b) => b.title.localeCompare(a.title));
    },

    searchItems(state, action) {
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

    // FIXME: 2 функции делают одно и тоже с разными стейтами / Infinity ужасно наверно
    updateMinMaxPrice(state) {
      state.minMaxPrice = state.products.reduce(
        (minMax, product) => {
          const min = Math.trunc(Math.min(minMax.min, product.price));
          const max = Math.ceil(Math.max(minMax.max, product.price));
          return { min, max };
        },
        { min: Infinity, max: -Infinity }
      );
    },

    updateMinMaxStock(state) {
      state.minMaxStock = state.products.reduce(
        (minMax, product) => {
          const min = Math.min(minMax.min || 0, product.stock);
          const max = Math.max(minMax.max || 0, product.stock);
          return { min, max };
        },
        { min: Infinity, max: -Infinity }
      );
    },

    updateFilterProducts(state, { payload: filters }) {
      let newFilteredProducts = [...state.products];

      const {
        textField,
        minMaxPrice: [minPrice, maxPrice],
        minMaxStock: [minStock, maxStock],
        brands,
        categories,
      } = filters;

      if (textField !== '') {
        newFilteredProducts = state.products.filter((item) => {
          let isMatch = false;

          if (item.description.includes(textField)) isMatch = true;
          if (item.description2.includes(textField)) isMatch = true;
          if (item.category.includes(textField)) isMatch = true;
          if (item.brand.includes(textField)) isMatch = true;
          if (item.title.includes(textField)) isMatch = true;
          if (item.price.toString().includes(textField)) isMatch = true;
          if (item.stock.toString().includes(textField)) isMatch = true;

          return isMatch;
        });
      }

      // FIXME: Сделать проверку что цена изменилась с прошлого раза / Infinity ужасно наверно
      if (minPrice !== -Infinity || maxPrice !== Infinity) {
        newFilteredProducts = newFilteredProducts.filter((item) => item.price >= minPrice && item.price <= maxPrice);
      }

      //FIXME: Сделать проверку что количество изменилась с прошлого раза / Infinity ужасно наверно
      if (minStock !== -Infinity || maxStock !== Infinity) {
        newFilteredProducts = newFilteredProducts.filter((item) => item.stock >= minStock && item.stock <= maxStock);
      }

      if (brands.length) {
        newFilteredProducts = newFilteredProducts.filter((item) => brands.includes(item.brand));
      }
      if (categories.length) {
        newFilteredProducts = newFilteredProducts.filter((item) => categories.includes(item.category));
      }

      state.filterProducts = newFilteredProducts;
    },
    clearQuery(state) {
      state.query.sort = 'Sort options';
      state.query.minMaxPrice = '';
      state.query.minMaxStock = '';
      state.query.textField = '';
      state.query.brands = '';
      state.query.categories = '';
      state.query.isBigGrid = '';
    },
  },
});

export const { sortItems, searchItems, updateMinMaxPrice, updateMinMaxStock, updateFilterProducts, clearQuery } =
  productsSlice.actions;

export default productsSlice.reducer;
