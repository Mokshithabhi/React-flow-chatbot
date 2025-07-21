export default function SettingsPanel({ selectedNode, onBack, onTextChange }) {
  if (!selectedNode) return null;

  return (
    <div style={{
      width: '300px',
      padding: '20px',
      
      background: '#fff',
    }}>
      <button
        onClick={onBack}
        style={{
          marginBottom: '10px',
          background: 'none',
          border: 'none',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        ←
      </button>
      <h4>Message</h4>
      <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Text</label>
      <textarea
        rows={5}
        style={{ width: '100%', padding: '8px' ,border:'1px solid grey'}}
        value={selectedNode.data.label}
        onChange={(e) => onTextChange(e.target.value)}
      />
    </div>
  );
}
