import React from 'react';
import bestsellproducts from '@/app/mock/bestsellproducts';
import BestSellProductCard from './BestSellProductCard';
import BestSellerPromotionCard from './BestSellerPromotionCard';

const BestSellProducts = () => {
  return (
    <div>
      <h2 className=" my-6 text-2xl font-bold text-slate-700">
        Daily Best Sells
      </h2>
      <div className="flex w-full justify-between  overflow-x-auto gap-4">
        <div className="grow-0 shrink-0 basis-full lg:basis-[24%] md:basis-[calc(50%-16px)]">
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
