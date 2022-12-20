import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';

const DetailsPage = () => {
  const { products } = useAppSelector((state) => state.products);

  const location = useLocation();
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  console.log(location);
  console.log(id);
  console.log(product);

  return <div>DetailsPage</div>;
};

export default DetailsPage;
