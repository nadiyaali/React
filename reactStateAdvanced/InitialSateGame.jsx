import { useState } from "react";

function generateGameBoard(){
    console.log("Making the initial game board")
    return Array(5000)
}

export default function InitialStateGame(){

    // generateGameBoard() this is exucuted everytime the cmponent re renders
    // generateGameBoard  this is executed only once
    const [board, setBoard] = useState(generateGameBoard)
    return(
        <div>
            <button onClick={()=> setBoard("Hello!")}>Click to change state {board}</button>
        </div>
    )
}