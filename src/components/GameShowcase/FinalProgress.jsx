// src/components/GameShowcase/FinalProgress.jsx
export default function FinalProgress({ progress, milestones }) {
  return (
    <div className="final-progress">
      <div className="lbl">
        <span>:: OVERALL DEV PROGRESS</span>
        <span>{progress}%</span>
      </div>
      <div className="bar-track">
        <div className="bar-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="milestones">
        {milestones.map((m, i) => (
          <span key={i} className={m.done ? 'done' : ''}>
            {m.label}
          </span>
        ))}
      </div>
    </div>
  );
}
