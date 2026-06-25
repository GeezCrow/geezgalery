// src/components/GameShowcase/TextSection.jsx
export default function TextSection({ title, children }) {
  return (
    <div className="section-block">
      <div className="s-head">{title}</div>
      <div className="s-text">{children}</div>
    </div>
  );
}
