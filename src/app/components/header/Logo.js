import React from 'react';

import styles from './header.module.css';
const Logo = ({ text, Icon }) => {
  return (
    <div className={styles.logo}>
      <Icon className={styles.icon} />
      <h2>{text}</h2>
    </div>
  );
};

export default Logo;
