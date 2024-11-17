import React from 'react';
import './Door.css';

const Door = ({ doorNumber, onClick, isSelected, isRevealed, isFinal, isDisabled }) => {
  return (
    <button
      className={`door ${isSelected ? 'selected' : ''} ${isFinal ? 'final' : ''}`}
      onClick={() => onClick(doorNumber)}
      disabled={isDisabled}
    >
      {isRevealed ? 'Goat 🐐' : `Door ${doorNumber + 1}`}
    </button>
  );
};

export default Door;
