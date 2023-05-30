export default function SlotMachine({item1, item2,item3}){
const isWinner = item1===item2 && item1===item3  
const myStyle = isWinner ? {color:"green"}:{color:"red"}
return(
    <div style={{fontSize:"40px"}}>
        {item1}{item2}{item3}
    <h3 style={myStyle}>{isWinner?"You Win!!":"You lose!!"}</h3>    
    {isWinner && <h4>Congrats!</h4>}
    </div>
)
}