import React from 'react';
import styled from '@emotion/styled';
import { useAppSelector } from '../../hooks';
import RangeSlider from './RangeSlider/RangeSlider';

const Filters = () => {
  const { products } = useAppSelector((state) => state.products);

  const getUniqBrands = () => {
    const brands = products.map(({ brand }) => brand);
    return [...new Set(brands)];
  };
  const getUniqTypes = () => {
    const types = products.map(({ category }) => category);
    return [...new Set(types)];
  };

  const uniqBrands = getUniqBrands();
  const uniqTypes = getUniqTypes();

  return (
    <S_Filters>
      <S_List>
        <S_Heading>Brands</S_Heading>

        {uniqBrands.map((brand, index) => {
          return (
            <S_ListItem key={index}>
              <input type="checkbox" value="brand" id={brand} />
              <label htmlFor={brand}>{brand}</label>
            </S_ListItem>
          );
        })}
      </S_List>
      <S_List>
        <S_Heading>Types</S_Heading>
        {uniqTypes.map((type, index) => {
          return (
            <S_ListItem key={index}>
              <input type="checkbox" value="brand" id={type} />
              <label htmlFor={type}>{type}</label>
            </S_ListItem>
          );
        })}
      </S_List>
      <S_Stock>
        <S_Heading>In Stock</S_Heading>
        <RangeSlider />
      </S_Stock>
      <S_Price>
        <S_Heading>Price</S_Heading>
        <RangeSlider />
      </S_Price>
    </S_Filters>
  );
};

const S_Filters = styled.article`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;

const S_List = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const S_ListItem = styled.div`
  display: flex;
  gap: 10px;
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
