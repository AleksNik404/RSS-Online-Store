import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks';
import styled from '@emotion/styled';

import { MdShoppingCart } from 'react-icons/md';

const Header = () => {
  const total_amount = useAppSelector((state) => state.cart.total_amount);
  const dispatch = useAppDispatch();

  return (
    <Container className="">
      <div className="container header">
        <Link to="/">
          <h1 className="">Online Store</h1>
        </Link>
        <h3>Cart total: ${total_amount}</h3>
        <Link to="/cart">
          <div className="cart">
            Cart <MdShoppingCart />
          </div>
        </Link>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 40px;

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
`;

export default Header;
