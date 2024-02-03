import React, { useContext } from "react";
import { AppContext } from "../pages/_app.js";

function Letter({ letterPosition, letterAttemptValue }) {
  const { board, solution, currentAttempt } = useContext(AppContext);

  const letter = board[letterAttemptValue][letterPosition];

  const correct = solution[letterPosition].toUpperCase() === letter;

  const almost =
    !correct && letter !== "" && solution.toUpperCase().includes(letter);

  let letterGrade =
    currentAttempt.attemptNumber > letterAttemptValue &&
    (correct ? "correct" : almost ? "almost" : "incorrect");

  return (
    <div className="letter" id={letterGrade ? letterGrade : null}>
      {letter}
    </div>
  );
}

export default Letter;
