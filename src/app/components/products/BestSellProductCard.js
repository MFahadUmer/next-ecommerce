import React from 'react';
import Image from 'next/image';
import ReactStars from 'react-stars';
import ProductHover from './ProductHover';
import StyledCountdown from '../countdown/StyledCountdown';

const BestSellProductCard = ({ item }) => {
  return (
    <div className="group grow-0 shrink-0 basis-full lg:basis-[24%] md:basis-[calc(50%-16px)]">
      <div className="border-2 rounded-lg hover:border-green-700 relative">
        <div className="flex my-6 justify-center ">
          <Image
            className="rounded-lg"
            src={item.image}
            alt={item.title}
            width={200}
            height={200}
          />
        </div>
        <div className="m-4">
          <p className="cursor-pointer pt-1 text-xs text-slate-400">
            {item.category}
          </p>
          <p className="cursor-pointer pt-1 text-sm font-bold text-slate-700 hover:text-green-700">
            {item.title}
          </p>
          <div className="my-2 flex items-center justify-between gap-1">
            <p>
              <span className="text-sm font-bold line-through text-slate-700">
                {item.currencyType + item.salePrice}
              </span>
              &nbsp;
              <span className="text-sm font-bold line-through text-slate-400">
                {item.currencyType + item.price}
              </span>
            </p>
            <div className="flex items-center">
              <ReactStars
                count={5}
                size={18}
                edit={false}
                value={item.rating}
                color2={'#ffd700'}
              />
              <p className="text-xs text-slate-400 font-bold">{item.rating}</p>
            </div>
          </div>
          <div>
            <button className="bg-green-600 hover:bg-green-700 px-2 w-full rounded py-2 text-md font-bold text-white">
              + Add to cart
            </button>
          </div>
        </div>
        <ProductHover />
        <StyledCountdown />
      </div>
    </div>
  );
};

export default BestSellProductCard;
