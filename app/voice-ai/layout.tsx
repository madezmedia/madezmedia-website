import type { Metadata } from 'next';
import { Montserrat, Raleway, JetBrains_Mono } from 'next/font/google';

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

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AI Voice Agents · Mad EZ Media',
  description:
    'Custom AI voice agents that answer every business call 24/7. Books appointments, qualifies leads, hands transcripts to your team. Built in 5 days. From $250.',
  openGraph: {
    title: 'AI Voice Agents · Mad EZ Media',
    description:
      'Custom AI voice agents that answer every business call 24/7. Built in 5 days. From $250.',
    images: ['/brand/logo-splatter.png'],
  },
};

export default function VoiceAILayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${montserrat.variable} ${raleway.variable} ${jetbrainsMono.variable}`}>
      {children}
    </div>
  );
}
