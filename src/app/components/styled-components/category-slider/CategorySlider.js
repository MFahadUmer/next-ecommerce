import React from 'react';
import styles from './categorySlider.module.css';
import CategorySlide from './CategorySlide';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import CategorySlides from '@/app/mock/category_slider';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const CategorySlider = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      breakpoints: {
        '(min-width: 400px)': {
          slides: { perView: 2, spacing: 10 },
        },
        '(min-width: 820px)': {
          slides: { perView: 4, spacing: 15 },
        },
        '(min-width: 1400px)': {
          slides: { perView: 6, spacing: 15 },
        },
      },
      loop: true,
      slides: { perView: 1 },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <div className={styles.slider}>
      <div className={styles.slider__header}>
        <h2 className="my-6 text-2xl font-bold text-slate-700">
          Featured Categories
        </h2>
        <div className={styles.arrows__container}>
          <IoIosArrowBack
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
            className={styles.arrow}
          />
          <IoIosArrowForward
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
            className={styles.arrow}
          />
        </div>
      </div>
      <div className={styles.category__slider}>
        <div ref={sliderRef} className="keen-slider">
          {CategorySlides?.length > 0
            ? CategorySlides.map((item, index) => (
                <div
                  key={index}
                  className={`keen-slider__slide  ${styles.number__slide}`}
                >
                  <CategorySlide text={item.title} image={item.image} />
                </div>
              ))
            : ''}
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;
