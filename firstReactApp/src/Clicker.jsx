
function handleClick(){
    alert("Clicked the button!!!")
}
function handleMouseOver(){
    alert("Hovered over the p tag")
}

export default function Clicker(){
    return(
        <div>
            <p onMouseOver={handleMouseOver} >Hover over me</p>
        {/* all html DOM events are valids like onMouseOver, just change to camel casing */}
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}
