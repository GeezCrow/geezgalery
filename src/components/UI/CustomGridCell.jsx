// src/components/UI/CustomGridCell.jsx
export default function CustomGridCell({ art, onClick }) {
  // Si no se define colSpan/rowSpan, ocupa 1x1 por defecto
  const colSpan = art.colSpan ?? 1;
  const rowSpan = art.rowSpan ?? 1;

  return (
    <div
      className="cg-cell"
      style={{
        gridColumn: `span ${colSpan}`,
        gridRow: `span ${rowSpan}`,
      }}
      onClick={() => onClick(art)}
    >
      {art.isNew && <div className="new-badge">NEW</div>}
      <img
        src={art.thumb ?? art.image}
        alt={art.title}
        className="cg-img"
        loading="lazy"
        decoding="async"
      />
      <div className="cg-overlay">
        <div className="cg-title">{art.title}</div>
        <div className="cg-tag">{art.tag}</div>
      </div>
    </div>
  );
}
