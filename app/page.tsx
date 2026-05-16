import './page.css';
import { ScrollReveal } from './_components/MilestoneFeed';
import { Hero } from './_components/home/Hero';
import { ProofFeed } from './_components/home/ProofFeed';
import { ThreeKeys } from './_components/home/ThreeKeys';
import { Approach } from './_components/home/Approach';
import { Lab } from './_components/home/Lab';
import { Work } from './_components/home/Work';
import { Contact } from './_components/home/Contact';
import { Footnotes } from './_components/home/Footnotes';

export default function HomePage() {
  return (
    <main className="home-page">
      <ScrollReveal />
      <Hero />
      <ProofFeed />
      <ThreeKeys />
      <Approach />
      <Lab />
      <Work />
      <Contact />
      <Footnotes />
    </main>
  );
}
