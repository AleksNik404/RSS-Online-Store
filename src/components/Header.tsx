import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks';
import styled from '@emotion/styled';

import { MdShoppingCart } from 'react-icons/md';
import { calculateTotals } from '../store/Slices/cartSlice';

const Header = () => {
  const { total_amount, total_price, cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const cartData = JSON.stringify(cart);
    localStorage.setItem('Griz-cart', cartData);

    dispatch(calculateTotals());
  }, [cart, dispatch]);

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
