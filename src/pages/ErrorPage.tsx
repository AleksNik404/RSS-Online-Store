import React from 'react';
import { Link, useNavigate, useParams, useSearchParams, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ErrorPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  // console.log(searchParams.get('a'));
  // console.log(searchParams.set('sort'));
  // console.log(searchParams);
  // console.log(location);

  return (
    <div>
      <h1>Holy 404 error</h1>
      <p>The page you`re looking for does not exist.</p>

      <button onClick={() => navigate('/', { replace: true })}>Go products page</button>
    </div>
  );
};

export default ErrorPage;
