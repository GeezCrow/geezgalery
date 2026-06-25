// src/components/GameShowcase/MechanicsList.jsx
export default function MechanicsList({ items }) {
  return (
    <ul className="mech-list">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
