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
    <Container className="container">
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
        <h1>{product.title}</h1>
        <p>{product.category}</p>
        <p>{product.rating}</p>
        {/* <p>{product.description}</p>
        <p>{product.description2}</p> */}
        <p>{product.stock}</p>
        <p>{product.brand}</p>
        <p>{product.price}</p>
        <AddCart amount={1} {...product} />
        <AddCartAndBuy {...product} />
      </DetailsBox>
    </Container>
  );
};

{
  /* <div className="container">
        Store / {product.category} / {product.brand} / {product.title}
      </div> */
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 6fr 4fr;
  gap: 30px;

  padding: 0 20px;
`;

const ImagesBox = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  /* grid-template-rows: 1fr 100px; */
  gap: 8px;
`;

const MainImgBox = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;

  /* align-items: flex-end; */

  border-radius: 5px;
  overflow: hidden;
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
  /* height: 100%; */
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

const DetailsBox = styled.div``;

export default DetailsPage;
