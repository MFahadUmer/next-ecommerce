import React from 'react';
import Image from 'next/image';
import ReactStars from 'react-stars';
import ProductHover from './ProductHover';

const ProductCard = ({ item }) => {
  return (
    <div className="group border-2 rounded-lg hover:border-green-700 relative">
      <div className="absolute top-3 left-3">
        {item.saleText && (
          <p className="text-sm font-semibold rounded py-1 bg-green-700 px-2 text-white">
            {item.saleText}
          </p>
        )}
      </div>
      <div className="flex my-6 justify-center ">
        <Image
          className="rounded-lg"
          src={item.image}
          alt={item.title}
          width={150}
          height={150}
        />
      </div>
      <div className="m-4">
        <p className="cursor-pointer pt-1 text-xs text-slate-400">
          {item.category}
        </p>
        <p className="cursor-pointer pt-1 text-sm font-bold text-slate-700 hover:text-green-700">
          {item.title}
        </p>
        <div className="my-2 flex items-center gap-1">
          <ReactStars
            count={5}
            size={18}
            edit={false}
            value={item.rating}
            color2={'#ffd700'}
          />
          <p className="text-xs text-slate-400 font-bold">
            {item.rating} ({item.ratingCount})
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p>
            <span className="text-sm font-bold line-through text-slate-700">
              {item.currencyType + item.salePrice}
            </span>
            &nbsp;
            <span className="text-sm font-bold line-through text-slate-400">
              {item.currencyType + item.price}
            </span>
          </p>
          <button className="bg-green-600 hover:bg-green-700 px-2 rounded py-1 text-sm font-bold text-white">
            + Add
          </button>
        </div>
      </div>
      <ProductHover />
    </div>
  );
};

export default ProductCard;
