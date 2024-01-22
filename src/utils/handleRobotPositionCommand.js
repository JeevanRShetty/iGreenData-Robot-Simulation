export const handleRobotPositionCommand = (robotPosition, inputCommand, setRobotPosition, setReport, setError) => {
    const inputDimentionParts = inputCommand.trim().toUpperCase().split(' ');
  
    if (inputDimentionParts[0] === 'PLACE') {
      const [x, y, direction] = inputDimentionParts[1].split(',');
      setRobotPosition({ x: parseInt(x), y: parseInt(y), direction });
    } else if (robotPosition.x !== null) {
      switch (inputDimentionParts[0]) {
        case 'MOVE':
          handleRobotMove(robotPosition, setRobotPosition);
          break;
        case 'LEFT':
        case 'RIGHT':
          handleRobotRotate(robotPosition, inputDimentionParts[0], setRobotPosition);
          break;
        case 'REPORT':
          handleRobotReport(robotPosition, setReport);
          break;
        default:
          handleInvalidInput(setError)
      }
    }
  };
  
  export const handleRobotMove = (robotPosition, setRobotPosition, setError) => {
    let newX = robotPosition.x;
    let newY = robotPosition.y;
  
    switch (robotPosition.direction) {
      case 'NORTH':
        newY = Math.min(robotPosition.y + 1, 4);
        break;
      case 'SOUTH':
        newY = Math.max(robotPosition.y - 1, 0);
        break;
      case 'EAST':
        newX = Math.min(robotPosition.x + 1, 4);
        break;
      case 'WEST':
        newX = Math.max(robotPosition.x - 1, 0);
        break;
      default:
        handleInvalidInput(setError)
        return;
    }
  
    setRobotPosition({ x: newX, y: newY, direction: robotPosition.direction });
  };

  export const handleRobotRotate = (robotPosition, direction, setRobotPosition, setError) => {
    let newDirection;
  
    switch (robotPosition.direction) {
      case 'NORTH':
        newDirection = direction === 'LEFT' ? 'WEST' : 'EAST';
        break;
      case 'SOUTH':
        newDirection = direction === 'LEFT' ? 'EAST' : 'WEST';
        break;
      case 'EAST':
        newDirection = direction === 'LEFT' ? 'NORTH' : 'SOUTH';
        break;
      case 'WEST':
        newDirection = direction === 'LEFT' ? 'SOUTH' : 'NORTH';
        break;
      default:
        handleInvalidInput(setError);
        return;
    }
  
    setRobotPosition({ ...robotPosition, direction: newDirection });
  };
  
  export const handleRobotReport = (robotPosition, setReport) => {
    const report = `Output: ${robotPosition.x},${robotPosition.y},${robotPosition.direction}`;
    setReport(report); 
  };

  export const handleInvalidInput = (setError) => {
   setError('Invalid command')
  }
