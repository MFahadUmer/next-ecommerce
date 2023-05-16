import React from 'react';
import Logo from './Logo';
import { TfiShoppingCartFull } from 'react-icons/tfi';
import { GrLocation } from 'react-icons/gr';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdOutlinePersonOutline } from 'react-icons/md';
import { CgShoppingBag } from 'react-icons/cg';
import SearchInput from '../styled-components/input/SearchInput';
import styles from './header.module.css';
import IconTextButton from '../styled-components/button/IconTextButton';
import Badge from '../styled-components/badge/Badge';

const Header = () => {
  return (
    <div className={styles.box}>
      <div className={styles.logo_search_box}>
        <Logo Icon={TfiShoppingCartFull} text="FreshCart" />
      </div>
      <div className={styles.searchInput}>
        <div className={styles.inputComponent}>
          <SearchInput />
        </div>
        <div className={styles.buttonComponent}>
          <IconTextButton Icon={GrLocation} name="Location" />
        </div>
      </div>
      <div className={styles.notification}>
        <Badge Icon={AiOutlineHeart} notification={5} />
        <Badge Icon={MdOutlinePersonOutline} />
        <Badge Icon={CgShoppingBag} notification={5} />
      </div>
    </div>
  );
};

export default Header;
