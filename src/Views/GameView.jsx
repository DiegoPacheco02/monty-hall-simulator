import React from "react";
import { useGameState } from "../GameLogic/useGameState";
import Door from "../Components/Doors/Door";
import DoorStyled from "../Components/DoorsStyled/Door";

const GameView = () => {
  const {
    prizeDoor,
    selectedDoor,
    revealedDoor,
    finalSelection,
    isGameComplete,
    selectDoor,
    makeFinalDecision,
    resetGame,
  } = useGameState();

  return (
    <div className="game-container">
      <h1 className="game-title">Monty Hall Game</h1>

      {isGameComplete && (
        <div>
          <button className="reset-button" onClick={resetGame}>Play Again</button>
        </div>
      )}

      <div className="doors-container">
        {[0, 1, 2].map((doorNumber) => (
          <DoorStyled
            key={doorNumber}
            doorNumber={doorNumber}
            onClick={
              selectedDoor !== null && !isGameComplete
                ? makeFinalDecision
                : selectDoor
            }
            isSelected={selectedDoor === doorNumber}
            isFinal={isGameComplete && finalSelection === doorNumber}
            isDisabled={
              revealedDoor === doorNumber ||
              (isGameComplete && finalSelection !== doorNumber)
            }
            prizeDoor={prizeDoor}
          />
        ))}
      </div>
    </div>
  );
};

export default GameView;
