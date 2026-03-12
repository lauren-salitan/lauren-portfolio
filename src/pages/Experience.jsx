import { workTimeline } from '../data/work';
import { education } from '../data/education';
import TimelineItem from '../components/TimelineItem';
import './Experience.css';

export default function Experience() {
  return (
    <div className="experience page">
      <div className="container stack-lg">
        <section className="exp-block">
          <div className="exp-head">
            <h2>Work Experience</h2>
            <p className="exp-lede">Product, engineering, and ops — turning operational pain points into internal products, automation, and scalable workflows.</p>
          </div>
          <div className="timeline">
            {workTimeline.map(item => (
              <TimelineItem key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section className="exp-block">
          <div className="exp-head">
            <h2>Education</h2>
            <p className="exp-lede">Foundations in policy, product, and engineering.</p>
          </div>
          <div className="timeline">
            {education.map(item => (
              <TimelineItem key={item.school} item={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
