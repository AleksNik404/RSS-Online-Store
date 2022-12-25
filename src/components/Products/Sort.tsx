import React from 'react';
import { SortDirection } from '../../types';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { sortItems } from '../../store/Slices/productsSlice';
import { updateSortType } from '../../store/Slices/productsSlice';

const Sort = () => {
  const dispath = useAppDispatch();
  const { sort } = useAppSelector((state) => state.products.query);

  // При смене селекта, отсортировать продукты и обновить название сортировки
  const sortHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispath(updateSortType(event.target.value));
    //TODO: Понять почему работает без нижней функции, и почему есть баг при сортировке.
    // dispath(sortItems(event.target.value));
  };

  return (
    <select onChange={sortHandler} value={sort}>
      <option value="Sort options" disabled>
        Sort options
      </option>
      <option value={SortDirection.NAME_A_TO_Z}>Sort By: A-Z</option>
      <option value={SortDirection.NAME_Z_TO_A}>Sort By: Z-A</option>
      <option value={SortDirection.PRICE_LOWER_TO}>Sort By: Lower Price</option>
      <option value={SortDirection.PRICE_HIGHER_TO}>Sort By: Higher Price</option>
    </select>
  );
};

export default Sort;
