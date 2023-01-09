import React from 'react';
import styled from '@emotion/styled';
import { FaGithubSquare } from 'react-icons/Fa';

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <GitHubLink href="https://github.com/AleksNik404">
          <FaGithubSquare />
        </GitHubLink>

        <YearText>2022</YearText>
        <a href="https://rs.school/js/">RSS Logo</a>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 6px 40px;

  background-color: var(--main-bg-color-2);

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const GitHubLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 34px;
  transition: color 0.3s;

  &:hover {
    color: var(--primary-btn-color-5);
  }

  &:active {
    color: var(--primary-btn-color-3);
  }
`;

const YearText = styled.h3`
  transition: color 0.3s;

  &:hover {
    color: var(--primary-btn-color-5);
  }

  &:active {
    color: var(--primary-btn-color-3);
  }
`;

export default Footer;
