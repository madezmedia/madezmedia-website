export function Footnotes() {
  return (
    <section className="home-footnotes home-section">
      <div className="home-footnotes__inner">
        <h4 className="home-footnotes__h4">Notes</h4>
        <ol className="home-footnotes__list">
          <li id="fn-1">
            &ldquo;Working system&rdquo; is a load-bearing distinction. Most studios produce
            deliverables — files that arrive in your inbox. We produce systems — software that
            runs on your infrastructure on Tuesday morning when nobody&apos;s watching. Different
            category of work, different ownership model.
          </li>
          <li id="fn-2">
            We borrow this framing from operator-led businesses (the ones we like working with).
            The agency-deck-then-leave pattern is built for marketing budgets, not for changing
            how an operator&apos;s day actually goes. We&apos;re built for the latter.
          </li>
          <li id="fn-3">
            Anyone can claim infrastructure expertise. The only durable proof is shipping the
            infrastructure publicly, with an open license, and watching whether the community
            uses it. That&apos;s why ACMI is on npm and not behind a sales gate.
          </li>
        </ol>
      </div>
    </section>
  );
}
