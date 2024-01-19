import React from 'react';

const CommandInput = ({ value, onChange, executeCommand }) => (
  <div className="command-input">
    <input
      type="text"
      placeholder="Enter command..."
      value={value}
      onChange={onChange}
    />
    <button onClick={executeCommand}>Execute</button>
  </div>
);

export default CommandInput;
