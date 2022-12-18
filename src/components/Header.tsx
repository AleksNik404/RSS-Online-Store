import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={styles.ha}>Header</h1>
      <Link to="/">products </Link>
      <Link to="/cart">cart </Link>
    </div>
  );
};

export default Header;
