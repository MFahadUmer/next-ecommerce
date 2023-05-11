import React from 'react';
import styles from './SearchInput.module.css';

const SearchInput = ({ value = 'Search Products' }) => {
  return (
    <div className={styles.search_box}>
      <input
        placeholder={value}
        className={styles.input}
        type="text"
      />
    </div>
  );
};

export default SearchInput;
