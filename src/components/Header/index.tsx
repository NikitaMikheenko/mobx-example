import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

const Header: FC = () => (
  <header className={styles.header}>
    <nav className={styles.headerNav}>
      <Link to="/flow-image">Flow image</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/form">Form</Link>
      <Link to="/todo-list">{`Todo list`}</Link>
    </nav>
  </header>
);

export default Header;
