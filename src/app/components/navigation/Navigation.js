import React from 'react';
import styles from './Navigation.module.css';
import DropdownMenu from './DropdownMenu';
import navigation from '@/app/mock/navigation';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navigation}>
        {navigation.map((item, index) => (
          <li
            key={index}
            className={
              item.linkTitle === 'All Departments'
                ? styles.firstLink
                : styles.dropdown
            }
          >
            <Link href="/">{item.linkTitle}</Link>
            {item?.dropdown?.length > 0 ? (
              <div className={styles.dropdown_content}>
                <DropdownMenu
                  type={item.dropdownType}
                  dropdown={item.dropdown}
                />
              </div>
            ) : (
              ''
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
