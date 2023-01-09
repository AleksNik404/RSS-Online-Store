import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import React, { useState } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { decreaseItemAmount, increaseItemAmount, ProductTypeInCart } from '../../store/Slices/cartSlice';
import { useAppDispatch } from './../../hooks';
import { useNavigate } from 'react-router-dom';

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
          {/* <span>-</span>
          <p>Discount: {item.discountPercentage}%</p> */}
        </div>
      </Details>

      <AmountBox>
        <p>Stock: {item.stock}</p>
        <Controlls>
          {/* <AiOutlineMinusCircle className="btn" onClick={decreaseHandler} />
          <span className="amount">{item.amount}</span>
          <AiOutlinePlusCircle className="btn" onClick={increaseHandler} /> */}
          <ButtonLeft className="btn" onClick={decreaseHandler}>
            -
          </ButtonLeft>
          <span className="amount">{item.amount}</span>
          <ButtonRight className="btn" onClick={increaseHandler}>
            +
          </ButtonRight>
        </Controlls>
        <p>Price: {(item.price * item.amount).toFixed(2)}</p>
      </AmountBox>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 20px 150px 1fr max-content;
  gap: 10px;
  align-items: center;

  padding: 10px 10px;
  border-bottom: 1px solid #444;

  & > span {
    text-align: center;
  }
`;
const ButtonLeft = styled.button`
  width: 40px;
`;
const ButtonRight = styled.button`
  width: 40px;
`;

const CartImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  height: 100%;
  width: 100%;

  cursor: pointer;
`;

const CartImage = styled.img`
  max-width: 100%;
  max-height: 100%;

  object-fit: cover;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  & > .name {
    font-weight: 700;
  }
  & > .type {
    display: flex;
    gap: 5px;
  }
`;

const AmountBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  user-select: none;
`;

const Controlls = styled.div`
  display: grid;
  grid-template-columns: 50px 25px 50px;

  align-items: center;
  justify-items: center;

  gap: 2px;

  & > .btn {
    font-size: 22px;

    cursor: pointer;
    transition: background-color 0.2s;
    border-radius: 5px;
    border: none;
  }

  & > .btn:hover {
    background-color: var(--primary-btn-color-3);
  }

  & > .btn:active {
    background-color: var(--primary-btn-color-1);
  }
`;

export default CartItem;
