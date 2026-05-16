import Link from 'next/link';

export function Contact() {
  return (
    <section className="home-contact home-section" id="contact">
      <img
        src="/brand/logo-splatter.png"
        alt=""
        aria-hidden="true"
        className="home-contact__splatter"
      />
      <div className="home-contact__inner">
        <div className="home-contact__eyebrow">
          <span className="home-contact__num">N° 05</span>Talk to the studio
        </div>
        <h2 className="home-contact__h2">
          Three ways <em className="home-contact__em-gradient">to start.</em>
        </h2>
        <p className="home-contact__p">
          Chat with our AI sales agent. Voice when you&apos;d rather talk. Or book Duane
          (real human, real calendar). Twenty minutes, no decks.
        </p>
        <div className="home-contact__actions">
          <Link href="/bentley" className="home-contact__btn home-contact__btn--primary">Talk to Bentley →</Link>
          <a href="https://cal.com/duane-madezmedia" className="home-contact__btn home-contact__btn--quiet">or book Duane direct</a>
        </div>
      </div>
    </section>
  );
}
