import React from 'react';

const ErrorDisplay = ({ error }) => (
  error && (
    <div className="error">
      <p>{error}</p>
    </div>
  )
);

export default ErrorDisplay;
