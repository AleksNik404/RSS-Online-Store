import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../hooks';
import styled from '@emotion/styled';
import style from './Products.module.css';
import {
  updateMinMaxPrice,
  updateMinMaxStock,
  updateFilterProducts,
  sortItems,
} from '../../store/Slices/productsSlice';
import { updateFiltersByquery } from '../../store/Slices/filtersSlice';
import AddCart from './AddCart';
import BigGridList from './BigGridList';

const Products = () => {
  const { products, filterProducts, query, minMaxPrice, minMaxStock } = useAppSelector((state) => state.products);
  const { sort } = useAppSelector((state) => state.filters);
  const filters = useAppSelector((state) => state.filters);

  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  // FIXME: Столько useEffect зависимостей, не нормально?
  // Найти минимальную и максимальную цену на старте для продуктов для слайдера.
  useEffect(() => {
    dispatch(updateMinMaxPrice());
    dispatch(updateMinMaxStock());
  }, [dispatch, products]);

  // Этот УЖАС чтоб на основе фильтров выставлять актуальный url параметры..........
  useEffect(() => {
    const {
      textField,
      minMaxPrice: [minPrice, maxPrice],
      minMaxStock: [minStock, maxStock],
      brands,
      categories,
      isBigGrid,
      sort,
    } = filters;

    if (textField) searchParams.set('textField', textField);
    else searchParams.delete('textField');

    if (isFinite(minPrice) && isFinite(maxPrice)) searchParams.set('minMaxPrice', `${minPrice}↕${maxPrice}`);
    else searchParams.delete('minMaxPrice');

    if (isFinite(minStock) && isFinite(maxStock)) searchParams.set('minMaxStock', `${minStock}↕${maxStock}`);
    else searchParams.delete('minMaxStock');

    //Сброс фильтров цены и стока. Если макс диапозон. А то в начале сразу ставятся query
    if (minPrice == minMaxPrice.min && maxPrice == minMaxPrice.max) searchParams.delete('minMaxPrice');
    if (minStock == minMaxStock.min && maxStock == minMaxStock.max) searchParams.delete('minMaxStock');

    if (brands.length) searchParams.set('brands', brands.join('↕'));
    else searchParams.delete('brands');

    if (categories.length) searchParams.set('categories', categories.join('↕'));
    else searchParams.delete('categories');

    if (sort !== 'Sort options') searchParams.set('sort', sort);
    else searchParams.delete('sort');

    if (isBigGrid) searchParams.set('isBigGrid', 'true');
    else searchParams.delete('isBigGrid');

    searchParams.sort();

    setSearchParams(searchParams);
  }, [
    dispatch,
    filters,
    minMaxPrice.max,
    minMaxPrice.min,
    minMaxStock.max,
    minMaxStock.min,
    searchParams,
    setSearchParams,
    sort,
  ]);

  // При изминение фильтров пересчитывались товары
  useEffect(() => {
    dispatch(updateFilterProducts(filters));
    dispatch(sortItems(sort));
  }, [dispatch, filters, sort]);

  useEffect(() => {
    dispatch(updateFiltersByquery(query));
  }, [dispatch, query]);

  if (!filterProducts.length) return <div>No products found</div>;
  if (filters.isBigGrid) return <BigGridList />;

  return (
    <div className={style.items}>
      {filterProducts.map((item) => {
        return (
          <div key={item.id} className={style.item}>
            <Link to={`/details/${item.id}`} className={style.imgBox}>
              <img className={style.img} src={item.thumbnail} alt={item.title} />
            </Link>
            <div className={style.details}>
              <p className={style.name}>{item.title}</p>
              <div className={style.priceBox}>
                <p>{item.price.toFixed(2)} $</p>
                <AddCart amount={1} {...item} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
