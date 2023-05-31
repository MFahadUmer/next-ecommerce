import './globals.css';
import Header from './components/header/header';
import { Roboto } from 'next/font/google';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
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
          <Navigation />
          {children}
        </div>
        <div className="bg-slate-200">
          <Footer />
        </div>
      </body>
    </html>
  );
}
