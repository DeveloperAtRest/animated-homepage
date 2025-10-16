import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const metadata = {
  title: 'PokerStuff India - Modern Poker Accessories',
  description: 'Premium poker chips, cards, and tables in India. Elevate your game with a clean and modern interface.',
  keywords: 'poker chips, poker tables, playing cards, accessories, India poker',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
