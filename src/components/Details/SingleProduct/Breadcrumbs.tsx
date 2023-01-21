import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks';
import { ProductType } from '../../../store/data/data2';
import { resetFilters, updateFiltersByquery } from '../../../store/Slices/filtersSlice';
import { clearQuery } from '../../../store/Slices/productsSlice';

const Breadcrumbs: React.FC<{ product: ProductType }> = ({ product }) => {
  const dispatch = useAppDispatch();

  const resetOptions = () => {
    dispatch(resetFilters());
    dispatch(clearQuery());
  };

  // Переделал 2 функцию в одну. Но не нравится что я типизировал как стринг string.
  // const handlerHictoryBack = (categories: Pick<ProductType, 'category'>, brands?: Pick<ProductType, 'brand'>) => {
  const handlerHistoryBack = (categories: string, brands?: string) => {
    return () => {
      resetOptions();
      dispatch(updateFiltersByquery({ categories, brands }));
    };
  };

  return (
    <History>
      <Link className="history-link" to="/" onClick={resetOptions}>
        Store
      </Link>
      <Link className="history-link" to="/" onClick={handlerHistoryBack(product.category)}>
        {product.category}
      </Link>
      <Link className="history-link" to="/" onClick={handlerHistoryBack(product.category, product.brand)}>
        {product.brand}
      </Link>
      <span>{product.title}</span>
    </History>
  );
};

const History = styled.div`
  grid-column: 1 / -1;
  justify-self: start;

  display: flex;
  gap: 5px;

  & > .history-link {
    transition: all 0.2s;
  }

  & > .history-link:hover {
    color: var(--primary-btn-color-6);
  }

  & > .history-link::after {
    content: '/';
    display: inline-block;
    margin-left: 5px;

    pointer-events: none;
  }
`;

export default Breadcrumbs;
