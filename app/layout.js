import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { UMAMI_WEBSITE_ID, UMAMI_SRC } from './analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Labib Bin Rahman — Lead Project Manager',
  description:
    'Lead Project Manager in eCommerce & digital transformation. 5+ years delivering Shopify Plus migrations, SaaS growth and product roadmaps. Featured in an official Shopify case study.',
};

export default function RootLayout({ children }) {
  const analyticsReady =
    UMAMI_WEBSITE_ID && !UMAMI_WEBSITE_ID.startsWith('REPLACE_');

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {analyticsReady && (
          <Script
            src={UMAMI_SRC}
            data-website-id={UMAMI_WEBSITE_ID}
            strategy="afterInteractive"
            defer
          />
        )}
      </body>
    </html>
  );
}
