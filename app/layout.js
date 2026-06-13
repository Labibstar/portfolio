import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Labib Bin Rahman — Lead Project Manager',
  description:
    'Lead Project Manager in eCommerce & digital transformation. 5+ years delivering Shopify Plus migrations, SaaS growth and product roadmaps. Featured in an official Shopify case study.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
