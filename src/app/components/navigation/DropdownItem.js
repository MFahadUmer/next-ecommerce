import React from 'react';
import styles from './dropdownitem.module.css';

const DropdownItem = ({ title }) => {
  return <div className={styles.dropdownitem}>{title}</div>;
};

export default DropdownItem;
