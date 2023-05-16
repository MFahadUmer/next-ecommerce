import React from 'react';
import styles from './IconTextButton.module.css';
const IconTextButton = ({ Icon, name = 'Submit' }) => {
  return (
    <div>
      <button className={styles.button}>
        <div className={styles.button_name}>
          {Icon && <Icon />} &nbsp; {name}
        </div>
      </button>
    </div>
  );
};

export default IconTextButton;
