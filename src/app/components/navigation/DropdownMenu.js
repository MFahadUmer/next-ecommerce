import React from 'react';
import styles from './dropdownmenu.module.css';
import DropdownItem from './DropdownItem';

const DropdownMenu = ({ type, dropdown }) => {
  return (
    <div className={styles.box}>
      {dropdown.length > 0
        ? dropdown.map((item, index) => (
            <DropdownItem key={index} title={item.title} />
          ))
        : ''}
    </div>
  );
};

export default DropdownMenu;
