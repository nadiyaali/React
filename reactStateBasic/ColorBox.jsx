import { useState } from "react"

export default function ColorBox(){
    //the initial state will be a random number instaed of 0

const colors = ["pink","purple","magenta","plum","peachpuff","palevioletred"]

const randomNumber = ()=>{
    const randNum = Math.floor(Math.random() * colors.length)
    return randNum

}

const[colorNum, setColorNum]= useState(randomNumber())


const handleClick=()=>{
    setColorNum(randomNumber())
}

    return(
        <div onClick={handleClick} style={{height: "20%", width:"20%",backgroundColor:colors[colorNum] }} >
           
        </div>
    )
}