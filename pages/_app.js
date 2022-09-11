import Board from "../components/Board.jsx"
import Keyboard from "../components/Keyboard.jsx"
//import global styles

function MyApp() {
  return (
  <div className = "app"> 
    <nav>
      <h1>Wordle</h1> 
    </nav> 
    <Board /> 
    <Keyboard /> 
  </div>
  );
}

export default MyApp

