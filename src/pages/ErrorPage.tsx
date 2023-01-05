import React from 'react';
import { Link, useNavigate, useParams, useSearchParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import styled from '@emotion/styled';

const ErrorPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  // console.log(searchParams.get('a'));
  // console.log(searchParams.set('sort'));
  // console.log(searchParams);
  // console.log(location);

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

  /* flex: 0 1 300px; */
  & > div {
    /* width: 200px; */
    padding: 5px 10px;
    flex: 0 1 300px;

    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }

  & > button {
    background-color: transparent;
    border: solid 1px #f5f5f5;
    color: #f5f5f5;

    &:hover {
      border-color: #ff7043;
      color: #ff7043;
    }

    &:active {
      border-color: #ff5722;
      color: #ff5722;
    }
  }
`;

export default ErrorPage;
