import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <footer className="footer">
      <button className="footer-button" onClick={toggleDescription}>
        Descripción
      </button>
      <button className="footer-button">Reglas</button>

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
    </footer>
  );
};

export default Footer;