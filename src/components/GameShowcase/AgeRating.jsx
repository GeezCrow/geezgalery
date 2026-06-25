// src/components/GameShowcase/AgeRating.jsx
export default function AgeRating({ badge, title, text }) {
  return (
    <div className="age-rating">
      <div className="rating-badge">{badge}</div>
      <div className="rating-text">
        <strong>{title}</strong>
        <br />
        {text}
      </div>
    </div>
  );
}
