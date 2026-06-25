import Widget from './UI/Widget';

export default function SidebarRight({ tick }) {
  return (
    <div className="sidebar-right">
      <Widget title="news">
        <div style={{ color: "#ff6644", marginBottom: 4 }}>06/16/26</div>
        <div>Site v3.0 is live! New gallery layout and commission info updated.</div>
        <div style={{ color: "#2a3a5a", margin: "8px 0" }}>────</div>
        <div style={{ color: "#ffc844", marginBottom: 4 }}>05/30/26</div>
        <div>Waitlist open for full color comms. Check the commission page!</div>
      </Widget>
      <Widget title="upcoming">
        <div>++ Inktober prep</div>
        <div>++ New OC sheet</div>
        <div>++ Redraw challenge</div>
        <div style={{ marginTop: 8, color: "#7a9fc0" }}>++ chibi batch TBA</div>
      </Widget>
    </div>
  );
}