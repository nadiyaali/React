export default function PrettyList({colorList}){
      // to process an array, Map funcationality of array is used in jsx        
    return(
        <div>
            <ul>
            {
            colorList.map((color)=>
                (<li style={{color:color}}>{color}</li>)
            )}
            </ul>
        </div>
    )
}