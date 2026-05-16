export function Work() {
  return (
    <section className="home-work home-section" id="work">
      <div className="home-work__inner">
        <div className="home-work__eyebrow">
          <span className="home-work__num">N° 04</span>Active engagements
        </div>
        <h2 className="home-work__h2">
          A small number of <em className="home-work__em">operator-led</em> companies.
        </h2>
        <p className="home-work__p">
          We work with operators, not committees. Companies whose founder still answers the
          email. The kind of business where one good decision a week — backed by working AI
          infrastructure instead of busywork — compounds into a different company within a year.
        </p>

        <div className="home-work__slots">
          <div className="home-work__slot">
            <div className="home-work__slot-label">Slot 1</div>
            <div className="home-work__slot-body">Engaged · Q2-Q3 2026</div>
          </div>
          <div className="home-work__slot home-work__slot--open">
            <div className="home-work__slot-label">Slot 2 · open</div>
            <div className="home-work__slot-body">Accepting inbound · Q3 2026 start</div>
          </div>
          <div className="home-work__slot home-work__slot--open">
            <div className="home-work__slot-label">Slot 3 · open</div>
            <div className="home-work__slot-body">Accepting inbound · Q4 2026 start</div>
          </div>
        </div>
      </div>
    </section>
  );
}
