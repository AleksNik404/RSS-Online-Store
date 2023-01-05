import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type BRAND_OR_CATEGORY = 'brands' | 'categories';

type UPDATE_TEXTFIELD_TYPE = { type: 'textField'; value: string };
type UPDATE_BRANDS_TYPE = { value: string; isChecked: boolean };
type UPDATE_CATEGORY_TYPE = { value: string; isChecked: boolean };
type UPDATE_GRIDMODE_TYPE = boolean;

interface IFilterState {
  textField: string;

  minMaxStock: number[];
  minMaxPrice: number[];
  brands: string[];
  categories: string[];
  count: number;
  reset: boolean;
  sort: string;
  isBigGrid: boolean;
}

const initialState: IFilterState = {
  textField: '',
  minMaxPrice: [-Infinity, Infinity],
  minMaxStock: [-Infinity, Infinity],
  brands: [],
  categories: [],
  count: 0,
  sort: 'Sort options',
  isBigGrid: false,
  reset: false,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    //TODO: 2 похожих функции в 1
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
      state.isBigGrid = false;
      state.sort = 'Sort options';
      //FIXME: костыль на обновление, глупость
      state.reset = !state.reset;
    },

    updateFiltersByquery(state, { payload }) {
      if (payload.brands) state.brands = payload.brands.split('↕');
      if (payload.categories) state.categories = payload.categories.split('↕');
      if (payload.minMaxPrice) state.minMaxPrice = payload.minMaxPrice.split('↕');
      if (payload.minMaxStock) state.minMaxStock = payload.minMaxStock.split('↕');
      if (payload.textField) state.textField = payload.textField;
      if (payload.sort) state.sort = payload.sort;
      if (payload.isBigGrid) state.isBigGrid = payload.isBigGrid;
    },

    setBigGrid(state) {
      state.isBigGrid = true;
    },

    setSmallGrid(state) {
      state.isBigGrid = false;
    },

    setSortFilter(state, { payload }) {
      state.sort = payload;
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
  setBigGrid,
  setSmallGrid,
  setSortFilter,
} = filtersSlice.actions;

export default filtersSlice.reducer;
