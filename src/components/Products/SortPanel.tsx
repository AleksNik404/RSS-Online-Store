import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';

import styled from '@emotion/styled';
import { BsGrid3X3GapFill, BsGridFill } from 'react-icons/bs';

import Sort from './Sort';
import { setBigGrid, setSmallGrid, updateTextField } from '../../store/Slices/filtersSlice';
import TextField from '@mui/material/TextField/TextField';

const SortPanel = () => {
  const dispatch = useAppDispatch();
  const { filterProducts } = useAppSelector((state) => state.products);
  const { textField } = useAppSelector((state) => state.filters);
  const { isBigGrid } = useAppSelector((state) => state.filters);

  // При вводе текса обновлять стор
  const searchFieldHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateTextField({ type: 'textField', value: event.target.value }));
  };

  return (
    <Container>
      <SortBox>
        <TextField
          size="small"
          value={textField}
          onChange={searchFieldHandler}
          label="Search Product"
          id="filled-size-small"
          variant="filled"
          fullWidth
        />
      </SortBox>
      <SortBox>
        <S_Amount>
          Found items: <span>{filterProducts.length}</span>
        </S_Amount>
        <Sort />
      </SortBox>
      <div className="grid-mode">
        <BsGrid3X3GapFill
          className={`${isBigGrid ? 'grid-icon' : 'grid-icon--active'}`}
          onClick={() => dispatch(setSmallGrid())}
        />
        <BsGridFill
          className={`${isBigGrid ? 'grid-icon--active' : 'grid-icon'}`}
          onClick={() => dispatch(setBigGrid())}
        />
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

  .grid-mode {
    display: flex;
    align-items: center;
    gap: 8px;

    font-size: 30px;
    background-color: var(--main-bg-color-3);
    padding: 9px 12px;
    border-radius: 4px;
    align-self: stretch;

    transition: all 0.2s;

    &:hover {
      background-color: var(--main-bg-color-3-hover);
    }
  }

  .grid-icon {
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: var(--primary-btn-color-2);
    }
  }

  .grid-icon--active {
    color: var(--primary-btn-color-5);
  }

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const S_Amount = styled.div`
  white-space: nowrap;

  line-height: 1.3;
  font-size: 17px;
  min-width: 9.6rem;
  padding: 21px 12px 0px 12px;

  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom: 1px solid #c1c1c1;
  background-color: var(--main-bg-color-3);

  transition: all 0.2s;

  &:hover {
    border-bottom: 1px solid #ffffff;
    background-color: var(--main-bg-color-3-hover);
  }

  @media (max-width: 990px) {
    display: none;
  }
`;

const SortBox = styled.div`
  display: flex;
  gap: 5px;

  min-width: 150px;

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export default SortPanel;
