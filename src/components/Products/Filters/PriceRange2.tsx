import React, { useState, useEffect } from 'react';
import style from './RangeSlider.module.css';

import { useAppSelector, useAppDispatch } from '../../../hooks';
import { updateMinMaxPrice } from '../../../store/Slices/filtersSlice';

const PriceRange = () => {
  const { minMaxPrice } = useAppSelector((state) => state.products);
  const { reset, minMaxPrice: minMaxPriceFilt } = useAppSelector((state) => state.filters);

  //TODO: работать с редаксом. Попробывал, но тогда есть баги при установке мин маска.
  const [firstThumb, setFirstThumb] = useState(minMaxPrice.min);
  const [secondThumb, setSecondThumb] = useState(minMaxPrice.max);

  const dispatch = useAppDispatch();

  //NOTE: Это файл для тестов
  //NOTE: Это файл для тестов
  //NOTE: Это файл для тестов
  //NOTE: Это файл для тестов
  //NOTE: Это файл для тестов
  //NOTE: Это файл для тестов
  //NOTE: Это файл для тестов
  //NOTE: Это файл для тестов
  //NOTE: Это файл для тестов
  //NOTE: Это файл для тестов
  //NOTE: Это файл для тестов
  //NOTE: Это файл для тестов
  //NOTE: Это файл для тестов
  //NOTE: Это файл для тестов
  //NOTE: Это файл для тестов

  // Error:
  // При старте сменить границы прайса. (когда произойдет расчет макс и мин. цены продуктов) Или при сбросе фильтров
  useEffect(() => {
    setFirstThumb(minMaxPrice.min);
    setSecondThumb(minMaxPrice.max);
  }, [minMaxPrice, reset]);

  // Если фильтры не начального состояния, то установить их. Но тогда 2 разза set используется
  useEffect(() => {
    const [min, max] = minMaxPriceFilt;
    if (!isFinite(min) || !isFinite(max)) return;

    setFirstThumb(Math.min(min, max));
    setSecondThumb(Math.max(min, max));
  }, [minMaxPriceFilt]);

  const setMinHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstThumb(Number(e.target.value));
    dispatch(updateMinMaxPrice({ min: Number(e.target.value), max: secondThumb }));
  };

  const setMaxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondThumb(Number(e.target.value));
    dispatch(updateMinMaxPrice({ min: firstThumb, max: Number(e.target.value) }));
  };

  // 1) FIXME: Отображается правильно, но в фильтры идёт предпоследнее значение ползунка, из-за этого Баг фильтрации.
  // 2) FIXME: Оптимизировать обновление, чтоб не 1000 раз менялся фильтр. А например при отпускание интупа. В Реакте onChange работает по другому. Но как?_
  // 3) FIXME: слишком много операци Math.trunc мб уменьшить потом где
  // 4) FIXME: ТЬМААААААА БАГОВ, убил уже 3 дня на этот компонент........
  return (
    <div className={style.sliderBox}>
      <input
        className={style.slider}
        type="range"
        min={minMaxPrice.min}
        max={minMaxPrice.max}
        value={firstThumb}
        onChange={setMinHandler}
      />
      <input
        className={style.slider}
        type="range"
        min={minMaxPrice.min}
        max={minMaxPrice.max}
        value={secondThumb}
        onChange={setMaxHandler}
      />
      <div className={style.amount}>
        <span>min: {Math.min(firstThumb, secondThumb)} $</span>
        <span>max: {Math.max(firstThumb, secondThumb)} $</span>
      </div>
    </div>
  );
};

export default PriceRange;
