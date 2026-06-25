// src/components/GameShowcase/LinksWidget.jsx
export default function LinksWidget({ links, tags }) {
  return (
    <>
      <div className="tech-widget">
        <div className="t-head">:: find the game</div>
        <div className="t-body">
          {links.map((link, i) => (
            <a key={i} className="link-item" href={link.url}>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="tech-widget">
        <div className="t-head">:: tags</div>
        <div className="t-body">
          {tags.map((tag, i) => (
            <span key={i} className="tag-chip">{tag}</span>
          ))}
        </div>
      </div>
    </>
  );
}
