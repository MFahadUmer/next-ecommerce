'use client';
import dynamic from 'next/dynamic';
const Slider = dynamic(
  () => import('./components/styled-components/slider/Slider'),
  { loading: () => <p>Loading...</p>, ssr: false }
);

export default function Home() {
  return (
    <main>
      <hr className="hr" />
      <div className="container">
        <Slider />
        <div>Ecommerce Store By Fahad</div>
      </div>
    </main>
  );
}
