import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { ProductType } from '../../store/data/data2';
import { resetFilters, updateFiltersByquery } from '../../store/Slices/filtersSlice';
import { clearQuery } from '../../store/Slices/productsSlice';

const Breadcrumbs: React.FC<{ product: ProductType }> = ({ product }) => {
  const dispatch = useAppDispatch();

  const resetOptions = () => {
    dispatch(resetFilters());
    dispatch(clearQuery());
  };

  // Нужно учить TS.
  const historyOneCategory = () => {
    resetOptions();
    dispatch(updateFiltersByquery({ categories: product.category, brands: '' }));
  };
  const historyTwoCategory = () => {
    resetOptions();
    dispatch(updateFiltersByquery({ categories: product.category, brands: product.brand }));
  };

  return (
    <History>
      <Link className="history-link" to="/" onClick={resetOptions}>
        Store
      </Link>
      <Link className="history-link" to="/" onClick={historyOneCategory}>
        {product.category}
      </Link>
      <Link className="history-link" to="/" onClick={historyTwoCategory}>
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
