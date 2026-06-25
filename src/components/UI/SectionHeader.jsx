export default function SectionHeader({ label }) {
  return (
    <div className="section-header">
      <div className="section-label">{label}</div>
      <div className="section-line" />
    </div>
  );
}