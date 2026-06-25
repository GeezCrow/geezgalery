// src/components/IndiedevTab.jsx
import SectionHeader from './UI/SectionHeader';
import ProjectCard from './UI/ProjectCard';
import GameShowcase from './GameShowcase/GameShowcase';
import { projects } from '../data/indiedev';

// ── INTERRUPTOR ──────────────────────────────────────────────
// false = se oculta todo el contenido y solo se muestra "WORK IN PROGRESS"
// true  = se muestra el contenido real (featured project + listas de proyectos)
// El código de abajo NO se borra, solo se deja de renderizar.
const SHOW_FEATURED_CONTENT = false;
// ──────────────────────────────────────────────────────────────

export default function IndiedevTab() {
  const wip    = projects.filter(p => p.status === 'wip');
  const paused = projects.filter(p => p.status === 'paused');
  const done   = projects.filter(p => p.status === 'done');

  return (
    <>
      {/* INTRO NOTICE */}
      <div className="indiedev-notice">
        {' '}Currently sacrificing my sanity to work on my visual novel, <strong style={{ color: '#ff6644' }}>West High</strong>. More news when I remember to sleep.
      </div>

      {SHOW_FEATURED_CONTENT ? (
        <>
          {/* PROYECTO DESTACADO */}
          <SectionHeader label=">> featured project" />
          <GameShowcase />

          {/* IN DEV */}
          {wip.length > 0 && (
            <>
              <SectionHeader label=">> currently developing" />
              <div className="proj-grid">
                {wip.map(p => <ProjectCard key={p.id} project={p} />)}
              </div>
            </>
          )}

          {/* PAUSED */}
          {paused.length > 0 && (
            <>
              <SectionHeader label=">> on hold" />
              <div className="proj-grid">
                {paused.map(p => <ProjectCard key={p.id} project={p} />)}
              </div>
            </>
          )}

          {/* DONE */}
          {done.length > 0 && (
            <>
              <SectionHeader label=">> released / finished" />
              <div className="proj-grid">
                {done.map(p => <ProjectCard key={p.id} project={p} />)}
              </div>
            </>
          )}
        </>
      ) : (
        // Mismo bloque "WORK IN PROGRESS" que se usa en About Me (GalleryTab.jsx)
<div style={{ 
  border: '1px solid var(--border-color)', 
  background: 'var(--bg-card)', 
  padding: '30px', 
  textAlign: 'center' 
}}>
  <div style={{ 
    fontFamily: "'VT323', monospace", 
    fontSize: '48px', 
    color: 'var(--border-color)', 
    letterSpacing: '8px' 
  }}>
    WORK IN PROGRESS*
  </div>
  <div style={{ 
    fontSize: '10px', 
    color: 'var(--text-muted)', 
    marginTop: '8px', 
    letterSpacing: '3px' 
  }}>:: check back soon</div>
</div>
      )}
    </>
  );
}
