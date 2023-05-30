export default function Greeter({person="everyone",from="anonymous"}){
    return(
        <>
        <h1>Hi there,{person}!</h1>
        <p>-- {from}</p>
        </>
        )
    }