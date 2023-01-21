import React from 'react';
import { SortDirection } from '../../types';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { sortItems } from '../../store/Slices/productsSlice';
import { setSortFilter } from '../../store/Slices/filtersSlice';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import styled from '@emotion/styled';

const Sort = () => {
  const dispath = useAppDispatch();
  const { sort } = useAppSelector((state) => state.filters);

  // При смене селекта, отсортировать продукты и обновить название сортировки
  const sortHandler = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    dispath(setSortFilter(event.target.value));
    dispath(sortItems(event.target.value));
  };

  return (
    <WidthBox>
      <TextField
        id="filled-select-currency"
        select
        label={`${sort === 'Sort options' ? '' : 'Sort By:'}`}
        variant="filled"
        size="small"
        fullWidth
        onChange={sortHandler}
        value={sort}
      >
        <MenuItem value="Sort options" disabled>
          Sort options
        </MenuItem>
        <MenuItem value={SortDirection.NAME_A_TO_Z}>A-Z</MenuItem>
        <MenuItem value={SortDirection.NAME_Z_TO_A}>Z-A</MenuItem>
        <MenuItem value={SortDirection.PRICE_LOWER_TO}>Lower Price</MenuItem>
        <MenuItem value={SortDirection.PRICE_HIGHER_TO}>Higher Price</MenuItem>
      </TextField>
    </WidthBox>
  );
};

const WidthBox = styled.div`
  min-width: 140px;

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export default Sort;
