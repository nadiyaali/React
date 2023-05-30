export default function DoubleDice({numSide = 6}){
    const rand1 = Math.floor(Math.random()*numSide)+1
    const rand2 = Math.floor(Math.random()*numSide)+1
    // let output = ""
    // if(rand1 === rand2)
    //     output = "You won!!"
    // else
    //     output ="You Lost"
    //const output = rand1 === rand2? "You won !!" : "You lose"
    // now output will be of type boolean
    const isWinner = rand1 === rand2
    // CSS can also be  written  here
    // but its written in js format. camel case, not kebab-case
    const stylesHeading = {color: "purple", fontSize:"30px"}    
    let styleOutput
    let output = ""
    if(isWinner){
        styleOutput = {color: "green"}
        output = "You Won !!"
    }
        else{
        styleOutput = {color: "red"}
        output = "You Lose !!"
    }      

        return(
        <div>
            <p style={stylesHeading} >GAME</p>
            {/* <h3>Playing {rand1}, {rand2} : {output}</h3> */}
            <p style = {{color:"orange"}}>-------------------</p>
            <h3 style = {styleOutput}>Playing {rand1}, {rand2} : {output}</h3>
        </div>
    )
}
