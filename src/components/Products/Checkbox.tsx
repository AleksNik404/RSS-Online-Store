import React from 'react';
import { updateBrands, updateCategories } from '../../store/Slices/filtersSlice';
import { useAppSelector, useAppDispatch } from '../../hooks';

import styled from '@emotion/styled';

interface ICheckBox {
  type: 'brands' | 'categories';
  filterCount: number;
  allCount: number;
  brand: string;
}

const Checkbox: React.FC<ICheckBox> = ({ type, filterCount, allCount, brand }) => {
  const isCheckedtypes = useAppSelector((state) => state.filters[type]);
  const isSelectBrand = isCheckedtypes.includes(brand);

  const dispatch = useAppDispatch();

  const checkboxHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked: isChecked } = event.target;
    if (type === 'brands') dispatch(updateBrands({ value, isChecked }));
    if (type === 'categories') dispatch(updateCategories({ value, isChecked }));
  };

  return (
    <List key={brand} className={`${!filterCount && 'not-active'}`}>
      <label htmlFor={brand}>
        <input type="checkbox" value={brand} id={brand} checked={isSelectBrand} onChange={checkboxHandler} />
        {brand}
      </label>
      <span>
        ({filterCount}/{allCount})
      </span>
    </List>
  );
};

const List = styled.li`
  display: flex;
  gap: 10px;
  justify-content: space-between;

  & > label {
    display: flex;
    gap: 10px;
  }
`;

export default Checkbox;
