import { useState } from "react"

export default function Counter(){
    const [num,setNum] =useState(0)
    const handleClick = ()=>{
        setNum(num+1)
    }
    
    return(
        <div>
        <p>Counter:{num}</p>
        <button onClick={handleClick}>increase counter</button> 
        
        </div>
    )}