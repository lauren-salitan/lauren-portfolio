import './Home.css';

export default function Home() {
  return (
    <section className="home-hero page">
      <div className="container hero-grid">
        <div className="hero-text stack-lg">
          <span className="eyebrow">Solutions engineer · Founder, GreenerFlows</span>
          <h1>Building lean systems that keep teams moving.</h1>
          <p className="lede">
            I design and ship automation, internal tools, and modern web apps that remove friction for ops, sales, and product teams.
          </p>

          <div className="hero-actions">
            <a className="btn" href="/projects">View projects</a>
            <a className="btn secondary" href="/contact">Book a chat</a>
          </div>

          <div className="hero-chips">
            <span className="chip">Workflow automation</span>
            <span className="chip">Internal tools</span>
            <span className="chip">No-code + AI</span>
          </div>
        </div>

        <div className="hero-card surface">
          <div className="hero-card__header">Currently</div>
          <div className="hero-stats">
            <div>
              <p className="stat-label">Availability</p>
              <p className="stat-value">April 2026</p>
            </div>
            <div>
              <p className="stat-label">Based in</p>
              <p className="stat-value">Austin, TX</p>
            </div>
            <div>
              <p className="stat-label">Recent focus</p>
              <p className="stat-value">Ops automation</p>
            </div>
          </div>
          <div className="hero-foot">
            <p className="muted">Trusted by adventure travel, climate, and startup teams to streamline operations and launch products fast.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
