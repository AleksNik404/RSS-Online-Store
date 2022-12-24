import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type BRAND_OR_CATEGORY = 'brands' | 'categories';

type UPDATE_TEXTFIELD_TYPE = { type: 'textField'; value: string };
type UPDATE_BRANDS_TYPE = { value: string; isChecked: boolean };
type UPDATE_CATEGORY_TYPE = { value: string; isChecked: boolean };

interface IFilterState {
  textField: string;

  minPrice?: number;
  maxPrice?: number;
  minStock?: number;
  maxStock?: number;

  minMaxStock: number[];
  minMaxPrice: number[];
  brands: string[];
  categories: string[];
  count: number;
  reset: boolean;
  sort: string;
}

const initialState: IFilterState = {
  textField: '',
  minMaxPrice: [-Infinity, Infinity],
  minMaxStock: [-Infinity, Infinity],
  brands: [],
  categories: [],
  count: 0,
  reset: false,
  sort: 'Sort options',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateMinMaxPrice(state, { payload: { min, max } }: PayloadAction<{ min: number; max: number }>) {
      state.minMaxPrice = [Math.min(min, max), Math.max(min, max)];
    },
    updateMinMaxStock(state, { payload: { min, max } }: PayloadAction<{ min: number; max: number }>) {
      state.minMaxStock = [Math.min(min, max), Math.max(min, max)];
    },

    updateTextField(state, { payload: { type, value } }: PayloadAction<UPDATE_TEXTFIELD_TYPE>) {
      state[type] = value;
    },

    //TODO: 2 похожих функции в 1 / TS не дает все сделать одним. Знаний нет.
    updateBrands(state, { payload: { value, isChecked } }: PayloadAction<UPDATE_BRANDS_TYPE>) {
      if (isChecked) state.brands.push(value);
      else state.brands = state.brands.filter((brand) => brand !== value);
    },

    updateCategories(state, { payload: { value, isChecked } }: PayloadAction<UPDATE_CATEGORY_TYPE>) {
      if (isChecked) state.categories.push(value);
      else state.categories = state.categories.filter((category) => category !== value);
    },

    resetFilters(state) {
      state.textField = '';
      state.minMaxStock = [-Infinity, Infinity];
      state.minMaxPrice = [-Infinity, Infinity];
      state.brands = [];
      state.categories = [];
      state.count = 0;
      state.reset = !state.reset;
      // state.sort = 'Sort options';
    },

    updateFiltersByquery(state, { payload }) {
      if (payload.brands) state.brands = payload.brands.split('↕');
      if (payload.categories) state.categories = payload.categories.split('↕');
      if (payload.minMaxPrice) state.minMaxPrice = payload.minMaxPrice.split('↕');
      if (payload.minMaxStock) state.minMaxStock = payload.minMaxStock.split('↕');
      if (payload.textField) state.textField = payload.textField;
      if (payload.sort) state.sort = payload.sort;
    },
  },
});

export const {
  updateMinMaxPrice,
  updateMinMaxStock,
  updateTextField,
  updateBrands,
  updateCategories,
  resetFilters,
  updateFiltersByquery,
} = filtersSlice.actions;

export default filtersSlice.reducer;
