import React from 'react';
import styles from './categorySlide.module.css';
import Image from 'next/image';

const CategorySlide = ({ text, image }) => {
  return (
    <div className={styles.slide}>
      <Image src={image} width={120} height={120} alt={text} /> <p className={styles.title}>{text}</p>
    </div>
  );
};

export default CategorySlide;
