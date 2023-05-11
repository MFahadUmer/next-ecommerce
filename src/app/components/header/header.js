import React from 'react';
import Logo from './Logo';
import { TfiShoppingCartFull } from 'react-icons/tfi';
import SearchInput from '../input/SearchInput';
import styles from './header.module.css';
import IconTextButton from '../button/IconTextButton';

const Header = () => {
  return (
    <div>
      <div className={styles.logo_search_box}>
        <Logo Icon={TfiShoppingCartFull} text="FreshCart" />
        <div className={styles.searchInput}>
          <SearchInput />
          <IconTextButton Icon={TfiShoppingCartFull} name="Locaion" />
        </div>
      </div>
    </div>
  );
};

export default Header;
