import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useLocation, useParams, useNavigate, Link } from 'react-router-dom';
import AddCart from '../components/Products/AddCart';
import AddCartAndBuy from '../components/Products/AddCartAndBuy';
import { useAppDispatch, useAppSelector } from '../hooks';
import { resetFilters, updateFiltersByquery } from '../store/Slices/filtersSlice';
import { clearQuery } from '../store/Slices/productsSlice';
import ErrorPage from './ErrorPage';

const DetailsPage = () => {
  const { products, query } = useAppSelector((state) => state.products);
  const filters = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();

  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  const [selectedImg, setSelectedImg] = useState(product?.images[0]);

  const selectImgHandler = (index: number) => {
    setSelectedImg(product?.images[index]);
  };

  const resetOptions = () => {
    dispatch(resetFilters());
    dispatch(clearQuery());
  };

  // Нужно учить TS. Уже какой раз спотыкаюсь сделать универсальный метод, но тс не дает.
  const historyHandler1 = () => {
    // TODO: Не обновляялось почему-то query пришлось на прямую стирать всё -_-
    resetOptions();
    dispatch(updateFiltersByquery({ categories: product?.category, brands: '' }));
  };
  const historyHandler2 = () => {
    // TODO: Не обновляялось почему-то query пришлось на прямую стирать всё -_-
    resetOptions();
    dispatch(updateFiltersByquery({ categories: product?.category, brands: product?.brand }));
  };

  if (!product) return <ErrorPage />;

  return (
    <Container className="container">
      <History>
        <Link className="history-link" to="/" onClick={resetOptions}>
          Store
        </Link>
        <Link className="history-link" to="/" onClick={historyHandler1}>
          {product.category}
        </Link>
        <Link className="history-link" to="/" onClick={historyHandler2}>
          {product.brand}
        </Link>
        <span>{product.title}</span>
      </History>
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
        <DetailsBox__row>
          <p>Category</p>
          <p>{product.category}</p>
        </DetailsBox__row>
        <DetailsBox__row>
          <p>Manufacturer</p>
          <p>{product.Manufacturer}</p>
        </DetailsBox__row>
        <DetailsBox__row>
          <p>Brand</p>
          <p>{product.brand}</p>
        </DetailsBox__row>
        <DetailsBox__row>
          <p>Stock</p>
          <p>{product.stock}</p>
        </DetailsBox__row>
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

const History = styled.div`
  grid-column: 1 / -1;
  justify-self: start;

  display: flex;
  gap: 5px;

  & > .history-link:hover {
    color: #007df5;
  }

  & > .history-link::after {
    content: '/';
    display: inline-block;
    margin-left: 5px;

    pointer-events: none;
  }
`;

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
  /* width: 100%; */
  max-height: 600px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  /* align-items: flex-start; */

  border-radius: 5px;
  overflow: hidden;

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
  /* grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px; */
  /* max-height: 100px; */
`;

const SmImageBox = styled.div`
  max-height: 75px;
  max-width: 120px;

  border-radius: 5px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
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
