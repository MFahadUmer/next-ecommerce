import React from 'react';
import styles from './texticonbutton.module.css';

const TextIconButton = ({ text, Icon }) => {
  return (
    <button className={styles.button}>
      <div className={styles.button__box}>
        {text} <Icon className={styles.icon} />
      </div>
    </button>
  );
};

export default TextIconButton;
