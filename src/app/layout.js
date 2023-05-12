import './globals.css';
import Header from './components/header/header';

import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Ecommerce In Next.js',
  description: 'Ecommerce in next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="container">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
