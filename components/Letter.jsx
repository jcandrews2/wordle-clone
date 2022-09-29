import React, { useContext } from "react";
import { AppContext } from "../pages/_app.js";

function Letter({ letterPosition, letterAttemptValue }) {
  const { board, solution, currentAttempt } = useContext(AppContext);

  console.log(solution);

  const letter = board[letterAttemptValue][letterPosition];
  //correct letter in the correct position
  const correct = solution[letterPosition].toUpperCase() === letter;
  //correct letter in the wrong position
  const almost =
    !correct && letter !== "" && solution.toUpperCase().includes(letter);

  const letterGrade =
    currentAttempt.attemptNumber > letterAttemptValue &&
    (correct ? "correct" : almost ? "almost" : "incorrect");
  console.log(letterGrade);

  return (
    <div className="letter" id={letterGrade}>
      {letter}
    </div>
  );
}

export default Letter;
