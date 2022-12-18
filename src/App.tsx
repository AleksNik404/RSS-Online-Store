import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartPage, DetailsPage, ErrorPage, ProductsPage } from './pages';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/:id" element={<DetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
