import { createSlice } from '@reduxjs/toolkit';

interface ICartState {
  total_amount: number;
}

const initialState: ICartState = {
  total_amount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
