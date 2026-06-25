import demongirlFull from '../assets/demongirl.webp';
import lisandro from '../assets/lisandro.webp';
import dtiysFull from '../assets/dtiys.webp'
import dtiysThumb     from '../assets/dtiys_thumb.webp';
import girlguitar from '../assets/girlguitar.webp'
import girlstreet from '../assets/girlstreet.webp'
import bikinigirl from '../assets/bikinigirl.webp'
import portrait from '../assets/portrait.webp'
import knives from '../assets/knives.webp';
import library from '../assets/library.webp';

export const gallery2 = [
  { 
    image: bikinigirl,   // full para lightbox  // thumb para cards
    title: 'Sexy',
    tag: '// digital',
    isNew: true,
    colSpan: 2,   // ← ocupa 2 columnas de ancho
    rowSpan: 3,   // ← ocupa 2 filas de alto (pieza destacada)
  },
  { 
    id: 2,
    image: girlstreet,
    title: 'DTIYS',
    tag: '// fanart',
    isNew: true,
    colSpan: 1,   // ← ocupa 2 columnas de ancho
    rowSpan: 3,   // ← ocupa 2 filas de alto (pieza destacada)
  },
  { 
    id: 3, 
    image: girlguitar, 
    title: 'Knives', 
    tag: '// fanart',
    featured: true, 
    isNew: true,
    colSpan: 2,   // ← ocupa 2 columnas de ancho
    rowSpan: 3,   // ← ocupa 2 filas de alto (pieza destacada)
  },
    { 
    id: 4, 
    image: portrait, 
    title: 'Library', 
    tag: '// fanart',
    isNew: true,
        colSpan: 1,   // ← ocupa 2 columnas de ancho
    rowSpan: 2,   // ← ocupa 2 filas de alto (pieza destacada)
  },
    { 
    id:9,
    image: demongirlFull,   // full para lightbox
    title: 'Demon Girl',
    tag: '// digital',
    featured: true,
    isNew: true,
        colSpan: 1,   // ← ocupa 2 columnas de ancho
    rowSpan: 2,   // ← ocupa 2 filas de alto (pieza destacada)
  },
  { 
    id: 5,
    image: dtiysFull,
    thumb: dtiysThumb,
    title: 'DTIYS',
    tag: '// fanart',
    featured: true,
    isNew: true,
    colSpan: 1,   // ← ocupa 2 columnas de ancho
    rowSpan: 3,   // ← ocupa 2 filas de alto (pieza destacada)
  },
      { 
    id: 7, 
    image: knives, 
    title: 'Library', 
    tag: '// fanart',
    isNew: true,
        colSpan: 1.5,   // ← ocupa 2 columnas de ancho
    rowSpan: 3,   // ← ocupa 2 filas de alto (pieza destacada)
  },
  { 
    id: 6, 
    image: lisandro, 
    title: 'Knives', 
    tag: '// fanart',
    featured: true, 
    isNew: true,
        colSpan: 1,   // ← ocupa 2 columnas de ancho
    rowSpan: 3,   // ← ocupa 2 filas de alto (pieza destacada)
  },
  { 
    id: 8, 
    image: library, 
    title: 'Knives', 
    tag: '// fanart',
    isNew: true,
    colSpan: 2,   // ← ocupa 2 columnas de ancho
    rowSpan: 2,   // ← ocupa 2 filas de alto (pieza destacada)
  }
  
];