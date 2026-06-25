// src/components/UI/CommMatrixCell.jsx
export default function CommMatrixCell({ price, image, poseLabel, finishLabel, onClick }) {
  return (
    <div className="cm-cell" onClick={onClick}>
      <div className="cm-cell-imgwrap">
        <img
          src={image}
          alt={`${poseLabel} ${finishLabel}`}
          className="cm-cell-img"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="cm-cell-price">{price}</div>
    </div>
  );
}
