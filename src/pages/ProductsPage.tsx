import React from 'react';
import styled from '@emotion/styled';
import SortPanel from '../components/Products/SortPanel';
import Products from '../components/Products/Products';
import Filters from '../components/Products/Filters';

const ProductsPage = () => {
  return (
    <Container>
      <div className="container products">
        <Filters />
        <div className="products__box">
          <SortPanel />
          <Products />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 20px;

  & > .products {
    display: grid;
    grid-template-columns: minmax(160px, 270px) 1fr;
    gap: 30px;
  }
`;

export default ProductsPage;
