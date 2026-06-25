// src/components/UI/ProjectCard.jsx
import { statusConfig } from '../../data/indiedev';

export default function ProjectCard({ project }) {
  const { label, className } = statusConfig[project.status];

  return (
    <div className="proj-card">
      {/* TOP ROW */}
      <div className="proj-card-top">
        <div className="proj-emoji">{project.emoji}</div>
        <div className="proj-header">
          <div className="proj-title">{project.title}</div>
          <div className="proj-subtitle">{project.subtitle} — {project.year}</div>
        </div>
        <div className={`proj-status-pill ${className}`}>{label}</div>
      </div>

      {/* DESC */}
      <div className="proj-desc">{project.desc}</div>

      {/* TAGS */}
      <div className="proj-tags">
        {project.tags.map((tag, i) => (
          <span key={i} className="proj-tag">#{tag}</span>
        ))}
      </div>

      {/* LINKS */}
      <div className="proj-links">
        {project.links.itch && (
          <a href={project.links.itch} className="proj-link">
            itch.io →
          </a>
        )}
        {project.links.github && (
          <a href={project.links.github} className="proj-link">
            github →
          </a>
        )}
      </div>
    </div>
  );
}
