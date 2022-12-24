import React, { useState, useEffect } from 'react';
import style from './RangeSlider.module.css';

import { useAppSelector } from '../../../hooks';
import { useAppDispatch } from './../../../hooks';
import { updateMinMaxPrice } from '../../../store/Slices/filtersSlice';

const PriceRange = () => {
  const { filterProducts, minMaxPrice, minMaxFiltPrice } = useAppSelector((state) => state.products);
  const { reset } = useAppSelector((state) => state.filters);

  const [firstThumb, setFirstThumb] = useState(minMaxPrice.min);
  const [secondThumb, setSecondThumb] = useState(minMaxPrice.max);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setFirstThumb(minMaxPrice.min);
    setSecondThumb(minMaxPrice.max);
  }, [minMaxPrice, reset]);

  //FIXME: Оптимизировать обновление, чтоб не 1000 раз менялся фильтр. А например при отпускание интупа. В Реакте onChange работает по другому. Тут костыль нужен.
  // useEffect(() => {
  //   dispatch(updateMinMaxPrice({ min: firstThumb, max: secondThumb }));
  // }, [firstThumb, secondThumb]);

  return (
    <div className={style.sliderBox}>
      <input
        className={style.slider}
        type="range"
        step={9}
        min={Math.trunc(minMaxPrice.min)}
        max={Math.ceil(minMaxPrice.max)}
        value={firstThumb}
        // onClick={() => dispatch(updateMinMaxPrice({ min: firstThumb, max: secondThumb }))}
        onChange={(e) => {
          dispatch(updateMinMaxPrice({ min: firstThumb, max: secondThumb }));
          setFirstThumb(Number(e.target.value));
          console.log(firstThumb, secondThumb);
        }}
      />
      <input
        className={style.slider}
        type="range"
        // step={9}
        min={Math.trunc(minMaxPrice.min)}
        max={Math.ceil(minMaxPrice.max)}
        value={secondThumb}
        // onClick={() => dispatch(updateMinMaxPrice({ min: firstThumb, max: secondThumb }))}
        onChange={(e) => {
          dispatch(updateMinMaxPrice({ min: firstThumb, max: secondThumb }));
          setSecondThumb(Number(e.target.value));
          console.log(firstThumb, secondThumb);
        }}
      />
      {/* FIXME: слишком много операци Math.trunc мб уменьшить потом где */}
      <div className={style.amount}>
        <span>min: {Math.trunc(Math.min(firstThumb, secondThumb))} $</span>
        <span>max: {Math.ceil(Math.max(firstThumb, secondThumb))} $</span>
      </div>
    </div>
  );
};

export default PriceRange;
