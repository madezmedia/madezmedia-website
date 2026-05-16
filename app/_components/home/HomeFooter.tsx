import Link from 'next/link';

export function HomeFooter() {
  return (
    <footer className="home-foot">
      <div className="home-foot__inner">
        <div className="home-foot__left">
          <strong>madezmedia</strong> · Mad EZ Media &amp; Technology Partners · NC · © 2026
        </div>
        <div className="home-foot__links">
          <a href="https://github.com/madezmedia">github</a>
          <a href="https://npmjs.com/~madezmedia">npm</a>
          <a href="#">discord</a>
          <a href="https://x.com/madezmedia">x</a>
          <Link href="/system">system</Link>
        </div>
      </div>
    </footer>
  );
}
