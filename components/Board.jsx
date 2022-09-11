import react, {useState} from 'react';
import {boardDefault} from './components/DefaultBoard.jsx';

const Board = () => {
    const [board, setBoard] = useState(boardDefault);
    return <div className = "Board">
            <div className = "row"> 

            </div> 
            <div className = "row"></div>
            <div className = "row"></div>
            <div className = "row"></div>
            <div className = "row"></div>
    </div>;

}

export default Board;

