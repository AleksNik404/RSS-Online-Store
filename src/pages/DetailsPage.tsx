import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import ErrorPage from './ErrorPage';

const DetailsPage = () => {
  const { products } = useAppSelector((state) => state.products);

  // const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <ErrorPage />;
  }

  return <div>DA PIZDES</div>;
};

export default DetailsPage;
