import Button from '@mui/material/Button';
import React, { useEffect } from 'react';
import { BsBagPlus } from 'react-icons/bs';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { addToCart, ProductInCart } from '../../store/Slices/cartSlice';
import { useAppDispatch, useAppSelector } from './../../hooks';
import styled from '@emotion/styled';

const AddCart: React.FC<ProductInCart> = (item) => {
  const { id } = item;

  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const inCart = cart.some((item) => item.id === id);

  const productInCart = {
    ...item,
    amount: 1,
  };

  const addCartHandler = () => {
    dispatch(addToCart(productInCart));
  };

  return (
    <ButtonC onClick={addCartHandler} className={inCart ? 'btn--delete' : 'btn--add'}>
      {/* <Button variant="contained">Contained</Button> */}
      {inCart ? <DeleteIcon /> : <AddShoppingCartIcon />}

      <p>{inCart ? 'Remove' : 'Add Cart'}</p>
      {/* <BsBagPlus /> */}
    </ButtonC>
  );
};

const ButtonC = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  font-size: 14;
  padding: 4px 8px;
  min-width: 120px;

  border-radius: 2px;

  transition: all 0.3s;

  &.btn--add {
    background-color: var(--primary-btn-color-1);
    border: solid 1px transparent;
    color: #f5f5f5;

    &:hover {
      background-color: var(--primary-btn-color-2);
      border-color: var(--primary-btn-color-2);
    }

    &:active {
      background-color: var(--primary-btn-color-3);
      border-color: var(--primary-btn-color-3);
    }
  }

  &.btn--delete {
    background-color: transparent;
    border: solid 1px var(--main-text-color-1);
    color: var(--main-text-color-1);

    &:hover {
      border-color: var(--secondary-btn-color-2);
      color: var(--secondary-btn-color-2);
    }

    &:active {
      border-color: var(--secondary-btn-color-1);
      color: var(--secondary-btn-color-1);
    }
  }
`;

export default AddCart;
