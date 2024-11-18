import React, { useState } from "react";

const GameControls = ({ onKeepDecision, onChangeDecision, onReset }) => {
  const [promptOpen, setPromptOpen] = useState(false);

  const handleOpenPrompt = () => setPromptOpen(true);
  const handleClosePrompt = () => setPromptOpen(false);

  const handleKeepDecision = () => {
    onKeepDecision(); // Llama a la función pasada como prop para mantener.
    handleClosePrompt(); // Cierra el modal.
  };

  const handleChangeDecision = () => {
    onChangeDecision(); // Llama a la función pasada como prop para cambiar.
    handleClosePrompt(); // Cierra el modal.
  };

  return (
    <div>
      <div className="controls">
        <div className="next-choice">
          <button onClick={handleOpenPrompt} className="game-button">
            Siguiente Movimiento
          </button>
          <button onClick={onReset} className="game-button">
            Reiniciar Juego
          </button>
        </div>

        {promptOpen && (
          <div className="modal">
            <div className="modal-content">
              <p>¿Desea cambiar de puerta?</p>
              <button onClick={handleKeepDecision}>Mantener</button>
              <button onClick={handleChangeDecision}>Cambiar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameControls;
