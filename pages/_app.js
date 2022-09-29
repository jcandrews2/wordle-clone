import React, { useState, createContext, useEffect } from "react";
import DefaultBoard from "../components/DefaultBoard.jsx";
import Board from "../components/Board.jsx";
import Keyboard from "../components/Keyboard.jsx";
import "../styles/globals.css";

export const AppContext = createContext();

function MyApp() {
  const [board, setBoard] = useState(DefaultBoard);
  const [currentAttempt, setCurrentAttempt] = useState({
    attemptNumber: 0,
    letterPosition: 0,
  });
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/words")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        //gets random solution from json server
        const randomSolution =
          json[Math.floor(Math.random() * json.length)].word;
        setSolution(randomSolution);
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
        }}
      >
        {solution ? <Board /> : null}
        <Keyboard />
      </AppContext.Provider>
    </div>
  );
}

export default MyApp;
