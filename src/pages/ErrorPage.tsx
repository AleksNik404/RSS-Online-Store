import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Container className="container">
      <div>
        <h1>Holy 404 error</h1>
        <p>The page you`re looking for does not exist.</p>

        <button onClick={() => navigate('/', { replace: true })}>Go products page</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;

  align-items: center;
  justify-content: center;

  & > div {
    padding: 5px 10px;
    flex: 0 1 300px;

    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;

    & > button {
      background-color: transparent;
      border: solid 1px var(--secondary-btn-color-4);

      color: var(--secondary-btn-color-4);
      padding: 10px 20px;

      cursor: pointer;

      &:hover {
        border: solid 1px var(--secondary-btn-color-1);
        color: var(--secondary-btn-color-1);
      }

      &:active {
        border: solid 1px var(--secondary-btn-color-1);
        color: var(--secondary-btn-color-1);
      }
    }
  }
`;

export default ErrorPage;
