import React, { useEffect } from 'react';
import { BsBagPlus } from 'react-icons/bs';

import { ProductType } from '../../store/data/data2';
import { addToCart, calculateTotals, ProductInCart } from '../../store/Slices/cartSlice';
import { useAppDispatch, useAppSelector } from './../../hooks';

const AddCart: React.FC<ProductInCart> = (item) => {
  const {
    id,
    //  price, thumbnail, stock, category, title
  } = item;

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
    <button onClick={addCartHandler}>
      {inCart ? 'Убрать из корзины' : 'Добавить в корзину'}
      {/* <BsBagPlus /> */}
    </button>
  );
};

export default AddCart;
