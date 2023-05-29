import React from 'react';
import TextIconButton from '../styled-components/button/TextIconButton';
import { BsArrowRight } from 'react-icons/bs';

const BestSellerPromotionCard = () => {
  return (
    <div className="border-2 rounded-lg mx-2 relative h-full bg-cover bg-no-repeat bg-[url('/assets/images/banner-deal.jpg')]">
      <div className="m-6">
        <p className="text-2xl text-white font-bold">
          100% Organic Coffee Beans.
        </p>
        <p className="my-3 text-md text-white">
          Get the best deal before close.
        </p>
        <TextIconButton
          text={'Shop'}
          Icon={BsArrowRight}
          bgColor="green-600"
          hoverBgColor="green-700"
        />
      </div>
    </div>
  );
};

export default BestSellerPromotionCard;
