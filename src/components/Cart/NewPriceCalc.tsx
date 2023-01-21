import React from 'react';

const NewPriceCalc: React.FC<{ price: number; discount: number }> = ({ price, discount }) => {
  const priceCalculated = (price - (price / 100) * discount).toFixed(2);

  return <p>Total: {priceCalculated} $</p>;
};

export default NewPriceCalc;
