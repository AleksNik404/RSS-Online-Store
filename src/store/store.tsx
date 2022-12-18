import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './Slices/productsSlice';
import cartReducer from './Slices/cartSlice';
import filtersReducer from './Slices/filtersSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    fitlers: filtersReducer,
    cart: cartReducer,
  },
});

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch

// import { useDispatch, useSelector } from 'react-redux'
// import type { TypedUseSelectorHook } from 'react-redux'
// import type { RootState, AppDispatch } from './store'

// // Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch: () => AppDispatch = useDispatch
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
