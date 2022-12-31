import styled from '@emotion/styled';
import React from 'react';

const ModalBuy = () => {
  return (
    <Pop>
      <Container>
        <h3>Personal details</h3>
        <input type="text" />
        <input type="phone" />
        <input type="text" />
        <input type="email" />
      </Container>
    </Pop>
  );
};

const Pop = styled.div``;
const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 15;

  background-color: red;
  width: 40%;
  height: 70%;
  display: flex;
  flex-direction: column;
`;

export default ModalBuy;
