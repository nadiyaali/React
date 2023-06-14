import { useState } from "react";

export default function ScoreKeeper(){
    const [scores, setScores] = useState({p1Score:0, p2Score:0})

    function increaseP1Score(){
        //when working with objects, set a new reference to object evertime u want state to be changed
        //if reference is same, component will not re-render
        const newScore = {...scores}
        newScore.p1Score =  newScore.p1Score +1
        setScores(newScore)
    }
    function increaseP2Score(){
        //when working with objects, set a new reference to object evertime u want state to be changed
        //if reference is same, component will not re-render
        const newScore = {...scores}
        newScore.p2Score =  newScore.p2Score +1
        setScores(newScore)
    }
    return(
        <div>
            <p>Player 1 : {scores.p1Score}</p>
            <p>Player 2 : {scores.p2Score}</p>
            <button onClick={increaseP1Score}>Player 1</button>
            <button onClick={increaseP2Score}>Player 2</button>
        </div>
    )
}