import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useAppSelector, useAppDispatch } from '../../hooks';
import PriceRange from './RangeSliders/PriceRange';
import StockRange from './RangeSliders/StockRange';
import { ProductType } from '../../store/data/data2';
import { updateBrands, updateCategories, resetFilters } from '../../store/Slices/filtersSlice';
import Checkbox from './Checkbox';
import { resetSort } from '../../store/Slices/productsSlice';
import PriceRange2 from './RangeSliders/PriceRange2';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

const Filters = () => {
  const { products } = useAppSelector((state) => state.products);
  const { filterProducts } = useAppSelector((state) => state.products);
  const [copyButton, setCopyButton] = useState(false);

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
    dispatch(resetSort());
    dispatch(resetFilters());
    //TODO: выбрать вариант по лучше, фикса бага, что иногда url не удаляется при сбросе
    history.pushState({}, '', location.href.split('?')[0]);
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
      <S_List>
        <S_Heading>Brands</S_Heading>
        {[...new Set(brands)].map((brand) => {
          const allCount = getCountBrands(brand, products);
          const filterCount = getCountBrands(brand, filterProducts);

          return <Checkbox type={'brands'} key={brand} filterCount={filterCount} allCount={allCount} brand={brand} />;
        })}
      </S_List>
      <S_List>
        <S_Heading>Categories</S_Heading>
        {[...new Set(types)].map((category) => {
          const allCount = getCountCategory(category, products);
          const filterCount = getCountCategory(category, filterProducts);

          return (
            //prettier-ignore
            <Checkbox type={'categories'} key={category} filterCount={filterCount} allCount={allCount} brand={category} />
          );
        })}
        {/* TODO: Исправить именование и мб часть внести в компоненты или дать уникальность range */}
      </S_List>
      <S_Stock>
        <S_Heading>In Stock</S_Heading>
        <StockRange />
      </S_Stock>
      <S_Price>
        <S_Heading>Price</S_Heading>
        <PriceRange />
      </S_Price>
      <button onClick={resetOptions}>Clear Filters</button>
      <button onClick={copyLink}>{copyButton ? 'Copied !' : 'Copy Link'}</button>
    </S_Filters>
  );
};

// TODO: Решить что делать с стилями. Надо будет привести к 1 стилю или styled или *.module.css
const S_Filters = styled.article`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const S_List = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const S_ListItem = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;

  label {
    display: flex;
    gap: 10px;
  }
`;

const S_Heading = styled.h4`
  padding: 10px 0px;
  text-transform: uppercase;
  border-bottom: 1px solid #dddddd;
  position: relative;

  &::after {
    content: '';

    height: 3px;
    width: 50%;
    background-color: #bbb;
    display: block;
    position: absolute;
    bottom: -2px;
  }
`;

const S_Stock = styled.article``;
const S_Price = styled.article``;

export default Filters;
