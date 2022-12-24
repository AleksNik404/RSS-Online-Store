import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { searchItems } from '../../store/Slices/productsSlice';

import styled from '@emotion/styled';
import { BsGrid3X3GapFill, BsGridFill } from 'react-icons/bs';

import Sort from './Sort';
import { updateTextField } from '../../store/Slices/filtersSlice';

const SortPanel = () => {
  const dispatch = useAppDispatch();
  const { filterProducts } = useAppSelector((state) => state.products);
  const { textField, reset } = useAppSelector((state) => state.filters);

  const searchFieldHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateTextField({ type: 'textField', value: event.target.value }));
  };

  return (
    <Container>
      <input type="text" value={textField} onChange={searchFieldHandler} placeholder="Search Product" />

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
