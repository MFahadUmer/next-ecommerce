'use client';
import dynamic from 'next/dynamic';
const Slider = dynamic(
  () => import('./components/styled-components/slider/Slider'),
  { loading: () => <p>Loading...</p>, ssr: false }
);
const CategorySlider = dynamic(
  () => import('./components/styled-components/category-slider/CategorySlider'),
  { loading: () => <p>Loading...</p>, ssr: false }
);
const Products = dynamic(() => import('./components/products/Products'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
const BestSellProducts = dynamic(
  () => import('./components/products/BestSellProducts'),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);
const Features = dynamic(() => import('./components/features/Features'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const PromotionCategory = dynamic(
  () => import('./components/promotionCategory/PromotionCategory'),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);

export default function Home() {
  return (
    <main>
      <hr className="hr" />
      <Slider />
      <CategorySlider />
      <PromotionCategory />
      <Products />
      <BestSellProducts />
      <Features />
    </main>
  );
}
