// src/data/gameShowcase.js
//
// Toda la info del proyecto destacado vive aquí.
// Para imágenes reales: importa tus .webp arriba y reemplaza los arrays
// gameplayShots / conceptShots.

// import shot1 from '../assets/game/gameplay1.webp';
// (de momento puedes dejar las rutas como placeholders de texto)

export const gameInfo = {
  title: 'West High',
  subtitle: 'inserta un subtitulo',
  engine: "Ren'Py",
  started: '2025',
  status: 'in dev',
  genre: 'visual novel',
  progress: 38, // 0–100, alimenta ambas barras de progreso
};

export const premise = `In a dystopian city where memories can be bought and sold, Sable works as a memory thief for the underground market. When she steals a memory that isn't supposed to exist, she uncovers a secret that could collapse the entire system — and puts her own fading identity at risk.`;

export const characters = [
  { id: 1, emoji: '🕵️', name: 'Sable',       role: 'protagonist'   },
  { id: 2, emoji: '🤖',  name: 'Núm',         role: 'AI companion'  },
  { id: 3, emoji: '🕴️', name: 'Director Vey', role: 'antagonist'   },
];

export const mechanics = [
  'Memory-diving puzzle sequences between chapters',
  'Branching dialogue affects which memories you can access',
  'Limited "clarity" resource — manage it to avoid blackouts',
];

// Screenshots de gameplay — reemplaza `image: null` por tu import real
export const gameplayShots = [
  { id: 1, image: null, label: 'Forest Scene' },
  { id: 2, image: null, label: 'Battle UI'    },
  { id: 3, image: null, label: 'Dialogue'     },
  { id: 4, image: null, label: 'Map View'     },
];

// Texto libre debajo del visor de gameplay (dev notes, trivia, inspiración, etc.)
export const devNote = `Lorem ipsum dolor sit amet, this is placeholder text you can replace with anything — dev notes, behind the scenes, inspiration, trivia, whatever fits best once the project moves forward.`;

// Screenshots de concept art
export const conceptShots = [
  { id: 1, image: null, label: 'Sable Concept' },
  { id: 2, image: null, label: 'Enemy Design'  },
  { id: 3, image: null, label: 'Env Sketch'    },
];

// Hitos para la barra de progreso final
export const milestones = [
  { label: 'script',      done: true  },
  { label: 'art',         done: true  },
  { label: 'programming', done: false },
  { label: 'music',       done: false },
  { label: 'release',     done: false },
];

export const links = [
  { label: 'itch.io page →',     url: '#' },
  { label: 'devlog blog →',      url: '#' },
  { label: 'wishlist (steam) →', url: '#' },
];

export const tags = ['#visualnovel', '#scifi', '#solodev', '#renpy', '#mystery'];

export const ageWarning = {
  badge: 'M',
  title: 'MATURE CONTENT WARNING',
  text: 'This game is intended for audiences 18+. Contains violence, mature themes, and content not suitable for minors. Player discretion advised.',
};
