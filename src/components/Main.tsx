import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartPage, DetailsPage, ErrorPage, ProductsPage } from '../pages';
import styled from '@emotion/styled';

const Main = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Container>
  );
};

const Container = styled.div`
  padding: 80px 0px 140px 0px;
  flex: 1 0 auto;

  background-color: var(--main-bg-color-1);
`;

export default Main;
