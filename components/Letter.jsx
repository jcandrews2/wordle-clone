import React, { useContext } from 'react';
import { AppContext } from "../pages/_app.js";

function Letter({letterPosition, letterAttemptValue}){
    const { board } = useContext(AppContext);
    const letter = board[letterAttemptValue][letterPosition];

    return <div className="letter">{letter}</div>; 
}

export default Letter;