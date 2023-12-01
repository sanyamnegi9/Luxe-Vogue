import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext';

const CartItemCard = () => {

  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  return (
    <div>CartItemCard</div>
  )
}

export default CartItemCard