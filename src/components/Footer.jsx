import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          ✦ geez · <i className="fas fa-heart" /> · 2026
          <br style={{ display: 'block', marginTop: 4 }} />
          <span style={{ fontSize: '0.75rem', opacity: 0.5 }}>
            Made with <i className="fas fa-coffee" /> and Y2K vibes
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;