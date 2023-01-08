import React from 'react';
import { useAppSelector } from '../../hooks';
import { Link, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import AddCart from './AddCart';
import Rating from '@mui/material/Rating';
import blue from '@mui/material/colors/blue';

const BigGridList = () => {
  const { filterProducts } = useAppSelector((state) => state.products);
  const navigate = useNavigate();

  return (
    <Container>
      {filterProducts.map((item) => {
        return (
          <Item key={item.id}>
            <ImgBox onClick={() => navigate(`/details/${item.id}`)}>
              <Image src={item.thumbnail} alt={item.title} />
            </ImgBox>
            <Description>
              <Text>
                <Heading onClick={() => navigate(`/details/${item.id}`)}>{item.title}</Heading>
                <TypeBox>
                  <Type>{item.category}</Type>
                  <Rating
                    sx={{
                      '&.MuiRating-root': {
                        color: blue[400],
                      },
                    }}
                    name="read-only"
                    value={item.rating}
                    size="small"
                    precision={0.25}
                    readOnly
                  />
                  {/* {item.rating} */}
                </TypeBox>
                <p>{item.description}</p>
                <p>{item.description2}</p>
              </Text>
              <PriceBlock>
                <p>{item.price.toFixed(2)} $</p>

                <AddCart amount={1} {...item} />
              </PriceBlock>
            </Description>
          </Item>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  gap: 40px;
`;

const Item = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 350px 1fr;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-height: 350px;
  background-color: #333;
  cursor: pointer;
`;
const Image = styled.img`
  max-height: 90%;
  max-width: 80%;
  object-fit: cover;
  object-position: center;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 50px;
`;

const Heading = styled.h2`
  margin-bottom: -15px;
  cursor: pointer;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Type = styled.p`
  font-size: 14px;
  color: #aaa;
`;

const TypeBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const PriceBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default BigGridList;
