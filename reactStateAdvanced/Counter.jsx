import { useState } from 'react'

export default function Counter() {
    console.log("RENDERED!")
    const [count, setCount] = useState(0)

    const addOne =() =>{
        //Don't use this
        //setCount(count+1)
        setCount((count) => count + 1)
    }

    const addThree =() =>{
        
        setCount((count) => count + 3)
        //setCount(count+1)
        //setCount(count+1)
        //setCount(count+1)
    }
    const addTen = () =>{
        //This will not cause rerendering since state is always 10
        setCount(10)
    }
return(
        <div>
        <p> count is {count} </p>
        <button onClick={addOne}>+1</button>
        <button onClick={addThree}>+3</button>
        <button onClick={addTen}>+10</button>
        
        </div>
)


}