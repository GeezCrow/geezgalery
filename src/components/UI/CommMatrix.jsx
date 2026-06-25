// src/components/UI/CommMatrix.jsx
import { useState } from 'react';
import CommMatrixCell from './CommMatrixCell';
import Lightbox from './Lightbox';
import { finishTypes, poseTypes, commissionMatrix } from '../../data/commissionMatrix';

export default function CommMatrix() {
  const [selectedCell, setSelectedCell] = useState(null);

  const handleCellClick = (pose, finish, cell) => {
    setSelectedCell({
      image: cell.image,
      title: `${pose.label} · ${finish.label}`,
      tag: cell.price,
    });
  };

  return (
    <div className="cm-wrap">
      <div className="cm-grid">
        {/* Esquina vacía superior-izquierda */}
        <div className="cm-corner" />

        {/* Encabezados de columna (acabado) */}
        {finishTypes.map(finish => (
          <div key={finish.id} className="cm-col-header">
            {finish.label}
          </div>
        ))}

        {/* Filas: encabezado de fila + 3 celdas */}
        {poseTypes.map(pose => (
          <div className="cm-row" key={pose.id}>
            <div className="cm-row-header">{pose.label}</div>
            {finishTypes.map(finish => {
              const cell = commissionMatrix[pose.id][finish.id];
              return (
                <CommMatrixCell
                  key={finish.id}
                  price={cell.price}
                  image={cell.image}
                  poseLabel={pose.label}
                  finishLabel={finish.label}
                  onClick={() => handleCellClick(pose, finish, cell)}
                />
              );
            })}
          </div>
        ))}
      </div>

      {selectedCell && (
        <Lightbox art={selectedCell} onClose={() => setSelectedCell(null)} />
      )}
    </div>
  );
}
