import { MilestoneFeed } from '../MilestoneFeed';

export function ProofFeed() {
  return (
    <section className="home-proof home-section">
      <div className="home-proof__inner">
        <div className="home-proof__head">
          <div className="home-proof__label-row">
            <span className="home-live-dot" />
            <span className="home-proof__label">Recently shipped</span>
            <span className="home-proof__meta">last 30 days · public artifacts only</span>
          </div>
          <div className="home-proof__meta">curated track record</div>
        </div>
        <MilestoneFeed />
        <p className="home-proof__foot">
          Each entry links to the artifact.{' '}
          <a href="https://github.com/madezmedia/acmi">Open source on GitHub</a> ·{' '}
          <code className="home-proof__code">npm install @madezmedia/acmi</code>
        </p>
      </div>
    </section>
  );
}
