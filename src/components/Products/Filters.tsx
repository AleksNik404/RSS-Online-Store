import React, { useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { useAppSelector, useAppDispatch } from '../../hooks';

import { ProductType } from '../../store/data/data2';
import { resetFilters } from '../../store/Slices/filtersSlice';
import { clearQuery } from '../../store/Slices/productsSlice';
import Checkbox2 from './Filters/Checkbox';
import StockRange from './Filters/StockRange';
import PriceRange from './Filters/PriceRange2';
import List from './Filters/List';

const Filters = () => {
  const { products } = useAppSelector((state) => state.products);

  const [copyButton, setCopyButton] = useState(false);
  const [resetButton, setResetButton] = useState(false);

  const dispatch = useAppDispatch();

  // Не нравится что похожие функции удваиваются. Попробовал снова в типизацию, и там не читаемых код выходит
  const brands = useMemo(() => products.map(({ brand }) => brand), [products]);
  const types = useMemo(() => products.map(({ category }) => category), [products]);

  const uniqBrands = useMemo(() => [...new Set(brands)], [brands]);
  const uniqTypes = useMemo(() => [...new Set(types)], [types]);

  // Кнопка сброса фильтров, убрать фильтры в одном сторе, и вернуть дефелтное значение сортировки
  const resetOptions = () => {
    dispatch(resetFilters());
    dispatch(clearQuery());

    setResetButton(true);

    setTimeout(() => {
      setResetButton(false);
    }, 1000);
  };

  // Скопировать в буффер линк
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopyButton(true);

    setTimeout(() => {
      setCopyButton(false);
    }, 1000);
  };

  return (
    <S_Filters>
      <List items={uniqBrands} countByName="brand" typeCheckbox="brands" />
      <List items={uniqTypes} countByName="category" typeCheckbox="categories" />

      <S_Heading>In Stock</S_Heading>
      <S_Stock>
        <StockRange />
      </S_Stock>
      <S_Heading>Price</S_Heading>
      <S_Price>
        <PriceRange />
      </S_Price>
      <ButtonsBox>
        <Button className="btn--reset" onClick={resetOptions}>
          {resetButton ? 'Сleared !' : 'Clear Filters'}
        </Button>
        <Button className="btn--copy" onClick={copyLink}>
          {copyButton ? 'Copied !' : 'Copy Link'}
        </Button>
      </ButtonsBox>
    </S_Filters>
  );
};

// TODO: Решить что делать с стилями. Надо будет привести к 1 стилю или styled или *.module.css
const S_Filters = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const S_Heading = styled.h4`
  padding: 10px 0px;
  text-transform: uppercase;
  border-bottom: 1px solid #555555;
  position: relative;
`;

const S_Stock = styled.article``;
const S_Price = styled.article``;

const ButtonsBox = styled.div`
  display: grid;
  gap: 10px;
`;

const Button = styled.button`
  cursor: pointer;

  font-size: 14;
  padding: 4px 8px;

  border-radius: 2px;
  border: none;
  transition: all 0.3s;

  &.btn--reset {
    background-color: transparent;
    border: solid 1px var(--secondary-btn-color-4);
    color: var(--secondary-btn-color-4);

    &:hover {
      border-color: var(--secondary-btn-color-1);
      color: var(--secondary-btn-color-1);
    }

    &:active {
      border-color: #ff3d00;
      color: #ff3d00;
    }
  }

  &.btn--copy {
    background-color: transparent;
    border: solid 1px var(--primary-btn-color-6);
    color: var(--primary-btn-color-6);

    &:hover {
      border-color: var(--primary-btn-color-5);
      color: var(--primary-btn-color-5);
    }

    &:active {
      border-color: var(--primary-btn-color-4);
      color: var(--primary-btn-color-4);
    }
  }
`;

export default Filters;
