import type { Metadata, Viewport } from 'next';
import { Montserrat, Raleway, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import './_components/site/site.css';
import { SiteHeader } from './_components/site/SiteHeader';
import { SiteFooter } from './_components/site/SiteFooter';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],  /* 800 added for section H2 per director review */
  variable: '--font-montserrat',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-raleway',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#faf9f5',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.madezmedia.com'),
  title: {
    default: 'madezmedia — A studio that ships AI-native media systems.',
    template: '%s — madezmedia',
  },
  description:
    'We build AI-native media systems for companies whose audiences live online. Custom platforms, autonomous characters, sonic identities, and protocol-grade infrastructure.',
  keywords: [
    'AI-native media',
    'multi-agent systems',
    'autonomous characters',
    'AI infrastructure',
    'ACMI protocol',
    'agent memory',
    'sonic branding',
    'Mad EZ Media',
  ],
  authors: [{ name: 'Michael Shaw', url: 'https://www.madezmedia.com' }],
  creator: 'Mad EZ Media & Technology Partners',
  publisher: 'Mad EZ Media & Technology Partners',
  icons: {
    icon: '/brand/logo-splatter.png',
    apple: '/brand/logo-splatter.png',
  },
  openGraph: {
    title: 'madezmedia — A studio that ships AI-native media systems.',
    description:
      'We build AI-native media systems for companies whose audiences live online.',
    url: 'https://www.madezmedia.com',
    siteName: 'madezmedia',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/og-default.jpg',
      width: 1200,
      height: 630,
      alt: 'madezmedia — AI-native media systems',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'madezmedia — A studio that ships AI-native media systems.',
    description:
      'We build AI-native media systems for companies whose audiences live online.',
    site: '@madezmedia',
    images: ['/og-default.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${raleway.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
