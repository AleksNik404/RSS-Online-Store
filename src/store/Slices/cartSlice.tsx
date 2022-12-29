import { createSlice } from '@reduxjs/toolkit';

import { ProductType } from '../data/data2';

type ProductInCart = {
  id: number;
  price: number;
  thumbnail: string;
  category: string;
  stock: number;
  amount: number;
};

type ProductTypeInCart = ProductType & ProductInCart;

interface ICartState {
  cart: ProductInCart[];
  total_amount: number;
  total_price: number;
}

const initialState: ICartState = {
  cart: [],
  total_amount: 0,
  total_price: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, { payload: newProduct }) {
      const sameProduct = state.cart.find((product) => product.id === newProduct.id);
      // if (sameProduct) sameProduct.amount += 1;
      // else state.cart.push(newProduct);
      if (!sameProduct) state.cart.push(newProduct);
      else state.cart = state.cart.filter((item) => item.id !== newProduct.id);
    },

    calculateTotals(state) {
      const totals = state.cart.reduce(
        ({ total_amount, total_price }, item) => {
          const { price, amount } = item;
          total_amount += amount;
          total_price += amount * price;
          return { total_amount, total_price };
        },
        { total_amount: 0, total_price: 0 }
      );

      state.total_amount = Number(totals.total_amount.toFixed(2));
      state.total_price = Number(totals.total_price.toFixed(2));
    },
  },
});

export const { addToCart, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;
