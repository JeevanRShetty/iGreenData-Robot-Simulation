import React, { useState } from 'react';
import RobotDisplay from './RobotDisplay';
import CommandInput from './CommandInput';
import ErrorDisplay from './ErrorDisplay';
import ReportOutput from './ReportOutput';
import { handleRobotPositionCommand } from '../utils/handleRobotPositionCommand'

const ToyRobot = () => {
  const [robotPosition, setRobotPosition] = useState({ x: null, y: null, direction: null });
  const [inputPosition, setInputPosition] = useState('');
  const [report, setReport] = useState('');
  const [error, setError] = useState('');

  const executeCommand = () => {
    setError('');
    handleRobotPositionCommand(robotPosition, inputPosition, setRobotPosition, setReport, setError);
  };

  const handleInputChange = (e) => {
    setError('');
    setReport('');
    setInputPosition(e.target.value);
  };

  return (
    <div className="toy-robot-container">
      <RobotDisplay robotPosition={robotPosition} />
      <ErrorDisplay error={error} />
      <ReportOutput report={report} />
      <CommandInput
        value={inputPosition}
        onChange={handleInputChange}
        executeCommand={executeCommand}
      />
    </div>
  );
};

export default ToyRobot;
