import styles from './footer.module.css';
import React, { memo } from 'react';

const Footer = memo((props) => (
  <footer className={styles.footer}>
    <span className={`${styles.test} material-icons`}>takeout_dining</span>
  </footer>
));

export default Footer;
