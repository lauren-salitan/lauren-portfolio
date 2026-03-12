import './Home.css';

export default function Home() {
  return (
    <section className="home-hero page">
      <div className="container hero-grid">
        <div className="hero-text stack-lg">
          <span className="eyebrow">Product systems & ops · Founder, GreenerFlows</span>
          <h1>I design internal products that keep teams moving.</h1>
          <p className="lede">
            Technical product and systems builder who designs internal platforms, automation, and operational infrastructure that turn messy workflows into scalable software systems.
          </p>

          <div className="hero-actions">
            <a className="btn" href="/projects">View projects</a>
            <a className="btn secondary" href="/contact">Book a chat</a>
          </div>

          <div className="hero-chips">
            <span className="chip">Product ops</span>
            <span className="chip">Internal tools</span>
            <span className="chip">Automation & AI</span>
          </div>
        </div>

        <div className="hero-card surface">
          <div className="hero-card__header">Currently</div>
          <div className="hero-stats">
            <div>
              <p className="stat-label">Focus</p>
              <p className="stat-value">Product Ops / Internal Tools</p>
            </div>
            <div>
              <p className="stat-label">Based in</p>
              <p className="stat-value">Austin, TX</p>
            </div>
            {/* <div>
              <p className="stat-label">Recent focus</p>
              <p className="stat-value">Systems for ops & revenue teams</p>
            </div> */}
          </div>
          <div className="hero-foot">
            <p className="muted">Helping teams to streamline operations and ship products fast.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
