// src/data/indiedev.js
// status: "wip" | "paused" | "done"

export const projects = [
  {
    id: 1,
    title: "PROJECT WH",
    subtitle: "Visual Novel",
    status: "wip",
    year: "2026—",
    desc: "A sci-fi visual novel set in a dystopian city where memories can be bought and sold. Follow Sable, a memory thief who discovers a secret that could collapse the system.",
    tags: ["visual novel", "sci-fi", "renpy"],
    links: { itch: "#", github: "#" },
    emoji: "🧠",
  },
  {
    id: 2,
    title: "NEON FAMILIAR",
    subtitle: "RPG / Demo",
    status: "paused",
    year: "2024",
    desc: "A short RPG Maker demo about a witch and her glitchy digital familiar navigating a corrupted dungeon. 30 min playthrough.",
    tags: ["rpg", "rpgmaker", "demo"],
    links: { itch: "#" },
    emoji: "🔮",
  },
  {
    id: 3,
    title: "GLITCH GARDEN",
    subtitle: "Puzzle Game",
    status: "done",
    year: "2023",
    desc: "A small puzzle game made for a 72h game jam. Manipulate corrupted pixels to restore a broken world.",
    tags: ["gamejam", "puzzle", "godot"],
    links: { itch: "#", github: "#" },
    emoji: "🌿",
  },
];

export const statusConfig = {
  wip:    { label: ":: IN DEV",  className: "proj-status-wip"    },
  paused: { label: ":: PAUSED",  className: "proj-status-paused" },
  done:   { label: ":: DONE",    className: "proj-status-done"   },
};
