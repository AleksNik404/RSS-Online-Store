import React from 'react';
import styled from '@emotion/styled';
import { FaGithubSquare } from 'react-icons/Fa';

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <div>
          <a href="">
            <FaGithubSquare />
          </a>
          <a href="">
            <FaGithubSquare />
          </a>
        </div>
        <h3>2022</h3>
        <a href="">RSS Logo</a>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 40px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default Footer;
