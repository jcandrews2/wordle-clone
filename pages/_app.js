import React, { useState, createContext, useEffect } from "react";
import DefaultBoard from "../components/DefaultBoard.jsx";
import Board from "../components/Board.jsx";
import Keyboard from "../components/Keyboard.jsx";
import "../styles/globals.css";

export const AppContext = createContext();

function MyApp() {
  const [board, setBoard] = useState(DefaultBoard);
  const [solution, setSolution] = useState(null);

  return (
    <div className="App">
      <div className="Nav">
        <nav>
          <div className="h1">
            <h1>Wordle</h1>
          </div>
        </nav>
      </div>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          solution,
          setSolution,
        }}
      >
        <Board />
        <Keyboard />
      </AppContext.Provider>
    </div>
  );
}

export default MyApp;
