import clsx from 'clsx';
import './TimelineItem.css';

export default function TimelineItem({ item }) {
  return (
    <div className={clsx('timeline-item', item.highlight && 'highlight')}>
      <div className="dot" />
      <div className="card">
        <h3>{item.company ?? item.school}</h3>
        <p className="role">{item.role ?? item.degree}</p>
        <span className="period">{item.period}</span>
        {item.bullets && (
          <ul>
            {item.bullets.map(b => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
