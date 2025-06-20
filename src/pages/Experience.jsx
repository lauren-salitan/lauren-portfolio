import { workTimeline } from '../data/work';
import { education } from '../data/education';
import TimelineItem from '../components/TimelineItem';
import './Experience.css';

export default function Experience() {
  return (
    <div className="experience">
      <section>
        <h2>Work&nbsp;Experience</h2>
        <div className="timeline">
          {workTimeline.map(item => (
            <TimelineItem key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section>
        <h2>Education</h2>
        <div className="timeline">
          {education.map(item => (
            <TimelineItem key={item.school} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
