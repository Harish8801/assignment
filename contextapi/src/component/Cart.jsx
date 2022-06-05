import  { useContext } from 'react'
import { CartContext } from '../context/CartContext';

const Cart = () => {
   const {addtocard}=useContext(CartContext);
  return (
    <div>Cart
    <button  onClick={addtocard}>ADD To Cart</button>
    </div>
  );
};

export default Cart;