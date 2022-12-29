import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import AddCart from '../components/Products/AddCart';
import AddCartAndBuy from '../components/Products/AddCartAndBuy';
import { useAppDispatch, useAppSelector } from '../hooks';
import ErrorPage from './ErrorPage';

const DetailsPage = () => {
  const { products } = useAppSelector((state) => state.products);

  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  const [selectedImg, setSelectedImg] = useState(product?.images[0]);

  const selectImgHandler = (index: number) => {
    setSelectedImg(product?.images[index]);
  };

  if (!product) return <ErrorPage />;

  return (
    <>
      <div className="container">
        Store / {product.category} / {product.brand} / {product.title}
      </div>
      <Container className="container">
        <ImagesBox>
          <MainImgBox>
            <MainImg src={selectedImg} alt="" />
          </MainImgBox>
          <OtherImgsBox>
            {product.images.map((img, index) => (
              <SmImageBox key={index} onClick={() => selectImgHandler(index)}>
                <SmallPhoto src={img} alt="" />
              </SmImageBox>
            ))}
          </OtherImgsBox>
        </ImagesBox>
        <DetailsBox>
          <h1>{product.title}</h1>
          <p>{product.category}</p>
          <p>{product.rating}</p>
          <p>{product.description}</p>
          <p>{product.description2}</p>
          <p>{product.stock}</p>
          <p>{product.brand}</p>
          <p>{product.price}</p>
          <AddCart {...product} />
          <AddCartAndBuy {...product} />
        </DetailsBox>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 6fr 4fr;
  gap: 30px;
`;

const ImagesBox = styled.div`
  display: grid;
  max-height: 500px;
  gap: 4px;
`;

const MainImgBox = styled.div`
  width: 100%;
  overflow: hidden;
`;

const MainImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

const OtherImgsBox = styled.div`
  display: grid;
  gap: 4px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px;
  /* max-height: 100px; */
`;

const SmImageBox = styled.div`
  /* height: 100%; */
  /* height: 50px; */
  /* width: 100px; */
`;

const SmallPhoto = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const DetailsBox = styled.div``;

export default DetailsPage;
