import React from 'react'
import {Router,Link,Route} from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../styles/navbar.css'

function Nvabar({size}) {
  return (
   <nav>
    <div className="nav_bar">
        <span className='my_shop'>
            shopping cart
        </span>
        <div className='navigation'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
           </ul>
        </div>
        <div className="cart">
            <span>
                {/* <i className='fas fa-cart-plus'></i> */}
                <Link to="/cart" className="cart-icon">
                <i className='fas fa-cart-plus'></i> 
              </Link>
            </span>
            <span>{size}</span>
        </div>
    </div>
   </nav>
  )
}

export default Nvabar
