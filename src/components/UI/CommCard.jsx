const statusMap = { open: "status-open", closed: "status-closed", waitlist: "status-waitlist" };
const statusLabel = { open: ":: OPEN", closed: ":: CLOSED", waitlist: ":: WAITLIST" };

export default function CommCard({ comm }) {
  return (
    <div className="comm-card">
      <div className="comm-card-top">
        <div className="comm-type">{comm.type}</div>
        <div className="comm-price">{comm.price}</div>
      </div>
      <div className={`${statusMap[comm.status]} status-pill`}>{statusLabel[comm.status]}</div>
      <div className="comm-desc">{comm.desc}</div>
      <div className="comm-includes">
        {comm.includes.map((item, j) => (
          <div key={j}><span>+ </span>{item}</div>
        ))}
      </div>
    </div>
  );
}