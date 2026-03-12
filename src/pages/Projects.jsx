import { useLayoutEffect, useRef } from 'react';
import { featuredProjects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const gridRef = useRef(null);

  // GSAP reveal on first mount
  useLayoutEffect(() => {
    const cards = gridRef.current.querySelectorAll('.proj-card');
    gsap.fromTo(cards,
      { autoAlpha: 0, y: 40 },
      {
        duration: 0.6,
        autoAlpha: 1,
        y: 0,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%'
        }
      }
    );
  }, []);

  return (
    <section className="projects page">
      <div className="container">
        <div className="projects-header">
          <h2>Featured Work</h2>
          <p className="projects-lede">Products, automation, and decision-support systems for ops teams.</p>
          <p className="projects-lede">Click a card for the full case study.</p>

        </div>

        <div className="proj-grid" ref={gridRef}>
          {featuredProjects.map(p => (
            <ProjectCard key={p.id} proj={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
