import {
    handleRobotPositionCommand,
    handleRobotMove,
    handleRobotRotate,
    handleRobotReport,
    handleInvalidInput,
  } from '../../utils/handleRobotPositionCommand';
  
  describe('handleRobotPositionCommand', () => {
    it('handles PLACE command and updates robot position', () => {
      const setRobotPosition = jest.fn();
      const setReport = jest.fn();
      const setError = jest.fn();
  
      handleRobotPositionCommand({ x: null, y: null, direction: null }, 'PLACE 1,2,NORTH', setRobotPosition, setReport, setError);
  
      expect(setRobotPosition).toHaveBeenCalledWith({ x: 1, y: 2, direction: 'NORTH' });
      expect(setReport).not.toHaveBeenCalled();
      expect(setError).not.toHaveBeenCalled();
    });
  
    it('handles invalid command when robot is not placed', () => {
      const setRobotPosition = jest.fn();
      const setReport = jest.fn();
      const setError = jest.fn();
  
      handleRobotPositionCommand({ x: null, y: null, direction: null }, 'MOVE', setRobotPosition, setReport, setError);
  
      expect(setRobotPosition).not.toHaveBeenCalled();
      expect(setReport).not.toHaveBeenCalled();
    });
    });
  
  describe('handleRobotMove', () => {
    it('handles MOVE command and updates robot position', () => {
      const setRobotPosition = jest.fn();
      const setError = jest.fn();
  
      handleRobotMove({ x: 1, y: 2, direction: 'NORTH' }, setRobotPosition, setError);

      expect(setRobotPosition).toHaveBeenCalledWith({ x: 1, y: 3, direction: 'NORTH' });
    });
  });
  
  describe('handleRobotRotate', () => {
    it('handles LEFT rotation command and updates robot direction', () => {
      const setRobotPosition = jest.fn();
      const setError = jest.fn();
  
      handleRobotRotate({ x: 1, y: 2, direction: 'NORTH' }, 'LEFT', setRobotPosition, setError);
  
      expect(setRobotPosition).toHaveBeenCalledWith({ x: 1, y: 2, direction: 'WEST' });
    });
  });
  
  describe('handleRobotReport', () => {
    it('handles REPORT command and sets the report', () => {
      const setReport = jest.fn();
  
      handleRobotReport({ x: 1, y: 2, direction: 'NORTH' }, setReport);
  
      expect(setReport).toHaveBeenCalledWith('Output: 1,2,NORTH');
    });
  
  });
  
  describe('handleInvalidInput', () => {
    it('sets the error for invalid input', () => {
      const setError = jest.fn();
  
      handleInvalidInput(setError);
  
      expect(setError).toHaveBeenCalledWith('Invalid command');
    });
  });
  