import React, { useEffect } from 'react';
import { BsBagPlus } from 'react-icons/bs';

import { ProductType } from '../../store/data/data2';
import { addToCart, calculateTotals, openModalBuy } from '../../store/Slices/cartSlice';
import { useAppDispatch, useAppSelector } from './../../hooks';
import { useNavigate } from 'react-router-dom';

const AddCartAndBuy: React.FC<ProductType> = (item) => {
  const { id } = item;

  const { cart } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const inCart = cart.some((item) => item.id === id);

  const productInCart = {
    ...item,
    amount: 1,
  };

  const addCartHandler = () => {
    if (!inCart) dispatch(addToCart(productInCart));
    dispatch(openModalBuy());
    navigate('/cart');
  };

  return (
    <button onClick={addCartHandler}>
      {'Buy Now'}
      {/* <BsBagPlus /> */}
    </button>
  );
};

export default AddCartAndBuy;
