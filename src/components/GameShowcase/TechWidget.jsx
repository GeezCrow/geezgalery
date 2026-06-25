// src/components/GameShowcase/TechWidget.jsx
export default function TechWidget({ engine, started, status, genre, progress }) {
  return (
    <div className="tech-widget">
      <div className="t-head">:: project file</div>
      <div className="t-body">
        <strong>ENGINE</strong>
        <span>{engine}</span>

        <strong style={{ marginTop: 6 }}>STARTED</strong>
        <span>{started}</span>

        <strong style={{ marginTop: 6 }}>STATUS</strong>
        <span style={{ color: '#ffc844' }}>{status}</span>

        <strong style={{ marginTop: 6 }}>GENRE</strong>
        <span>{genre}</span>

        <div className="dev-progress-side">
          <div className="lbl">
            <span>PROGRESS</span>
            <span>{progress}%</span>
          </div>
          <div className="bar-track">
            <div className="bar-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
