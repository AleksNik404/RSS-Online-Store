import styled from '@emotion/styled';
import React from 'react';
import { useAppSelector } from '../../../hooks';
import { ProductType } from '../../../store/data/data2';
import { S_Heading } from '../Filters';
import Checkbox2 from './Checkbox';

interface ListProps {
  items: string[];
  countByName: keyof ProductType;
  typeCheckbox: 'brands' | 'categories';
}

const List: React.FC<ListProps> = ({ items, countByName, typeCheckbox }) => {
  const { products } = useAppSelector((state) => state.products);
  const { filterProducts } = useAppSelector((state) => state.products);

  const getCountBrands = (name: string, arr: ProductType[], type: keyof ProductType) => {
    return arr.filter((item) => item[type] === name).length;
  };

  return (
    <>
      <S_Heading>{typeCheckbox}</S_Heading>
      <S_List>
        {items.map((brand) => {
          const allCount = getCountBrands(brand, products, countByName);
          const filterCount = getCountBrands(brand, filterProducts, countByName);

          return (
            <Checkbox2 type={typeCheckbox} key={brand} filterCount={filterCount} allCount={allCount} brand={brand} />
          );
        })}
      </S_List>
    </>
  );
};

const S_List = styled.ul`
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export default List;
