import './PropertyItem.css'
export default function PropertyItem({id,name,rating,price}){

    return(
        <div className="Property">
            <h3>{name}</h3>
            <h4>${price} a night</h4>
            <h5>{rating}⭐</h5>
        </div>
    )
}