import React from 'react';
import styles from './slide.module.css';
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import TextIconButton from '../button/TextIconButton';

const Slide = ({
  promotionText,
  title,
  titleSpan,
  subTitle,
  buttonText,
  background,
}) => {
  return (
    <div className={styles.box}>
      <div>
        <Image
          src={background}
          fill={true}
          className={styles.image}
          alt="dummy"
        />
      </div>
      <div className={styles.banner__box}>
        {promotionText && (
          <p className={styles.promotionText}>{promotionText}</p>
        )}
        {title && (
          <h4 className={styles.title}>
            {title} &nbsp;
            {titleSpan && <span className={styles.titleSpan}>{titleSpan}</span>}
          </h4>
        )}
        {subTitle && <p className={styles.subtitle}>{subTitle}</p>}
        <div>
          <TextIconButton
            bgColor="bg-slate-700"
            text={buttonText}
            Icon={BsArrowRight}
            hoverBgColor="hover:bg-slate-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Slide;
