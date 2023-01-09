import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useAppSelector, useAppDispatch } from '../../hooks';
import Checkbox2 from './Checkbox';
import { ProductType } from '../../store/data/data2';
import { resetFilters } from '../../store/Slices/filtersSlice';
import { clearQuery } from '../../store/Slices/productsSlice';
import StockRange from './RangeSliders/StockRange';
import PriceRange from './RangeSliders/PriceRange';

const Filters = () => {
  const { products } = useAppSelector((state) => state.products);
  const { filterProducts } = useAppSelector((state) => state.products);
  const [copyButton, setCopyButton] = useState(false);
  const [resetButton, setResetButton] = useState(false);

  const dispatch = useAppDispatch();

  // TODO: Оптимизировать функции и сделать уникальной, проблема в типизации была.
  const brands = products.map(({ brand }) => brand);
  const types = products.map(({ category }) => category);

  //FIXME: меня замучала ТС ошибка, потом разберусь c типизацией и DRY.
  const getCountBrands = (name: string, arr: ProductType[]) => {
    return arr.filter((item) => item.brand === name).length;
  };
  const getCountCategory = (name: string, arr: ProductType[]) => {
    return arr.filter((item) => item.category === name).length;
  };

  // Кнопка сброса фильтров, убрать фильтры в одном сторе, и фернуть дефелтное значение сортировки
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
      <S_Heading>Brands</S_Heading>
      <S_List>
        {[...new Set(brands)].map((brand) => {
          const allCount = getCountBrands(brand, products);
          const filterCount = getCountBrands(brand, filterProducts);

          return <Checkbox2 type={'brands'} key={brand} filterCount={filterCount} allCount={allCount} brand={brand} />;
        })}
      </S_List>
      <S_Heading>Categories</S_Heading>
      <S_List>
        {[...new Set(types)].map((category) => {
          const allCount = getCountCategory(category, products);
          const filterCount = getCountCategory(category, filterProducts);

          return (
            //prettier-ignore
            <Checkbox2 type={'categories'} key={category} filterCount={filterCount} allCount={allCount} brand={category} />
          );
        })}
        {/* TODO: Исправить именование и мб часть внести в компоненты или дать уникальность range */}
      </S_List>
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

const S_List = styled.ul`
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const S_Heading = styled.h4`
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
