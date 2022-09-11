import Letter from './Letter';
import react, {useState} from 'react';
import {boardDefault} from './DefaultBoard.jsx';

const Board = () => {
    const [board, setBoard] = useState(boardDefault);
    return ( 
        <div className = "board">
            <div className = "row">
                <Letter letterPosition = {0} letterAttemptedValue = {0}/> 
                <Letter letterPosition = {1} letterAttemptedValue = {0}/> 
                <Letter letterPosition = {2} letterAttemptedValue = {0}/> 
                <Letter letterPosition = {3} letterAttemptedValue = {0}/> 
                <Letter letterPosition = {4} letterAttemptedValue = {0}/> 
            </div>
            <div className = "row">
                <Letter letterPosition = {0} letterAttemptedValue = {1}/> 
                <Letter letterPosition = {1} letterAttemptedValue = {1}/> 
                <Letter letterPosition = {2} letterAttemptedValue = {1}/> 
                <Letter letterPosition = {3} letterAttemptedValue = {1}/> 
                <Letter letterPosition = {4} letterAttemptedValue = {1}/> 
            </div>
            <div className = "row">
                <Letter letterPosition = {0} letterAttemptedValue = {2}/> 
                <Letter letterPosition = {1} letterAttemptedValue = {2}/> 
                <Letter letterPosition = {2} letterAttemptedValue = {2}/> 
                <Letter letterPosition = {3} letterAttemptedValue = {2}/> 
                <Letter letterPosition = {4} letterAttemptedValue = {2}/> 
            </div>
            <div className = "row">
                <Letter letterPosition = {0} letterAttemptedValue = {3}/> 
                <Letter letterPosition = {1} letterAttemptedValue = {3}/> 
                <Letter letterPosition = {2} letterAttemptedValue = {3}/> 
                <Letter letterPosition = {3} letterAttemptedValue = {3}/> 
                <Letter letterPosition = {4} letterAttemptedValue = {3}/> 
            </div>
            <div className = "row">
                <Letter letterPosition = {0} letterAttemptedValue = {4}/> 
                <Letter letterPosition = {1} letterAttemptedValue = {4}/> 
                <Letter letterPosition = {2} letterAttemptedValue = {4}/> 
                <Letter letterPosition = {3} letterAttemptedValue = {4}/> 
                <Letter letterPosition = {4} letterAttemptedValue = {4}/> 
            </div>
        </div>
    );
}

export default Board;

