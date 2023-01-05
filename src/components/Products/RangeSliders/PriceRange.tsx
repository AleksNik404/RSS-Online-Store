import React, { useState, useEffect } from 'react';
import style from './RangeSlider.module.css';

import { useAppSelector, useAppDispatch } from '../../../hooks';
import { updateMinMaxPrice } from '../../../store/Slices/filtersSlice';
import { useSearchParams } from 'react-router-dom';

const PriceRange = () => {
  const { minMaxPrice } = useAppSelector((state) => state.products);
  const { reset } = useAppSelector((state) => state.filters);

  const [searchParams, setSearchParams] = useSearchParams();

  const minMax = searchParams.get('minMaxPrice')?.split('↕');

  //TODO: работать с редаксом
  // Если есть параметры ставлю с них диапозон. Иначе заглушку и после useffect выставит когда подсчитает другая функция актуальный min max
  const [firstThumb, setFirstThumb] = useState(minMax ? Number(minMax[0]) : minMaxPrice.min);
  const [secondThumb, setSecondThumb] = useState(minMax ? Number(minMax[1]) : minMaxPrice.max);

  const dispatch = useAppDispatch();

  // При старте сменить границы прайса. (когда произойдет расчет макс и мин. цены продуктов)
  useEffect(() => {
    if (minMax) return;

    setFirstThumb(minMaxPrice.min);
    setSecondThumb(minMaxPrice.max);
  }, [minMax, minMaxPrice]);

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
