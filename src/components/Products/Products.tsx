import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import styled from '@emotion/styled';
import { BsBagPlus, BsBagCheck } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import style from './Products.module.css';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import {
  updateMinMaxPrice,
  updateMinMaxStock,
  updateFilterProducts,
  sortItems,
  // updateParams,
  // updateMinMaxFiltPrice,
  // updateMinMaxFiltStock,
} from '../../store/Slices/productsSlice';
import { updateFiltersByquery } from '../../store/Slices/filtersSlice';

const Products = () => {
  const { products, filterProducts, query, sort } = useAppSelector((state) => state.products);
  const filters = useAppSelector((state) => state.filters);

  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(updateMinMaxPrice());
    dispatch(updateMinMaxStock());
  }, [dispatch, products]);

  useEffect(() => {
    dispatch(updateFiltersByquery(query));
  }, [dispatch, query]);

  useEffect(() => {
    const {
      textField,
      minMaxPrice: [minPrice, maxPrice],
      minMaxStock: [minStock, maxStock],
      brands,
      categories,
      sort,
    } = filters;

    if (textField) searchParams.set('textField', textField);
    else searchParams.delete('textField');

    if (isFinite(minPrice) && isFinite(maxPrice)) searchParams.set('minMaxPrice', `${minPrice}↕${maxPrice}`);
    else searchParams.delete('minMaxPrice');

    if (isFinite(minStock) && isFinite(maxStock)) searchParams.set('minMaxStock', `${minStock}↕${maxStock}`);
    else searchParams.delete('minMaxStock');

    if (brands.length) searchParams.set('brands', brands.join('↕'));
    else searchParams.delete('brands');

    if (categories.length) searchParams.set('categories', categories.join('↕'));
    else searchParams.delete('categories');

    if (sort !== 'Sort options') searchParams.set('sort', sort);
    else searchParams.delete('sort');

    searchParams.sort();

    console.log(sort);

    setSearchParams(searchParams);
  }, [dispatch, filters, searchParams, setSearchParams]);

  useEffect(() => {
    dispatch(updateFilterProducts(filters));
    dispatch(sortItems(sort));
  }, [dispatch, filters, sort]);

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
