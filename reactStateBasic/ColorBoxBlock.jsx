import ColorBox from "./ColorBox";

export default function ColorBoxBlock(){
     const boxes = []
     for(let i=0; i<25; i++){
         boxes.push(<ColorBox/>)
     }    
    return(
        <div style={{display:"flex",flexWrap:"wrap", height:"600px",width:"600px" }}>
         {boxes}
         </div>
    )
}