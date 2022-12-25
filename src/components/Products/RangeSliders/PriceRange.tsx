import React, { useState, useEffect } from 'react';
import style from './RangeSlider.module.css';

import { useAppSelector, useAppDispatch } from '../../../hooks';
import { updateMinMaxPrice } from '../../../store/Slices/filtersSlice';

const PriceRange = () => {
  const { minMaxPrice } = useAppSelector((state) => state.products);
  const { reset } = useAppSelector((state) => state.filters);

  //TODO: работать с редаксом
  const [firstThumb, setFirstThumb] = useState(minMaxPrice.min);
  const [secondThumb, setSecondThumb] = useState(minMaxPrice.max);

  const dispatch = useAppDispatch();

  // При старте сменить границы прайса. (когда произойдет расчет макс и мин. цены продуктов) Или при сбросе фильтров
  useEffect(() => {
    setFirstThumb(minMaxPrice.min);
    setSecondThumb(minMaxPrice.max);
  }, [minMaxPrice, reset]);

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
        step={9}
        min={Math.trunc(minMaxPrice.min)}
        max={Math.ceil(minMaxPrice.max)}
        value={firstThumb}
        // onClick={() => dispatch(updateMinMaxPrice({ min: firstThumb, max: secondThumb }))}
        onChange={setMinHandler}
      />
      <input
        className={style.slider}
        type="range"
        // step={9}
        min={Math.trunc(minMaxPrice.min)}
        max={Math.ceil(minMaxPrice.max)}
        value={secondThumb}
        // onClick={() => dispatch(updateMinMaxPrice({ min: firstThumb, max: secondThumb }))}
        onChange={setMaxHandler}
      />
      <div className={style.amount}>
        <span>min: {Math.trunc(Math.min(firstThumb, secondThumb))} $</span>
        <span>max: {Math.ceil(Math.max(firstThumb, secondThumb))} $</span>
      </div>
    </div>
  );
};

export default PriceRange;
