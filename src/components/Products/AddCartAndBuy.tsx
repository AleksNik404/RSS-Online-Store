import React, { useEffect } from 'react';
import { BsBagPlus } from 'react-icons/bs';

import { ProductType } from '../../store/data/data2';
import { addToCart, calculateTotals } from '../../store/Slices/cartSlice';
import { useAppDispatch, useAppSelector } from './../../hooks';

const AddCartAndBuy: React.FC<ProductType> = (item) => {
  const { id, price, thumbnail, stock, category, title } = item;

  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cart, dispatch]);

  const inCart = cart.some((item) => item.id === id);
  const productInCart = {
    title,
    id,
    price,
    thumbnail,
    category,
    stock,
    amount: 1,
  };

  const addCartHandler = () => {
    dispatch(addToCart(productInCart));
  };

  return (
    <button onClick={addCartHandler}>
      {inCart ? 'Убрать из корзины' : 'Buy Now'}
      {/* <BsBagPlus /> */}
    </button>
  );
};

export default AddCartAndBuy;
