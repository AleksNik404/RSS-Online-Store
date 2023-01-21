import styled from '@emotion/styled';
import React, { useState } from 'react';
import { decreaseItemAmount, increaseItemAmount, ProductTypeInCart } from '../../store/Slices/cartSlice';
import { useAppDispatch } from './../../hooks';
import { useNavigate } from 'react-router-dom';
import {
  AmountBox,
  ButtonLeft,
  ButtonRight,
  CartImage,
  CartImageBox,
  Container,
  Controls,
  Details,
} from './CartItemStyled';

interface ICartItem {
  item: ProductTypeInCart;
  index: number;
}

const CartItem: React.FC<ICartItem> = ({ item, index }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const increaseHandler = () => {
    dispatch(increaseItemAmount(item.id));
  };

  const decreaseHandler = () => {
    dispatch(decreaseItemAmount(item.id));
  };

  return (
    <Container>
      <span>{index + 1}</span>
      <CartImageBox onClick={() => navigate(`/details/${item.id}`)}>
        <CartImage src={item.thumbnail} alt="product" />
      </CartImageBox>

      <Details>
        <h4 className="name">{item.title}</h4>
        <div className="type">
          <p>{item.category}</p>
          <span>-</span>
          <p>{item.brand}</p>
        </div>
        <div className="type">
          <p>Rating: {item.rating}</p>
        </div>
      </Details>

      <AmountBox>
        <p>Stock: {item.stock}</p>
        <Controls>
          <ButtonLeft className="btn" onClick={decreaseHandler}>
            -
          </ButtonLeft>
          <span className="amount">{item.amount}</span>
          <ButtonRight className="btn" onClick={increaseHandler}>
            +
          </ButtonRight>
        </Controls>
        <p>Price: {(item.price * item.amount).toFixed(2)} $</p>
      </AmountBox>
    </Container>
  );
};

export default CartItem;
