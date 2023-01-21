import styled from '@emotion/styled';
import React from 'react';
import { ProductType } from '../../store/data/data2';
import AddCart from '../Products/AddCart';
import AddCartAndBuy from '../Products/AddCartAndBuy';
import Breadcrumbs from './SingleProduct/Breadcrumbs';
import DetailsBoxRow from './SingleProduct/DetailsBoxRow';
import ImagesBox from './SingleProduct/ImagesBox';

const SingleProduct: React.FC<{ product: ProductType }> = ({ product }) => {
  return (
    <Container className="container">
      <Breadcrumbs product={product} />
      <ImagesBox images={product.images} />
      <DetailsBox>
        <DetailsBox__heading>{product.title}</DetailsBox__heading>
        <DetailsBoxRow text="Category" value={product.category} />
        <DetailsBoxRow text="Manufacturer" value={product.Manufacturer} />
        <DetailsBoxRow text="Brand" value={product.brand} />
        <DetailsBoxRow text="Stock" value={product.stock} />
        <Price>
          <p>{product.price}$</p>
        </Price>
        <ButtonsBox>
          <AddCart amount={1} {...product} />
          <AddCartAndBuy {...product} />
        </ButtonsBox>
      </DetailsBox>
      <DescriptionBox>
        <h2>About</h2>
        <p>{product.description}</p>
        <p>{product.description2}</p>
      </DescriptionBox>
    </Container>
  );
};

const DetailsBox = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  gap: 10px;

  @media (max-width: 900px) {
    grid-column: 2 / -1;
  }

  @media (max-width: 710px) {
    grid-column: 1 / 3;
    justify-self: center;
    width: 300px;
  }
`;

const DetailsBox__heading = styled.h1`
  justify-self: center;
`;

const Price = styled.div`
  margin-top: 20px;
  font-size: 22px;
`;

const DescriptionBox = styled.div`
  grid-column: 1 / 2;

  display: flex;
  flex-direction: column;
  gap: 20px;

  font-size: 18px;

  @media (max-width: 900px) {
    grid-row: 3 / 4;
  }

  @media (max-width: 710px) {
    grid-column: 1 / 3;
    grid-row: 4 / 5;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 60px;

  max-width: 1280px;
  padding: 0 20px;

  @media (max-width: 1050px) {
    gap: 20px;
  }
`;

const ButtonsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
`;

export default SingleProduct;
