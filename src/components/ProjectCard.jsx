import './ProjectCard.css';

export default function ProjectCard({ proj }) {
  return (
    <article className="proj-card">
      {/* ⇣ replace with real screenshot or logo paths later */}
      <div className="thumb">
        <img src={`/placeholder-${proj.tag?.toLowerCase() || 'proj'}.svg`} alt="" />
      </div>

      <h3>{proj.title}</h3>
      <p className="excerpt">{proj.excerpt}</p>

      <ul className="stack">
        {proj.stack.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      {proj.metrics && <p className="metrics">{proj.metrics}</p>}
      {/* TODO: add link buttons to GitHub / live demo if desired */}
    </article>
  );
}
