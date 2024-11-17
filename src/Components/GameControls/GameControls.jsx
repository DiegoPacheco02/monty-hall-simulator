import React from 'react';

const GameControls = ({ onChangeDecision, onKeepDecision, onReset }) => {
  return (
    <div className="controls">
      <button onClick={onChangeDecision}>Switch Door</button>
      <button onClick={onKeepDecision}>Keep Door</button>
      <button onClick={onReset}>Reset Game</button>
    </div>
  );
};

export default GameControls;
