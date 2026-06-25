// src/components/GameShowcase/CharacterGrid.jsx
export default function CharacterGrid({ characters }) {
  return (
    <div className="char-grid">
      {characters.map(c => (
        <div className="char-card" key={c.id}>
          <div className="c-emoji">{c.emoji}</div>
          <div className="c-name">{c.name}</div>
          <div className="c-role">{c.role}</div>
        </div>
      ))}
    </div>
  );
}
