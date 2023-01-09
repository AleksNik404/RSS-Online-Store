import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { BsBagPlus } from 'react-icons/bs';
import { ProductType } from '../../store/data/data2';
import { addToCart, openModalBuy } from '../../store/Slices/cartSlice';
import { useAppDispatch, useAppSelector } from './../../hooks';
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

  font-size: 14;
  padding: 6px 12px;

  border-radius: 2px;

  transition: all 0.3s;

  background-color: var(--main-text-color-1);
  border: solid 1px transparent;
  color: var(--main-bg-color-3);

  &:hover {
    background-color: var(--main-text-color-2);
  }

  &:active {
    background-color: var(--main-text-color-3);
  }
`;

export default AddCartAndBuy;
