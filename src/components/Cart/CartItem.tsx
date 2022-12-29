import styled from '@emotion/styled';
import React, { useState } from 'react';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { decreaseItemAmount, increaseItemAmount, ProductTypeInCart } from '../../store/Slices/cartSlice';
import { useAppDispatch } from './../../hooks';

interface ICartItem {
  item: ProductTypeInCart;
  index: number;
}

const CartItem: React.FC<ICartItem> = ({ item, index }) => {
  const dispatch = useAppDispatch();

  const increaseHandler = () => {
    dispatch(increaseItemAmount(item.id));
  };

  const decreaseHandler = () => {
    dispatch(decreaseItemAmount(item.id));
  };

  return (
    <Container>
      <span>{index + 1}</span>
      <CartImage src={item.thumbnail} alt="product" />

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
          <AiOutlineMinusCircle className="btn" onClick={decreaseHandler} />
          <span className="amount">{item.amount}</span>
          <AiOutlinePlusCircle className="btn" onClick={increaseHandler} />
        </Controlls>
        <p>Price: {(item.price * item.amount).toFixed(2)}</p>
      </AmountBox>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 20px 150px 1fr 200px;
  gap: 20px;
  align-items: center;
  /* justify-content: space-between; */

  padding: 10px 10px;
  border-bottom: 1px solid #444;
`;

const CartImage = styled.img`
  max-width: 150px;
  max-height: 80px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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
  display: flex;
  align-items: center;
  gap: 5px;

  .btn {
    font-size: 26px;
  }
`;

export default CartItem;
