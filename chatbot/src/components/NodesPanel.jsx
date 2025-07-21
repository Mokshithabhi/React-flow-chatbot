export default function NodesPanel({ onDragStart }) {
  return (
    <div style={{ width: '200px', padding: '10px' }}>
      <div
        draggable
        onDragStart={(event) => onDragStart(event, 'textNode')}
        style={{ padding: '8px', border: '1px solid #aaa', cursor: 'grab' ,color:'black'}}
      >
        ➕ Message Node
      </div>
    </div>
  );
}
