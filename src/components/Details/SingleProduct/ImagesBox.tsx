import React, { useState } from 'react';
import styled from '@emotion/styled';

const ImagesBox: React.FC<{ images: string[] }> = ({ images }) => {
  const [selectedImg, setSelectedImg] = useState<string>(images[0]);

  const selectImgHandler = (index: number) => {
    setSelectedImg(images[index]);
  };

  return (
    <Container>
      <OtherImgsBox>
        {images.map((img, index) => (
          <SmImageBox key={index} onClick={() => selectImgHandler(index)}>
            <SmallPhoto src={img} alt="" />
          </SmImageBox>
        ))}
      </OtherImgsBox>
      <MainImgBox>
        <MainImg src={selectedImg} alt="" />
      </MainImgBox>
    </Container>
  );
};

const Container = styled.div`
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

export default ImagesBox;
