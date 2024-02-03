import React, { useContext } from "react";
import Letter from "./Letter";
function Board() {
  return (
    <div className="board">
      <div className="row">
        <Letter letterPosition={0} letterAttemptValue={0} />
        <Letter letterPosition={1} letterAttemptValue={0} />
        <Letter letterPosition={2} letterAttemptValue={0} />
        <Letter letterPosition={3} letterAttemptValue={0} />
        <Letter letterPosition={4} letterAttemptValue={0} />
      </div>
      <div className="row">
        <Letter letterPosition={0} letterAttemptValue={1} />
        <Letter letterPosition={1} letterAttemptValue={1} />
        <Letter letterPosition={2} letterAttemptValue={1} />
        <Letter letterPosition={3} letterAttemptValue={1} />
        <Letter letterPosition={4} letterAttemptValue={1} />
      </div>
      <div className="row">
        <Letter letterPosition={0} letterAttemptValue={2} />
        <Letter letterPosition={1} letterAttemptValue={2} />
        <Letter letterPosition={2} letterAttemptValue={2} />
        <Letter letterPosition={3} letterAttemptValue={2} />
        <Letter letterPosition={4} letterAttemptValue={2} />
      </div>
      <div className="row">
        <Letter letterPosition={0} letterAttemptValue={3} />
        <Letter letterPosition={1} letterAttemptValue={3} />
        <Letter letterPosition={2} letterAttemptValue={3} />
        <Letter letterPosition={3} letterAttemptValue={3} />
        <Letter letterPosition={4} letterAttemptValue={3} />
      </div>
      <div className="row">
        <Letter letterPosition={0} letterAttemptValue={4} />
        <Letter letterPosition={1} letterAttemptValue={4} />
        <Letter letterPosition={2} letterAttemptValue={4} />
        <Letter letterPosition={3} letterAttemptValue={4} />
        <Letter letterPosition={4} letterAttemptValue={4} />
      </div>
      <div className="row">
        <Letter letterPosition={0} letterAttemptValue={5} />
        <Letter letterPosition={1} letterAttemptValue={5} />
        <Letter letterPosition={2} letterAttemptValue={5} />
        <Letter letterPosition={3} letterAttemptValue={5} />
        <Letter letterPosition={4} letterAttemptValue={5} />
      </div>
    </div>
  );
}

export default Board;
