import { StarterKitPage } from './_components/StarterKitPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Voice AI Evaluation Checklist — Free Download | Mad EZ Media',
  description: '7 things your AI phone assistant must do before you sign any contract. The hard questions to ask any vendor. 5 red flags that should make you walk away. Free download from Mad EZ Media.',
  openGraph: {
    title: 'Voice AI Evaluation Checklist — Mad EZ Media',
    description: 'Stop paying for auto-attendants. Get the checklist before you buy.',
    url: 'https://madezmedia.com/starter-kit',
    siteName: 'Mad EZ Media',
  },
};

export default function StarterKitRoute() {
  return <StarterKitPage />;
}
