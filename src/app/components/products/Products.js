import React from 'react';
import products from '@/app/mock/products';
import ProductCard from './ProductCard';

const Products = () => {
  return (
    <div>
      <h2 className="my-6 text-2xl font-bold text-slate-700">
        Featured Products
      </h2>
      <div>
        <div className="grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {products.length > 0
            ? products.map((item, index) => {
                return <ProductCard key={index} item={item} />;
              })
            : ''}
        </div>
      </div>
    </div>
  );
};

export default Products;
