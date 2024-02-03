import React, { useState, createContext, useEffect } from "react";
import DefaultBoard from "../components/DefaultBoard.jsx";
import Board from "../components/Board.jsx";
import Keyboard from "../components/Keyboard.jsx";
import GameOver from "../components/GameOver.jsx";
import "../styles/globals.css";

export const AppContext = createContext();

function MyApp() {
  const [board, setBoard] = useState(DefaultBoard);
  const [currentAttempt, setCurrentAttempt] = useState({
    attemptNumber: 0,
    letterPosition: 0,
  });
  const [solution, setSolution] = useState(null);
  const [wordSet, setWordSet] = useState(null);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  useEffect(() => {
    fetch("http://localhost:8000/words")
      .then((res) => res.json())
      .then((json) => {
        //gets random solution from json server
        const randomSolution =
          json[Math.floor(Math.random() * json.length)].word;
        console.log(randomSolution);
        setSolution(randomSolution);
        const wordArray = json.map((words) => words.word);
        setWordSet(new Set(wordArray));
      });
  }, []);

  return (
    <div className="App">
      <div className="Nav">
        <nav>
          <div className="Header">
            <h1>Wordle</h1>
          </div>
        </nav>
      </div>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currentAttempt,
          setCurrentAttempt,
          solution,
          setSolution,
          wordSet,
          setWordSet,
          gameOver,
          setGameOver,
        }}
      >
        {solution ? <Board /> : null}
        {gameOver.gameOver ? <GameOver /> : <Keyboard />}
      </AppContext.Provider>
    </div>
  );
}

export default MyApp;
