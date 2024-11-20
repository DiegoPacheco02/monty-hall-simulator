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
              Tu objetivo es elegir la puerta ganadora entre tres puertas disponibles. Detrás de la puerta ganadora
              está tu graduación asegurada, mientras que detrás de las otras dos puertas hay búhos.
            </p>
            <ul>
              <li>
                Primero, debes escoger una de las tres puertas.
              </li>
              <li>
                Luego, se revelará un búho detrás de una de las otras dos puertas que no elegiste.
              </li>
              <li>
                Finalmente, tendrás la opción de mantener tu elección inicial o cambiarte a la otra puerta cerrada.
              </li>
            </ul>
            <p>
              Si abres la puerta que lleva a tu graduación, ¡felicidades, ganaste!
            </p>
            <button onClick={toggleRules}>Cerrar</button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
