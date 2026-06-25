export default function ArtCard({ art, onOpen }) {
  return (
    <div 
      className={`art-card${art.featured ? ' featured' : ''}`}
      onClick={() => onOpen(art)}
    >
      {art.isNew && <div className="new-badge">NEW</div>}
      <div className="art-thumb">
        <img 
          src={art.image} 
          alt={art.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />
        <div className="art-thumb-label">CJ/05</div>
      </div>
      <div className="art-info">
        <div className="art-title">{art.title}</div>
        <div className="art-tag">{art.tag}</div>
      </div>
    </div>
  );
}