// src/data/commissions.js
//
// Lista de paquetes de comisiones que se muestran en CommissionsTab
// (debajo de la matriz de precios). Para agregar/quitar un paquete,
// solo edita este array.

export const commissions = [
  {
    type: 'CHIBI',
    price: '$20',
    status: 'closed',
    desc: 'Cute chibi-style character, flat color with simple shading.',
    includes: ['1 character', '2 revisions', 'HQ PNG', 'Delivery: 5-7 days'],
  },
  {
    type: 'REFERENCE SHEET',
    price: '$50',
    status: 'open',
    desc: 'Full character reference with front/back view and color palette.',
    includes: ['Front + side + back', '3 expressions','Accesories','Additional outfitt (+ $10)', 'Color palette', 'Delivery: 10-15 days'],
  },
  {
    type: 'EXTRA CHARACTER',
    price: 'Original Price + %80',
    status: 'open',
    desc: 'Full color illustration with two characters or more interacting.',
    includes: ['2 characters or more', '4 revisions', 'HQ PNG + PSD', 'Delivery: 6-9 days'],
  },
];
