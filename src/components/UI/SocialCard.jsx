// UI/SocialCard.jsx
export default function SocialCard({ social }) {
  // Si no hay avatar, usamos un ícono (puede ser emoji o componente)
  const fallbackIcon = social.icon || '🔗';

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="social-card"
    >
      {/* Avatar o ícono */}
      <span className="social-icon">
        {social.avatar ? (
          <img
            src={social.avatar}
            alt={social.username || 'Avatar'}
            className="social-avatar"
          />
        ) : (
          fallbackIcon
        )}
      </span>

      {/* Texto: nombre y handle */}
      <div className="social-info">
        <span className="social-platform">{social.name}</span>
        <span className="social-handle">{social.username}</span>
      </div>
    </a>
  );
}