import React from 'react';

const RobotDisplay = ({ robotPosition }) => (
  <div className="toy-robot-display">
    <p>{robotPosition.x !== null ? 'Robot is placed on Table' : 'Robot is not placed'}</p>
  </div>
);

export default RobotDisplay;
