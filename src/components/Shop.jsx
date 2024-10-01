import React from 'react'
import list from '../list'
import Cart from './Cart'
function Shop({handleClick}) {
  return (
    <div className='shop'>
      <section>
        {list.map((item)=>{
          return <Cart item={item} key={item.id} handleClick={handleClick}/>
        
        })}
      </section>
    </div>
  )
}

export default Shop
