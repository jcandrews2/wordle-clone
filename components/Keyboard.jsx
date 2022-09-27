import Keys from './Keys.jsx';

function Keyboard(){ 
    const keys = [
        "Q",
        "W",
        "E",
        "R",
        "T",
        "Y",
        "U",
        "I",
        "O",
        "P",
        "A",
        "S",
        "D",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "Enter",
        "Z",
        "X",
        "C",
        "V",
        "B",
        "N",
        "M",
        "Delete",
    ];
    return (
        <div className = "keyboard"> 
            {keys.map((key, index) => {
                return <Keys key={index} keyValue={key} />;
            })}
        </div>
    );
}

export default Keyboard;



