import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';

import { useAppSelector } from '../hooks';
import ErrorPage from './ErrorPage';
import SingleProduct from '../components/Details/SingleProduct';

const DetailsPage = () => {
  const { products } = useAppSelector((state) => state.products);
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <ErrorPage />;
  }
  return <SingleProduct product={product} />;
};

export default DetailsPage;
