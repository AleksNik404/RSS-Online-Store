import styled from '@emotion/styled';
import React from 'react';
import { useAppSelector } from '../../hooks';

const CartSummary = () => {
  const { total_amount, total_price } = useAppSelector((state) => state.cart);
  return (
    <Container>
      <p>Summary</p>
      <p>Products: {total_amount}</p>
      <p>Total: {total_price}</p>
      <input type="text" placeholder="promocode" />
      <p>Promo for test: `RS`, `EPM`, `Griz`</p>

      <button>Buy Now</button>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default CartSummary;
