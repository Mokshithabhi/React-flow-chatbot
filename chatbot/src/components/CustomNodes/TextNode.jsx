import React from 'react';
import { Handle } from 'reactflow';

export default function TextNode({ data }) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        background: '#e0f7fa',
        padding: '10px',
        minWidth: '180px',
        position: 'relative',
      }}
    >
      <strong style={{ display: 'block', color: '#00796b', marginBottom: '6px' }}>
        💬 Send Message
      </strong>
      <div>{data.label}</div>

      <Handle type="target" position="left" style={{ background: '#555' }} />
      <Handle type="source" position="right" style={{ background: '#555' }} />
    </div>
  );
}
