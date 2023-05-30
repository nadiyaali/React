export default function ShoppingItem({name,quantity,completed}){
    return(
        
        <li  style={{color:completed?"grey": "red", textDecoration:completed? "line-through":"none" }}>{name}-{quantity}</li>
        
        )
}