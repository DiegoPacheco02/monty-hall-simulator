import { useState } from "react";

export const useGameState = () => {
  // La puerta del premio se selecciona de manera aleatoria al inicio del juego.
  const [prizeDoor, setPrizeDoor] = useState(Math.floor(Math.random() * 3));
  const [selectedDoor, setSelectedDoor] = useState(null);
  const [revealedDoor, setRevealedDoor] = useState(null);
  const [finalSelection, setFinalSelection] = useState(null);
  const [isGameComplete, setIsGameComplete] = useState(false);

  const selectDoor = (door) => {
    // Permitir que se seleccione la puerta solo si aún no hay una puerta seleccionada.
    if (selectedDoor === null) {
      setSelectedDoor(door);
      const remainingDoors = [0, 1, 2].filter(
        (d) => d !== door && d !== prizeDoor
      );
      setRevealedDoor(
        remainingDoors[Math.floor(Math.random() * remainingDoors.length)]
      );
    }
  };

  const makeFinalDecision = (action) => {
    // Determina la decisión del jugador: "mantener" o "cambiar".
    if (selectedDoor !== null) {
      if (action === "mantener") {
        setFinalSelection(selectedDoor); // Mantiene la puerta inicial.
      } else if (action === "cambiar") {
        const remainingDoor = [0, 1, 2].find(
          (door) => door !== selectedDoor && door !== revealedDoor
        );
        setFinalSelection(remainingDoor); // Cambia a la otra puerta.
      }
      setIsGameComplete(true); // Finaliza el juego.
    }
  };

  const resetGame = () => {
    // Resetear el juego y seleccionar una nueva puerta de premio al azar.
    setSelectedDoor(null);
    setRevealedDoor(null);
    setFinalSelection(null);
    setIsGameComplete(false);
    setTimeout(() => setPrizeDoor(Math.floor(Math.random() * 3)), 500);
  };

  return {
    prizeDoor,
    selectedDoor,
    revealedDoor,
    finalSelection,
    isGameComplete,
    selectDoor,
    makeFinalDecision, // Ahora expone la nueva función para manejar decisiones.
    resetGame,
  };
};