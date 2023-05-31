import React from 'react';
import SimpleButton from '../styled-components/button/SimpleButton';

const PromotionCategoryCard = () => {
  return (
    <div className="rounded-lg h-52 bg-cover bg-no-repeat bg-[url('/assets/images/grocery-banner.png')] w-full">
      <div className="ml-8 mt-8">
        <h2 className="text-2xl font-bold text-slate-700">
          Fruits & Vegetables
        </h2>
        <p className="text-slate-500 text-base my-2 font-bold">
          Get Upto 30% Off
        </p>
        <div className="mt-4">
          <SimpleButton text="Shop Now" />
        </div>
      </div>
    </div>
  );
};

export default PromotionCategoryCard;
