import SectionHeader from './UI/SectionHeader';
import CommCard from './UI/CommCard';
import CommMatrix from './UI/CommMatrix';
export default function CommissionsTab({ commissions })
/*Esto hay que arreglarlo despues para que coincida conn lo de styles.css*/
{
  return (
    <>
<SectionHeader label=">> commission info" />
<div style={{ 
  border: '1px solid var(--border-color)', 
  background: 'var(--bg-card)', 
  padding: '12px 16px', 
  marginBottom: '20px', 
  fontSize: '10px', 
  color: 'var(--text-secondary)', 
  lineHeight: 1.9 
}}>
  <strong style={{ color: 'var(--text-primary)' }}>:: RULES: </strong> 
        <br></br> 
• Payment will be made after the sketch is <strong style={{ color: '#ff6644' }}>approved</strong>  
• No <strong style={{ color: '#ff6644' }}>refunds</strong> after the sketch  
(Be sure of what you are requesting)  
<br></br>  
• If the project requires <strong style={{ color: '#ff6644' }}>confidentiality</strong>, an additional fee will be charged <strong style={{ color: '#ff6644' }}>(25%)</strong>  
• Provide clear <strong style={{ color: '#ff6644' }}>references</strong>  
<br></br>  
<strong style={{ color: '#c8d8a8' }}>✔ I do:</strong>  
Yuri, NSFW (experimental)  
<br></br>  
<strong style={{ color: '#c8d8a8' }}>✘ I don't do:</strong>  
Furry (not yet), Mecha (not yet), Gore, Yaoi.
<br></br>
                <strong style={{ color: '#ff6644',fontSize: 8 }}>Response time: 24-48h</strong>
      </div>

      {/* Contenedor con dos columnas lado a lado */}
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        {/* Columna izquierda: Price Chart */}
        <div style={{ flex: '1 1 45%', minWidth: '280px' }}>
          <SectionHeader label=">> price chart" />
          <CommMatrix />
        </div>

        {/* Columna derecha: Package Details */}
        <div style={{ flex: '1 1 45%', minWidth: '280px' }}>
          <SectionHeader label=">> package details" />
          <div className="comm-grid">
            {commissions.map((c, i) => (
              <CommCard key={i} comm={c} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}