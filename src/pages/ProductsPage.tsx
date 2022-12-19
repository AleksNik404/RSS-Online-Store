import React from 'react';
import styled from '@emotion/styled';
import Sort from '../components/Products/Sort';
import Products from '../components/Products/Products';
import Filters from '../components/Products/Filters';

const ProductsPage = () => {
  return (
    <Container>
      <div className="container products">
        <Filters />
        <div className="products__box">
          <Sort />
          <Products />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 40px;

  .products {
    display: grid;
    grid-template-columns: minmax(min-content, 300px) 1fr;
    gap: 30px;
  }
`;

export default ProductsPage;
