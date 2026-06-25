import Widget from './UI/Widget';
import glitch from '../assets/glitch.gif';
export default function SidebarLeft({ tick }) {
  return (
    <div className="sidebar">
      <Widget title="personal information">
        <div style={{ color: "#c8d8a8", marginBottom: 6 }}>Country: Cuba</div>
        <div style={{ marginTop: 8, color: "#c8d8a8" }}>Age: 23 </div>
        <div style={{ marginTop: 8, color: "#c8d8a8" }}>Gender: Male </div>
        <div style={{ marginTop: 8, color: "#c8d8a8" }}>Pronouns: he/him </div>


      </Widget>
      <Widget title="tools">
        <div>Clip Studio</div>
        <div>Ibis Paint X</div>
        <div>Medibang Pro Paint</div>
      </Widget>

      <Widget title=" W I P ">
        <div style={{ textAlign: 'center' }}>
          <img 
            src={glitch} 
            alt="GIF animado" 
            style={{
              width: '100%',
              maxWidth: '160px',
              height: 'auto',
              borderRadius: '4px',
              border: '1px solid #2a3a5a'
            }}
          />
          <div style={{ 
            fontSize: '9px', 
            color: '#7a9fc0', 
            marginTop: '6px',
            letterSpacing: '1px'
          }}>
          </div>
        </div>
      </Widget>

      {/* Resto de widgets */}
      <Widget title="tags">
        {/* ... */}
      </Widget>

    </div>
  );
}