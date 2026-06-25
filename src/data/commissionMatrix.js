// src/data/commissionMatrix.js
//
// Estructura: filas = encuadre, columnas = acabado.
// Cada celda tiene su propio precio + imagen de ejemplo.
// Para usar tus imágenes reales, solo cambia el import y el campo `image`.

import bustSketch      from '../assets/comm-placeholders/bust_sketch.webp';
import bustPlain       from '../assets/comm-placeholders/bust_plain.webp';
import bustFullcolor   from '../assets/comm-placeholders/bust_fullcolor.webp';
import torsoSketch     from '../assets/comm-placeholders/torso_sketch.webp';
import torsoPlain      from '../assets/comm-placeholders/torso_plain.webp';
import torsoFullcolor  from '../assets/comm-placeholders/torso_fullcolor.webp';
import fullbodySketch    from '../assets/comm-placeholders/fullbody_sketch.webp';
import fullbodyPlain     from '../assets/comm-placeholders/fullbody_plain.webp';
import fullbodyFullcolor from '../assets/comm-placeholders/fullbody_fullcolor.webp';

// Encabezados de columnas (acabado)
export const finishTypes = [
  { id: 'sketch',    label: 'SKETCH'      },
  { id: 'plain',     label: 'PLAIN COLOR' },
  { id: 'fullcolor', label: 'FULL COLOR'  },
];

// Encabezados de filas (encuadre)
export const poseTypes = [
  { id: 'bust',     label: 'BUST'      },
  { id: 'torso',    label: 'TORSO'     },
  { id: 'fullbody', label: 'FULL BODY' },
];

// Matriz 3x3: matrix[poseId][finishId] = { price, image }
export const commissionMatrix = {
  bust: {
    sketch:    { price: '$7',  image: bustSketch    },
    plain:     { price: '$10', image: bustPlain     },
    fullcolor: { price: '$15', image: bustFullcolor },
  },
  torso: {
    sketch:    { price: '$10', image: torsoSketch    },
    plain:     { price: '$15', image: torsoPlain     },
    fullcolor: { price: '$25', image: torsoFullcolor },
  },
  fullbody: {
    sketch:    { price: '$15', image: fullbodySketch    },
    plain:     { price: '$20', image: fullbodyPlain     },
    fullcolor: { price: '$35', image: fullbodyFullcolor },
  },
};
