import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks';
import styled from '@emotion/styled';

import { MdShoppingCart } from 'react-icons/md';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { calculateTotals, closeModalBuy } from '../store/Slices/cartSlice';
import { resetFilters } from '../store/Slices/filtersSlice';
import { clearQuery } from '../store/Slices/productsSlice';

const Header = () => {
  const { total_amount, total_price, cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const cartData = JSON.stringify(cart);
    localStorage.setItem('Griz-cart', cartData);

    dispatch(calculateTotals());
  }, [cart, dispatch]);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== '/cart') dispatch(closeModalBuy());
  }, [location.pathname, dispatch]);

  const resetOptions = () => {
    dispatch(resetFilters());
    dispatch(clearQuery());
  };

  return (
    <Container className="">
      <div className="container-min header">
        <Link to="/">
          <h1 className="header__heading" onClick={resetOptions}>
            Online Store
          </h1>
        </Link>
        <Link to="/cart">
          <div className="cart">
            <p className="cart-total">{!!total_price && `${total_price}$`}</p>
            {/* <MdShoppingCart /> {total_amount} */}
            <ShoppingCartIcon /> {total_amount}
          </div>
        </Link>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px 20px;
  background-color: var(--main-bg-color-2);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__heading {
    margin: 0;
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
