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
            {item.bullets.map((b, idx) => {
              if (typeof b === 'string') return <li key={idx}>{b}</li>;
              return (
                <li key={idx}>
                  <span className="bullet-heading">{b.title}</span>
                  {b.items && (
                    <ul className="sub-bullets">
                      {b.items.map(sub => <li key={sub}>{sub}</li>)}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
