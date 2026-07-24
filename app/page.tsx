import './page.css';
import './bentley/page.css';
import { ScrollReveal } from './_components/MilestoneFeed';
import { Hero } from './_components/home/Hero';
import { Problem } from './_components/home/Problem';
import { Bridge } from './_components/home/Bridge';
import { Leaks } from './_components/home/Leaks';
import { Shipped } from './_components/home/Shipped';
import { Contact } from './_components/home/Contact';
import { Footnotes } from './_components/home/Footnotes';

export default function HomePage() {
  return (
    <main className="home-page">
      <ScrollReveal />
      <Hero />
      <Problem />
      <Bridge />
      <Leaks />
      <Shipped />
      <Contact />
      <Footnotes />
    </main>
  );
}
