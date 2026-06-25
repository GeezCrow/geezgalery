export default function Widget({ title, children }) {
  return (
    <div className="widget">
      <div className="widget-title">:: {title}</div>
      <div className="widget-body">{children}</div>
    </div>
  );
}