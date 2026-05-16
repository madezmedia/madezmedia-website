import type { Metadata, Viewport } from 'next';
import { Montserrat, Raleway } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-raleway',
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
    icon: [
      { url: '/acmi/glyph.svg', type: 'image/svg+xml' },
      { url: '/acmi/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/acmi/favicon-16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: '/acmi/apple-touch-icon.png',
    shortcut: '/acmi/favicon.ico',
  },
  openGraph: {
    title: 'madezmedia — A studio that ships AI-native media systems.',
    description:
      'We build AI-native media systems for companies whose audiences live online.',
    url: 'https://www.madezmedia.com',
    siteName: 'madezmedia',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'madezmedia — A studio that ships AI-native media systems.',
    description:
      'We build AI-native media systems for companies whose audiences live online.',
    site: '@madezmedia',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${raleway.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
