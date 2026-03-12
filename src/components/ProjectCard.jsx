import { Link } from 'react-router-dom';
import './ProjectCard.css';

export default function ProjectCard({ proj }) {
  const body = (
    <article className="proj-card surface">
      <div className="thumb">
        <div className="pill">{proj.tag}</div>
      </div>

      <div className="stack-md">
        <h3>{proj.title}</h3>
        <p className="excerpt">{proj.excerpt}</p>
      </div>

      <ul className="stack">
        {proj.stack.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      {proj.metrics && <p className="metrics">{proj.metrics}</p>}
      {proj.caseStudy && <span className="cta">Read case study →</span>}
    </article>
  );

  if (proj.caseStudy) {
    return (
      <Link to={`/projects/${proj.caseStudy}`} className="proj-link">
        {body}
      </Link>
    );
  }
  return body;
}
