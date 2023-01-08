import React, { useState, useEffect } from 'react';
import style from './RangeSlider.module.css';

import { useAppSelector, useAppDispatch } from '../../../hooks';
import { updateMinMaxPrice } from '../../../store/Slices/filtersSlice';
import { useSearchParams } from 'react-router-dom';
import styled from '@emotion/styled';

// FIXME: В итоге у меня получилось 2 абсолютно похожих компонента... PriceRange - StockRange
const PriceRange = () => {
  const { minMaxPrice } = useAppSelector((state) => state.products);
  const { reset } = useAppSelector((state) => state.filters);

  const [searchParams, setSearchParams] = useSearchParams();

  const input = React.useRef<HTMLInputElement>(null);
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
  }, [minMax, minMaxPrice, reset]);

  // Долго мучал debounce из lodash но было куча багов, а в итоге обычный таймаут в useEffect все решил.
  useEffect(() => {
    const timer = setTimeout(() => dispatch(updateMinMaxPrice({ min: firstThumb, max: secondThumb })), 80);
    return () => clearTimeout(timer);
  }, [dispatch, firstThumb, secondThumb]);

  const setMinHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e);
    setFirstThumb(Number(e.target.value));
  };

  const setMaxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSecondThumb(Number(e.target.value));
  };

  // Для того чтоб изменялся цвет между диапазона range
  // Думается можно было сделать лучше
  if (input.current) {
    const min = +input.current.min;
    const max = +input.current.max;

    const range = max - min;
    const onePercentValue = range / 100;

    const leftPerc = (Math.min(firstThumb, secondThumb) - min) / onePercentValue;
    const RightPerc = (Math.max(firstThumb, secondThumb) - min) / onePercentValue;

    input.current.style.background = `linear-gradient(
      to right,
      #c6c6c6 ${leftPerc}%,
      var(--primary-btn-color-4) ${leftPerc}%,
      var(--primary-btn-color-4) ${RightPerc}%,
      #c6c6c6 ${RightPerc}%
    )`;
  }

  return (
    <div className={style.sliderBox}>
      {/* <RangeFillColor></RangeFillColor> */}
      <input
        className={style.slider}
        type="range"
        min={minMaxPrice.min}
        max={minMaxPrice.max}
        value={firstThumb}
        onChange={setMinHandler}
      />
      <input
        ref={input}
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

const RangeFillColor = styled.div`
  /* height: 100%;
  width: 100%;
  background-color: red;

  position: absolute;
  left: 0;
  top: 0; */
`;

export default PriceRange;
