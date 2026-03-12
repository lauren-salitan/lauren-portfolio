import './About.css';

export default function About() {
  return (
    <section className="about page">
      <div className="container stack-lg">
        <div className="about-hero surface">
          <p className="eyebrow">About</p>
          <h1>Hi, I’m Lauren — I build calm, resilient systems that help teams move faster.</h1>
          <p className="about-lede">
            I’m a solutions engineer and founder of GreenerFlows. My sweet spot is translating messy, manual processes into
            automation, internal tools, and productized workflows that real teams adopt. I blend product thinking, systems
            design, and hands-on engineering to ship reliable outcomes.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card surface">
            <h3>What I’m great at</h3>
            <ul>
              <li>Mapping ambiguous workflows into clear architectures and roadmaps.</li>
              <li>Building CRMs, dashboards, and automation that survive busy seasons.</li>
              <li>Working end-to-end: discovery → design → build → training → iteration.</li>
              <li>Keeping non-technical teams in the loop with clear docs and demos.</li>
            </ul>
          </div>

          <div className="about-card surface">
            <h3>Tooling</h3>
            <p className="muted">I use the right level of code for the problem.</p>
            <div className="pill-list">
              <span>JavaScript / TypeScript</span><span>Python</span><span>React</span><span>Node</span>
              <span>PostgreSQL</span><span>Supabase</span><span>Zapier (advanced)</span><span>Apps Script</span>
              <span>HubSpot CRM</span><span>Twilio</span><span>OpenAI API</span><span>Bubble.io</span><span>Notion</span>
            </div>
          </div>

          <div className="about-card surface">
            <h3>Values</h3>
            <ul>
              <li>Design for adoption: tools must be obvious and reliable.</li>
              <li>Measure impact: hours saved, errors removed, clarity gained.</li>
              <li>Bias to shipping: fast iterations with tight feedback loops.</li>
              <li>Documentation is part of the product, not an afterthought.</li>
            </ul>
          </div>
        </div>

        <div className="about-highlight surface">
          <div className="stack-md">
            <h3>Currently</h3>
            <p className="muted">Based in Austin, TX · Available for new projects starting April 2026.</p>
          </div>
          <div className="about-cta">
            <a className="btn" href="/contact">Start a project</a>
            <a className="btn secondary" href="/projects">View case studies</a>
          </div>
        </div>
      </div>
    </section>
  );
}
