import React from 'react';
import styles from './badge.module.css';

const Badge = ({ Icon, notification }) => {
  return (
    <div className={styles.box}>
      <div>
        <Icon className={styles.icon} />
      </div>
      {notification && (
        <div className={styles.notification}> {notification} </div>
      )}
    </div>
  );
};

export default Badge;
