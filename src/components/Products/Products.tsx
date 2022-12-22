import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import styled from '@emotion/styled';
import { BsBagPlus, BsBagCheck } from 'react-icons/Bs';
import { Link } from 'react-router-dom';
import style from './Products.module.css';

const Products = () => {
  const { filterProducts } = useAppSelector((state) => state.products);
  // const state = useAppSelector((state) => state.products);
  // console.log(state);

  if (!filterProducts.length) return <div>No products found</div>;

  return (
    <div className={style.items}>
      {filterProducts.map((item) => (
        <div key={item.id} className={style.item}>
          <Link to={`/details/${item.id}`} className={style.imgBox}>
            <img className={style.img} src={item.thumbnail} alt={item.title} />
          </Link>
          <div className={style.details}>
            <p className={style.name}>{item.title}</p>
            <div className={style.priceBox}>
              <p>{item.price.toFixed(2)} $</p>
              <BsBagPlus />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
