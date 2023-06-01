import { useState } from "react";
import "./Toggler.css"

export default function Toggler(){
    const [isActive, setIsActive] = useState(true) 
    const [num,setNum] = useState(0)
    const handleClick=()=>{ 
        setIsActive(!isActive)
        
    }
    const handleClick2=()=>{ 
        setNum(num + 1)
    }


    return(
        <div className="Toggler"> 
        <p  onClick={handleClick}>
            {isActive? "😀":"😏"}</p>
        <p onClick={handleClick2}>Counter : {num} </p>
        </div>
    )
}