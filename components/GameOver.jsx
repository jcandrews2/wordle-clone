import React, { useContext } from "react";
import { AppContext } from "../pages/_app.js";

function GameOver() {
  const { gameOver, setGameOver, solution } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h1>
        {gameOver.guessedWord
          ? "You Guessed Correctly!"
          : " You Guessed Incorrectly!"}
      </h1>
      <h1>Solution: {solution.toUpperCase()} </h1>
    </div>
  );
}

export default GameOver;
