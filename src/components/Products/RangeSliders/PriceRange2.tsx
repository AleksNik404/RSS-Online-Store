import React, { useState, useEffect } from 'react';
import style from './RangeSlider.module.css';

import { useAppSelector, useAppDispatch } from '../../../hooks';
import { updateMinMaxPrice } from '../../../store/Slices/filtersSlice';

const PriceRange2 = () => {
  const { minMaxPrice } = useAppSelector((state) => state.products);
  const [minPriceFilt, maxPriceFilt] = useAppSelector((state) => state.filters.minMaxPrice);
  const { reset } = useAppSelector((state) => state.filters);

  const dispatch = useAppDispatch();

  //TODO:  Это тестовый компонет.
  //TODO:  Это тестовый компонет.
  //TODO:  Это тестовый компонет.
  //TODO:  Это тестовый компонет.
  //TODO:  Это тестовый компонет.
  //TODO:  Это тестовый компонет.
  //TODO:  Это тестовый компонет.
  //TODO:  Это тестовый компонет.
  //TODO:  Это тестовый компонет.
  //TODO:  Это тестовый компонет.

  // При старте сменить границы прайса. (когда произойдет расчет макс и мин. цены продуктов) Или при сбросе фильтров
  useEffect(() => {
    updateMinMaxPrice({ min: minMaxPrice.min, max: minMaxPrice.max });
  }, [reset]);

  // 1) FIXME: Отображается правильно, но в фильтры идёт предпоследнее значение ползунка, из-за этого Баг фильтрации.
  // 2) FIXME: Оптимизировать обновление, чтоб не 1000 раз менялся фильтр. А например при отпускание интупа. В Реакте onChange работает по другому. Но как?_
  // 3) FIXME: слишком много операци Math.trunc мб уменьшить потом где
  return (
    <div className={style.sliderBox}>
      <input
        className={style.slider}
        type="range"
        step="10"
        min={Math.trunc(minMaxPrice.min)}
        max={Math.ceil(minMaxPrice.max)}
        value={minPriceFilt}
        onChange={(e) => {
          dispatch(updateMinMaxPrice({ min: Number(e.target.value), max: maxPriceFilt }));
        }}
      />
      <input
        className={style.slider}
        type="range"
        step="10"
        min={Math.trunc(minMaxPrice.min)}
        max={Math.ceil(minMaxPrice.max)}
        value={maxPriceFilt}
        onChange={(e) => {
          dispatch(updateMinMaxPrice({ min: minPriceFilt, max: Number(e.target.value) }));
        }}
      />
      <div className={style.amount}>
        <span>min: {Math.trunc(Math.min(minPriceFilt, maxPriceFilt))} $</span>
        <span>max: {Math.ceil(Math.max(minPriceFilt, maxPriceFilt))} $</span>
      </div>
    </div>
  );
};

export default PriceRange2;
