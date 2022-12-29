import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks';
import styled from '@emotion/styled';

import { MdShoppingCart } from 'react-icons/md';

const Header = () => {
  const { total_amount, total_price } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <Container className="">
      <div className="container header">
        <Link to="/">
          <h1 className="">Online Store</h1>
        </Link>
        <Link to="/cart">
          <div className="cart">
            <p className="cart-total">{total_price}$ -</p>
            Cart <MdShoppingCart /> - amount: {total_amount}
          </div>
        </Link>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 40px;
  margin-bottom: 50px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cart {
    display: flex;
    align-items: center;
    gap: 5px;
    /* padding: 5px 10px; */
  }

  .cart-total {
    min-width: 70px;
    text-align: right;
  }
`;

export default Header;
