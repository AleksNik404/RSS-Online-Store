import React, { useState, useEffect } from 'react';
import { SortDirection } from '../../types';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { sortItems } from '../../store/Slices/productsSlice';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

const Sort = () => {
  const { query } = useAppSelector((state) => state.products);
  const dispath = useAppDispatch();

  const [sortPlaceHolder, setSortPlaceHolder] = useState(query.sort || 'Sort options');
  const [searchParams, setSearchParams] = useSearchParams();

  const sortHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortPlaceHolder(event.target.value);
    dispath(sortItems(event.target.value));
  };

  useEffect(() => {
    for (const [name, value] of Object.entries(query)) {
      if (value) searchParams.set(name, value);
      else searchParams.delete(name);
    }
    setSearchParams(searchParams);
    const a = searchParams.get('sort');
    if (a) dispath(sortItems(a));
  }, [dispath, query, query.sort, searchParams, setSearchParams]);

  return (
    <select value={sortPlaceHolder} onChange={sortHandler}>
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
