import React from 'react';
import PromotionCategoryCard from './PromotionCategoryCard';

const PromotionCategory = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:my-12">
      <PromotionCategoryCard />
      <PromotionCategoryCard />
    </div>
  );
};

export default PromotionCategory;
