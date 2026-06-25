import SectionHeader from './UI/SectionHeader';
import SocialCard from './UI/SocialCard';

export default function SocialTab({ socials }) {
  return (
    <>
<SectionHeader label=">> find me online" />
<div style={{ 
  border: "1px solid var(--border-color)", 
  background: "var(--bg-card)", 
  padding: "12px 16px", 
  marginBottom: "20px", 
  fontSize: "12px", 
  color: "var(--text-secondary)", 
  lineHeight: 1.9 
}}>
  Find me around the internet if you dare. Main hangouts: Telegram and Instagram. I dump WIPs, finished art, and random personal nonsense there. Tag me in your stuff
</div>
      <div className="social-grid">
        {socials.map((s, i) => (
          <SocialCard key={i} social={s} />
        ))}
      </div>
      <div style={{ marginTop: 24 }}>
        </div>

    </>
  );
}