import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';

import { useAppSelector } from '../hooks';
import ErrorPage from './ErrorPage';
import AddCart from '../components/Products/AddCart';
import AddCartAndBuy from '../components/Products/AddCartAndBuy';
import Breadcrumbs from '../components/Details/Breadcrumbs';
import DetailsBoxRow from '../components/Details/DetailsBoxRow';

const DetailsPage = () => {
  const { products } = useAppSelector((state) => state.products);
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  const [selectedImg, setSelectedImg] = useState<string | undefined>(product?.images[0]);

  const selectImgHandler = (index: number) => {
    setSelectedImg(product?.images[index]);
  };

  if (!product) return <ErrorPage />;

  return (
    <Container className="container">
      <Breadcrumbs product={product} />
      <ImagesBox>
        <OtherImgsBox>
          {product.images.map((img, index) => (
            <SmImageBox key={index} onClick={() => selectImgHandler(index)}>
              <SmallPhoto src={img} alt="" />
            </SmImageBox>
          ))}
        </OtherImgsBox>
        <MainImgBox>
          <MainImg src={selectedImg} alt="" />
        </MainImgBox>
      </ImagesBox>
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

const DetailsBox__row = styled.div`
  display: flex;
  justify-content: space-between;
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

const ImagesBox = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 8px;

  @media (max-width: 900px) {
    grid-column: 1 / -1;
  }
`;

const MainImgBox = styled.div`
  max-height: 600px;
  border-radius: 5px;
  overflow: hidden;

  display: flex;
  justify-content: center;

  background-color: var(--main-bg-color-2);
`;

const MainImg = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
`;

const OtherImgsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SmImageBox = styled.div`
  max-height: 75px;
  max-width: 120px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
`;

const SmallPhoto = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

const ButtonsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
`;

export default DetailsPage;
