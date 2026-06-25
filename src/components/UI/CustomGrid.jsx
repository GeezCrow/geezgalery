// src/components/UI/CustomGrid.jsx
import CustomGridCell from './CustomGridCell';

export default function CustomGrid({ gallery2, onItemClick }) {
  return (
    <div className="cg-grid">
      {gallery2.map(art => (
        <CustomGridCell key={art.id} art={art} onClick={onItemClick} />
      ))}
    </div>
  );
}
