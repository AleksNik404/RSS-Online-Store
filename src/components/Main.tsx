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
  padding: 0 40px;
  flex: 1 0 auto;
`;

export default Main;
