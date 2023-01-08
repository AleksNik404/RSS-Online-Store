import React from 'react';
import { updateBrands, updateCategories } from '../../store/Slices/filtersSlice';
import { useAppSelector, useAppDispatch } from '../../hooks';

import styled from '@emotion/styled';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { pink, blue, lightBlue } from '@mui/material/colors';

interface ICheckBox {
  type: 'brands' | 'categories';
  filterCount: number;
  allCount: number;
  brand: string;
}

const Checkbox2: React.FC<ICheckBox> = ({ type, filterCount, allCount, brand }) => {
  const isCheckedtypes = useAppSelector((state) => state.filters[type]);
  const isSelectBrand = isCheckedtypes.includes(brand);

  const dispatch = useAppDispatch();

  // При клике, добавить в массив фильтров название поля.
  const checkboxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked: isChecked } = event.target;
    if (type === 'brands') dispatch(updateBrands({ value, isChecked }));
    if (type === 'categories') dispatch(updateCategories({ value, isChecked }));
  };

  return (
    <ListItem key={brand} className={`${!filterCount && 'not-active'}`}>
      {/* <label htmlFor={brand}> */}
      {/* <input type="checkbox" value={brand} id={brand} checked={isSelectBrand} onChange={checkboxHandler} /> */}
      <FormControlLabel
        control={
          <Checkbox
            value={brand}
            checked={isSelectBrand}
            onChange={checkboxHandler}
            sx={{
              '&.Mui-checked': {
                color: blue[400],
              },
            }}
          />
        }
        label={brand}
      ></FormControlLabel>
      {/* {brand} */}
      {/* </label> */}
      <span>
        ({filterCount}/{allCount})
      </span>
    </ListItem>
  );
};

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* white-space: nowrap; */

  & > label {
    display: flex;
    /* gap: 10px; */
  }
`;

export default Checkbox2;
