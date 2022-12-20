import React from 'react';
import style from './RangeSlider.module.css';

const RangeSlider = () => {
  return (
    <div className={style.sliderBox}>
      <input className={style.slider} type="range" />
      <div className={style.amount}>
        <span>min: 0</span>
        <span>max: 0</span>
      </div>
    </div>
  );
};

export default RangeSlider;
