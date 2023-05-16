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

export default function Home() {
  return (
    <main>
      <hr className="hr" />
      <div className="container">
        <Slider />
        <CategorySlider />
        <Products />
        <div>Ecommerce Store By Fahad</div>
      </div>
    </main>
  );
}
