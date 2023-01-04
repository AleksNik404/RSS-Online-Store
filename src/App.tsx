import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import styled from '@emotion/styled';
import { CartPage, DetailsPage, ErrorPage, ProductsPage } from './pages';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  width: 100%;
`;

export default App;
