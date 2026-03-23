'use client';

import { Hero } from '@/components/Hero';
import { FeatureGrid } from '@/components/FeatureGrid';
import { TextYourPhotos } from '@/components/TextYourPhotos';
import { Pricing } from '@/components/Pricing';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureGrid />
      <TextYourPhotos />
      <Pricing />
      <Contact />
    </main>
  );
}
