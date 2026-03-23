import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mad EZ Media - AI-Powered Digital Marketing',
  description: 'Transform your business with AI-powered digital marketing. 10x your content in half the time.',
  keywords: 'AI marketing, digital marketing, automation, content creation, social media',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
