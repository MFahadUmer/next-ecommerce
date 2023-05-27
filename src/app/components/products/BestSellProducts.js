import React from 'react';
import bestsellproducts from '@/app/mock/bestsellproducts';
import BestSellProductCard from './BestSellProductCard';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import BestSellerPromotionCard from './BestSellerPromotionCard';

const BestSellProducts = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      '(min-width: 400px)': {
        slides: { perView: 1, spacing: 10 },
      },
      '(min-width: 756px)': {
        slides: { perView: 2, spacing: 15 },
      },
      '(min-width: 990px)': {
        slides: { perView: 4, spacing: 15 },
      },
    },
    mode: 'free',
    slides: { perView: 1 },
  });

  return (
    <div>
      <h2 className=" my-6 text-2xl font-bold text-slate-700">
        Daily Best Sells
      </h2>
      <div className="flex w-full overflow-x-auto">
        <div className=" grow-0 shrink-0 basis-full lg:basis-1/4 md:basis-1/2">
          <BestSellerPromotionCard />
        </div>
        {bestsellproducts?.length > 0
          ? bestsellproducts.map((item, index) => (
              <BestSellProductCard key={index} item={item} />
            ))
          : ''}
      </div>
    </div>
  );
};

export default BestSellProducts;
