import React from 'react';
import styles from './SearchInput.module.css';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchInput = ({ value = 'Search for products' }) => {
  return (
    <div className={styles.search_box}>
      <input placeholder={value} className={styles.input} type="text" />
      <AiOutlineSearch className={styles.searchIcon} />
    </div>
  );
};

export default SearchInput;
