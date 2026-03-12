import './About.css';

export default function About() {
  return (
    <section className="about page">
      <div className="container stack-lg">
        <div className="about-hero surface">
          <p className="eyebrow">About</p>
          <h1>Hi, I’m Lauren — a systems-focused product builder for internal tools and ops.</h1>
          <p className="about-lede">
            I specialize in designing internal systems that power how companies operate—from CRM platforms and automation pipelines to scheduling systems, analytics dashboards, and operational tools. My work sits at the intersection of product, engineering, and operations: understanding how teams work, identifying bottlenecks, and building systems that make organizations run more efficiently.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card surface">
            <h3>What I’m great at</h3>
            <ul>
              <li>Translating ambiguous workflows into clear product specs, architectures, and roadmaps.</li>
              <li>Designing internal tools, CRMs, and automation that withstand peak ops and change.</li>
              <li>Working end-to-end: discovery → design → build → rollout → adoption → iteration.</li>
              <li>Keeping stakeholders aligned with crisp artifacts, demos, and documentation.</li>
            </ul>
          </div>

          <div className="about-card surface">
            <h3>Tooling</h3>
            <p className="muted">I use the right level of code for the problem—shipping fast, then hardening.</p>
            <div className="pill-list">
              <span>JavaScript / TypeScript</span><span>Python</span><span>React</span><span>Node</span>
              <span>PostgreSQL</span><span>Supabase</span><span>Zapier (advanced)</span><span>Apps Script</span>
              <span>HubSpot CRM</span><span>Twilio</span><span>OpenAI API</span><span>Bubble.io</span><span>Notion</span>
            </div>
          </div>

          <div className="about-card surface">
            <h3>Values</h3>
            <ul>
              <li>Design for adoption: internal products must be obvious, reliable, and documented.</li>
              <li>Measure impact: hours saved, errors removed, decisions improved.</li>
              <li>Bias to shipping: tight loops with stakeholders beat long spec cycles.</li>
              <li>Systems thinking: solve for the whole workflow, not a single step.</li>
            </ul>
          </div>
        </div>

        <div className="about-highlight surface">
          <div className="stack-md">
            <h3>Currently</h3>
            <p className="muted">Based in Austin, TX</p>
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
