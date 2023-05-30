export default function Die({numSides = 6}){
    const randNum = Math.floor(Math.random()*numSides) +1
    return(
        <h3>{numSides} sides Die roll : {randNum}</h3>
    )
}