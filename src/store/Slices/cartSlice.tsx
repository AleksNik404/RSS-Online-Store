import { createSlice } from '@reduxjs/toolkit';

import { ProductType } from '../data/data2';

export type IPromoCode = {
  initials: string;
  title: string;
  discount: number;
};

export type ProductInCart = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
  stock: number;
  amount: number;
  description2: string;
};

export type ProductTypeInCart = ProductType & ProductInCart;

interface ICartState {
  cart: ProductTypeInCart[];
  total_amount: number;
  total_price: number;
  promocodes: IPromoCode[];
  modelBuyIsOpen: boolean;
  finalPrice: number;
}

const getCartStorage = () => {
  const cartData = localStorage.getItem('Griz-cart');

  if (cartData) return JSON.parse(cartData);
};

const initialState: ICartState = {
  cart: getCartStorage() || [],
  total_amount: 0,
  total_price: 0,
  promocodes: [
    { initials: 'RS', title: 'Rolling Scopes School', discount: 15 },
    { initials: 'EPM', title: 'EPAM Systems', discount: 10 },
  ],
  modelBuyIsOpen: false,
  finalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, { payload: newProduct }) {
      const sameProduct = state.cart.find((product) => product.id === newProduct.id);

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

    increaseItemAmount(state, { payload: id }) {
      const productIndex = state.cart.findIndex((product) => product.id === id);
      const { amount, stock } = state.cart[productIndex];

      if (amount < stock) state.cart[productIndex].amount += 1;
    },

    decreaseItemAmount(state, { payload: id }) {
      const productIndex = state.cart.findIndex((product) => product.id === id);
      const { amount } = state.cart[productIndex];

      if (amount > 1) state.cart[productIndex].amount -= 1;
      else state.cart = state.cart.filter((product) => product.id !== id);
    },
    openModalBuy(state) {
      state.modelBuyIsOpen = true;
    },
    closeModalBuy(state) {
      state.modelBuyIsOpen = false;
    },
  },
});

export const { addToCart, calculateTotals, increaseItemAmount, decreaseItemAmount, openModalBuy, closeModalBuy } =
  cartSlice.actions;

export default cartSlice.reducer;
