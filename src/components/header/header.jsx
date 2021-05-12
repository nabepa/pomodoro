import styles from './header.module.css';

import React from 'react';

const Header = (props) => (
  <header className={styles.header}>
    <button className={`${styles.logInOut} material-icons`}>login</button>
    <button className={`${styles.insights} material-icons`}>insights</button>
    <button className={`${styles.settings} material-icons`}>settings</button>
  </header>
);

export default Header;
