import React, { useContext } from 'react';
import { AppContext } from "../pages/_app.js";

function Keys({keyValue}){

    const { board, setBoard, currentAttempt, setCurrentAttempt } = useContext(AppContext); 

    const selectLetter = () => {
        if (keyValue === "Enter") {
            if (currentAttempt.letterPosition !== 5) return;
                setCurrentAttempt({attemptNumber: currentAttempt.attemptNumber + 1, letterPosition: 0});
                console.log(currentAttempt.attemptNumber);
        } else if (keyValue === "Delete") {
            if (currentAttempt.letterPosition === 0) return;
                const newBoard = [...board];
                newBoard[currentAttempt.attemptNumber][currentAttempt.letterPosition - 1] = "";
                setBoard(newBoard);
                setCurrentAttempt({attemptNumber: currentAttempt.attemptNumber, letterPosition: currentAttempt.letterPosition - 1});
        } else { 
            if (currentAttempt.letterPosition > 4) return;
                const newBoard = [...board];
                newBoard[currentAttempt.attemptNumber][currentAttempt.letterPosition] = keyValue;
                setBoard(newBoard);
                setCurrentAttempt({...currentAttempt, letterPosition: currentAttempt.letterPosition + 1});
            }
        }

    return <div className="keys" onClick={selectLetter}>{keyValue}</div>;
}
 
export default Keys;