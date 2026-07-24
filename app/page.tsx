import './page.css';
import './bentley/page.css';
import { ScrollReveal } from './_components/MilestoneFeed';
import { Hero } from './_components/home/Hero';
import { WhatWeBuild } from './_components/home/WhatWeBuild';
import { Approach } from './_components/home/Approach';
import { ProofFeed } from './_components/home/ProofFeed';
import { Lab } from './_components/home/Lab';
import { Work } from './_components/home/Work';
import { Contact } from './_components/home/Contact';
import { Footnotes } from './_components/home/Footnotes';

export default function HomePage() {
  return (
    <main className="home-page">
      <ScrollReveal />
      <Hero />
      <WhatWeBuild />
      <Approach />
      <ProofFeed />
      <Lab />
      <Work />
      <Contact />
      <Footnotes />
    </main>
  );
}
