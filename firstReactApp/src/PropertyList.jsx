import PropertyItem from "./PropertyItem";
import "./PropertyList.css"

export default function PropertyList({properties}){
    return(
        
            // {{properties.map((item)=> <PropertyItem key={item.id} {...item}/>)}}
            // {properties.map((item)=><div><h2>item.name</h2></div> )}
        
        <div>
        <h1>Property List</h1>
        <div className = "PropertyList">
            
            {
               //need to give id to list item here only
               //use the spread operator to pass all the there values at once
               properties.map((item)=> <PropertyItem key={item.id} {...item}/>) 
            }
            
            </div>
    </div>
    
    )
}