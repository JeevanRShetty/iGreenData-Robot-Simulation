import React from 'react';

const ReportOutput = ({ report }) => (
  report && (
   <div className="output">
      <p>{report}</p>
    </div>
  )
);

export default ReportOutput;
