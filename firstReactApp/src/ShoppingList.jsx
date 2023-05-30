import ShoppingItem from "./ShoppingItem"
export default function ShoppingList({items}){
    //const myStyle1 = {color:"green"}
    //const myStyle2 = {color:"grey",textDecoration:"line-through"} 
    // Each list item should have a unique key
    return(
        <div style={{fontSize:"30px"}}>
            <h2>Shopping List</h2>
            <ul>
                {
                   //need to give id to list item here only
                   //use the spread operator to pass all the there values at once
                   items.map((item)=><ShoppingItem key={item.id} {...item}/>) 
                }
                
            </ul>
        </div>
    )
}