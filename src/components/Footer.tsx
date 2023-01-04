import React from 'react';
import styled from '@emotion/styled';
import { FaGithubSquare } from 'react-icons/Fa';

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <div>
          <a href="https://github.com/AleksNik404">
            <FaGithubSquare />
          </a>
        </div>
        <h3>2022</h3>
        <a href="https://rs.school/js/">RSS Logo</a>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px 40px;

  background-color: var(--main-bg-color-2);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default Footer;
