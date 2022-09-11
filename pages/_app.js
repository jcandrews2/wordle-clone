import Board from "../components/Board.jsx"
import Keyboard from "../components/Keyboard.jsx"
import "../styles/globals.css"

function MyApp() {
  return (
  <div className = "App"> 
    <nav>
      <h1>Wordle</h1> 
    </nav> 
    <Board /> 
    <Keyboard /> 
  </div>
  );
}

export default MyApp

