import React, { useState } from "react";
import { useGameState } from "../GameLogic/useGameState";
import DoorStyled from "../Components/DoorsStyled/Door";
import GameControls from "../Components/GameControls/GameControls";
import "./GameView.css";

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleKeepDecision = () => {
    makeFinalDecision("mantener");
    handleCloseModal();
  };

  const handleChangeDecision = () => {
    makeFinalDecision("cambiar");
    handleCloseModal();
  };

  return (
    <div className="game-container">
      <h1 className="game-title">Monty Hall Game</h1>

      {isGameComplete && (
        <div>
          <h2 className="game-result">
            {finalSelection === prizeDoor
              ? "¡Ganaste! Elegiste la puerta correcta 🎉"
              : "Perdiste, mejor suerte la próxima vez 😞"}
          </h2>
          <button className="reset-button" onClick={resetGame}>
            Jugar de nuevo
          </button>
        </div>
      )}

      <div className="doors-container">
        {[0, 1, 2].map((doorNumber) => (
          <DoorStyled
            key={doorNumber}
            doorNumber={doorNumber}
            onClick={() =>
              selectedDoor === null ? selectDoor(doorNumber) : null
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

      {!isGameComplete && selectedDoor !== null && (
        <GameControls
          onOpenModal={handleOpenModal}
          onKeepDecision={handleKeepDecision}
          onChangeDecision={handleChangeDecision}
          onReset={resetGame}
        />
      )}

      {isModalOpen && (
        <>
          <div className="modal-overlay" onClick={handleCloseModal}></div>
          <div className="modal">
            <div className="modal-content">
              <p>¿Desea cambiar de puerta?</p>
              <button onClick={handleKeepDecision}>Mantener</button>
              <button onClick={handleChangeDecision}>Cambiar</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GameView;