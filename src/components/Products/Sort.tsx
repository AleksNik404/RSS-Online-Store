import React from 'react';
import { SortDirection } from '../../types';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { sortItems } from '../../store/Slices/productsSlice';
import { setSortFilter } from '../../store/Slices/filtersSlice';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
// import { updateSortType } from '../../store/Slices/productsSlice';

const Sort = () => {
  const dispath = useAppDispatch();
  const { sort } = useAppSelector((state) => state.filters);

  // При смене селекта, отсортировать продукты и обновить название сортировки
  const sortHandler = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    dispath(setSortFilter(event.target.value));
    dispath(sortItems(event.target.value));
    // dispath(updateSortType(event.target.value));
    //TODO: Понять почему работает без нижней функции, и почему есть баг при сортировке.
  };

  return (
    <WidthBox>
      <TextField
        id="filled-select-currency"
        select
        // label="Sort options"
        label={`${sort === 'Sort options' ? '' : 'Sort By:'}`}
        // defaultValue="Sort options"
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
        {/* {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))} */}
      </TextField>
    </WidthBox>

    /* <select onChange={sortHandler} value={sort}>
          <option value="Sort options" disabled>
            Sort options
          </option>
          <option value={SortDirection.NAME_A_TO_Z}>Sort By: A-Z</option>
          <option value={SortDirection.NAME_Z_TO_A}>Sort By: Z-A</option>
          <option value={SortDirection.PRICE_LOWER_TO}>Sort By: Lower Price</option>
          <option value={SortDirection.PRICE_HIGHER_TO}>Sort By: Higher Price</option>
        </select> */
  );
};

const WidthBox = styled.div`
  min-width: 140px;

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export default Sort;
