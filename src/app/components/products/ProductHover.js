import React from 'react';
import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai';
import { BiTransferAlt } from 'react-icons/bi';
import HoverIcon from './HoverIcon';

const ProductHover = () => {
  return (
    <div className="hidden group-hover:flex absolute top-1/2 w-full text-center z-10 justify-center gap-2 text-2xl font-normal">
      <HoverIcon Icon={AiOutlineEye} />
      <HoverIcon Icon={AiOutlineHeart} />
      <HoverIcon Icon={BiTransferAlt} />
    </div>
  );
};

export default ProductHover;
