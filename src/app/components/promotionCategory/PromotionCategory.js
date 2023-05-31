import React from 'react';
import PromotionCardCategoryCard from './PromotionCardCategoryCard';

const PromotionCategory = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:my-12">
      <PromotionCardCategoryCard />
      <PromotionCardCategoryCard />
    </div>
  );
};

export default PromotionCategory;
