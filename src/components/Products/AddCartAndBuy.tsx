import React, { useEffect } from 'react';
import { BsBagPlus } from 'react-icons/bs';

import { ProductType } from '../../store/data/data2';
import { addToCart, calculateTotals, openModalBuy } from '../../store/Slices/cartSlice';
import { useAppDispatch, useAppSelector } from './../../hooks';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

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
    <Button onClick={addCartHandler}>
      {'Buy Now'}
      {/* <BsBagPlus /> */}
    </Button>
  );
};

const Button = styled.button`
  cursor: pointer;
`;

export default AddCartAndBuy;
