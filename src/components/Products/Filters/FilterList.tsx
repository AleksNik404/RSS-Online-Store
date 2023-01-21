import styled from '@emotion/styled';
import React from 'react';
import { useAppSelector } from '../../../hooks';
import { ProductType } from '../../../store/data/data2';
import Checkbox2, { ICheckBox } from './Checkbox';

const FilterList: React.FC<{ items: string[]; type: 'brands' | 'categories' }> = ({ items, type }) => {
  const { products } = useAppSelector((state) => state.products);
  const { filterProducts } = useAppSelector((state) => state.products);

  const getCountBrands = (name: string, arr: ProductType[]) => {
    return arr.filter((item) => item.brand === name).length;
  };

  return (
    <S_List>
      {[...new Set(items)].map((brand) => {
        const allCount = getCountBrands(brand, products);
        const filterCount = getCountBrands(brand, filterProducts);

        return <Checkbox2 type={type} key={brand} filterCount={filterCount} allCount={allCount} brand={brand} />;
      })}
    </S_List>
  );
};

const S_List = styled.ul`
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export default FilterList;
