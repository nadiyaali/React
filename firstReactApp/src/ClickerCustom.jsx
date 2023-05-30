export default function ClickerCustom({text="Click Me",message ="Hello"}){
    const handleOnClick=()=>{
        alert(message)
    }
    
    return(
        <div>
            <hr/>
            <button onClick={handleOnClick}>{text}</button>
        </div>
    )
}