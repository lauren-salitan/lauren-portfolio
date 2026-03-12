import { useParams, Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const study = caseStudies.find(cs => cs.id === id);

  if (!study) {
    return (
      <section className="page">
        <div className="container stack-md">
          <h2>Case study not found</h2>
          <p className="muted">The project you’re looking for doesn’t exist yet.</p>
          <Link className="btn secondary" to="/projects">Back to projects</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="project-detail page">
      <div className="container stack-lg">
        <div className="detail-head stack-md surface">
          <div className="eyebrow">{study.client} · {study.timeframe}</div>
          <h1>{study.title}</h1>
          <p className="summary">{study.summary}</p>
          <div className="meta-row">
            <div className="meta-item">
              <p className="label">Role</p>
              <p className="value">{study.role}</p>
            </div>
            <div className="meta-item">
              <p className="label">Stack</p>
              <div className="stack-chips">
                {study.stack.map(tool => <span key={tool}>{tool}</span>)}
              </div>
            </div>
          </div>
          <div className="detail-actions">
            <Link className="btn" to="/contact">Start a project</Link>
            <Link className="btn secondary" to="/projects">Back to all projects</Link>
          </div>
        </div>

        <div className="detail-grid">
          <div className="card-block surface">
            <h3>Challenge</h3>
            <p>{study.challenge}</p>
          </div>

          <div className="card-block surface">
            <h3>Approach</h3>
            <ul>
              {study.approach.map(step => <li key={step}>{step}</li>)}
            </ul>
          </div>

          <div className="card-block surface">
            <h3>Results</h3>
            <ul>
              {study.results.map(outcome => <li key={outcome}>{outcome}</li>)}
            </ul>
          </div>
        </div>

        <div className="detail-actions">
          <Link className="btn secondary" to="/projects">Back to all projects</Link>
        </div>
      </div>
    </section>
  );
}
