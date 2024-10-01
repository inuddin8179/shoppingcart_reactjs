
import React from 'react';
import '../styles/cartpage.css'; 
const CartPage = ({ cart, total }) => {
  return (
    <div className='a'>
  <div className='cart-page'>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.img} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <p>{item.title} - ₹{item.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <h2>Total Price: ₹{total}</h2>
        </div>
      )}
    </div>
    </div>
    
  );
};

export default CartPage;

