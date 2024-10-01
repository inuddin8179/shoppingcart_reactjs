import React from 'react'
import '../styles/card.css'
const Cart = ({item,handleClick}) => {
    const {title,author,price,img}=item
  return (
    <div className='cards'>
        <div className="images">
           <img className='moving-image'  src={img}/>
        </div>
        <div className="details">
             <p>{title}</p>
             <p>{author}</p>
             <p>price- ₹{price}</p>
             <button onClick={()=>handleClick(item)}>Add to cart</button>
        </div>
    </div>
  )
}

export default Cart
