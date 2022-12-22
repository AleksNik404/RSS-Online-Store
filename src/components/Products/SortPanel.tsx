import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { searchItems } from '../../store/Slices/productsSlice';

import styled from '@emotion/styled';
import { BsGrid3X3GapFill, BsGridFill } from 'react-icons/Bs';

import Sort from './Sort';

const SortPanel = () => {
  const { filterProducts } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const [searchField, setSearchField] = useState('');

  const searchFieldHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchField(event.target.value);
    dispatch(searchItems(event.target.value));
  };

  return (
    <Container>
      <input
        type="text"
        value={searchField}
        onChange={searchFieldHandler}
        placeholder="Search Product"
      />

      <Sort />
      <S_Amount>
        Found items: <span>{filterProducts.length}</span>
      </S_Amount>
      <div className="grid-mode">
        <BsGrid3X3GapFill />
        <BsGridFill />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 15px;

  @media (max-width: 700) {
    flex-direction: column;
  }

  .grid-mode {
    display: flex;
    align-items: center;
    gap: 5px;

    height: 30px;
    font-size: 20px;
  }
`;

const S_Amount = styled.p`
  white-space: nowrap;
`;

export default SortPanel;
