import React, { useState } from 'react'

const Cart = () => {

  const [cart, setCart] = useState([]);

  const addToCart = ( {product} ) =() =>{
    setCart(product);
  }

  return (
    <div>

    </div>
  )
}

export default Cart