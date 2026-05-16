import Link from 'next/link';

export function Hero() {
  return (
    <section className="home-hero">
      <img
        src="/brand/logo-splatter.png"
        alt=""
        aria-hidden="true"
        className="home-hero__splatter"
      />
      <div className="home-hero__blob home-hero__blob--ember" aria-hidden="true" />
      <div className="home-hero__blob home-hero__blob--mist" aria-hidden="true" />

      <div className="home-hero__inner">
        <div className="home-hero__meta">
          <div>
            <div className="home-hero__eyebrow">
              <span className="home-hero__num">N° 01</span>The Studio
            </div>
          </div>
          <div className="home-hero__where">
            Mad EZ Media &amp; Technology Partners <span className="home-hero__dot">·</span>{' '}
            Charlotte, NC <span className="home-hero__dot">·</span>{' '}
            <span className="home-hero__slot">Slot 2 of 3 open</span>
          </div>
        </div>

        <h1 className="home-hero__h1">
          We build <em className="home-hero__em-gradient">AI-native media</em> systems for companies whose audiences{' '}
          <em className="home-hero__em-gradient">live online</em>.
        </h1>

        <p className="home-hero__deck">
          Custom platforms, autonomous characters, sonic identities, and protocol-grade
          infrastructure — designed, built, and operated by a small senior team.
          We do not ship decks. We ship <strong>working systems</strong>.<sup><a href="#fn-1">1</a></sup>
        </p>

        <div className="home-hero__actions">
          <Link href="/#contact" className="home-hero__btn home-hero__btn--primary">Talk to Bentley →</Link>
          <Link href="/#lab" className="home-hero__btn home-hero__btn--quiet">See the lab</Link>
        </div>
      </div>
    </section>
  );
}
