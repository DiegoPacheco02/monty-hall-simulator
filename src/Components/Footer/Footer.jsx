import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [showRules, setShowRules] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };
  
  const toggleRules = () => {
    setShowRules(!showRules);
  };

  return (
    <footer className="footer">
      <button className="footer-button" onClick={toggleDescription}>
        Descripción
      </button>
      <button className="footer-button" onClick={toggleRules}>
        Reglas
      </button>

      {showDescription && (
        <div className="dialog-box">
          <div className="dialog-content">
            <h2>Descripción del Juego Monty Hall</h2>
            <p>
              El problema de Monty Hall es un juego de probabilidad basado en un
              programa de concursos. El juego comienza con tres puertas cerradas, 
              de entre ellas solo una contiene premio, mientras que las otras se 
              encuentran sin premio alguno. Después de elegir una de las tres 
              puertas, una de las dos puertas restantes se abrirá para mostrar 
              que no hay premio detrás de ella. Como jugador, podrás elegir entre
              quedarse con la puerta inicialmente elegida o escoger la puerta que
              queda ¿Deberías cambiar o mantener tu elección?
            </p>
            <button onClick={toggleDescription}>Cerrar</button>
          </div>
        </div>
      )}

      {showRules && (
        <div className="dialog-box">
          <div className="dialog-content">
            <h2>Reglas del Juego Monty Hall</h2>
            <p>
              - El objetivo de este juego es elegir la puerta ganadora entre tres puertas disponibles. 
              Detrás de la puerta ganadora hay un auto nuevo, y detrás de las otras dos puertas hay cabras.
            </p>
            <p>
              - Primero, el jugador debe escoger una de las tres puertas.
            </p>
            <p>
              - Luego, el presentador del programa revelará una cabra detrás de una de las otras dos puertas 
              (el presentador siempre sabe dónde está el auto y nunca lo revelará).
            </p>
            <p>
              - Finalmente, el jugador puede abrir la puerta que eligió inicialmente o cambiarse a la otra puerta cerrada. 
              ¡Si la puerta que abre revela un auto nuevo, el jugador gana!
            </p>
            <button onClick={toggleRules}>Cerrar</button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;