// import { PayloadAction } from '@reduxjs/toolkit';
import React, { useState, useEffect } from 'react';
import style from './RangeSlider.module.css';

import { useAppSelector } from '../../../hooks';
import { useAppDispatch } from './../../../hooks';
import { updateMinMaxStock } from '../../../store/Slices/filtersSlice';

// interface IRange {
//   min: number;
//   max: number;
// }

const StockRange = () => {
  const { minMaxStock } = useAppSelector((state) => state.products);
  const { reset } = useAppSelector((state) => state.filters);

  const [firstThumb, setFirstThumb] = useState(minMaxStock.min);
  const [secondThumb, setSecondThumb] = useState(minMaxStock.max);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setFirstThumb(minMaxStock.min);
    setSecondThumb(minMaxStock.max);
  }, [minMaxStock, reset]);

  // //FIXME: Оптимизировать обновление, чтоб не 1000 раз менялся фильтр. А например при отпускание интупа. В Реакте onChange работает по другому. Тут костыль нужен.
  // useEffect(() => {
  //   dispatch(updateMinMaxStock({ min: firstThumb, max: secondThumb }));
  // }, [firstThumb, secondThumb]);

  return (
    <div className={style.sliderBox}>
      <input
        className={style.slider}
        type="range"
        min={minMaxStock.min}
        max={minMaxStock.max}
        value={firstThumb}
        // onClick={() => dispatch(updateMinMaxStock({ min: firstThumb, max: secondThumb }))}
        onChange={(e) => {
          dispatch(updateMinMaxStock({ min: firstThumb, max: secondThumb }));
          setFirstThumb(Number(e.target.value));
        }}
      />
      <input
        className={style.slider}
        type="range"
        min={minMaxStock.min}
        max={minMaxStock.max}
        value={secondThumb}
        // onClick={() => dispatch(updateMinMaxStock({ min: firstThumb, max: secondThumb }))}
        onChange={(e) => {
          dispatch(updateMinMaxStock({ min: firstThumb, max: secondThumb }));
          setSecondThumb(Number(e.target.value));
        }}
      />

      <div className={style.amount}>
        <span>min: {Math.min(firstThumb, secondThumb)}</span>
        <span>max: {Math.max(firstThumb, secondThumb)}</span>
      </div>
    </div>
  );
};

export default StockRange;
