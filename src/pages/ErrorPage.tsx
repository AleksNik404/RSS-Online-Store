import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/', { replace: true }), 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <h1>Holy 404 error</h1>
      <p>The page you`re looking for does not exist.</p>

      <button onClick={() => navigate('/', { replace: true })}>Go products page</button>
    </div>
  );
};

export default ErrorPage;
