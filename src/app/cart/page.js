'use client'
import CartItems from '@/component/CartItems/CartItems'
import TotalItems from '@/component/CartItems/TotalItems'
import { addToCart, removeFromCart } from '@/redux/actions/cartActions'
import { useParams } from 'next/navigation'
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

  const page = () => {
   const cartDetails=useSelector(state=>state.cart);
   const {cartItems}=cartDetails;
   const {id}=useParams();
   const dispatch=useDispatch()
   useEffect(() => {
      
        dispatch(addToCart(id));
}, [dispatch, cartItems, id]);


  return (
 <div >
 {
  cartItems?.length?
  
  <div className='CartItem '>
 

  {cartItems.map((items,key)=>[
    <CartItems key={key}
    item={items}
  
    />
    
   
    
  ])}
  
  {/* <div>
    <TotalItems />
  </div> */}
  </div>:<div className='Empty-Cart'>
  <h1>Empty</h1>
  </div>
 }
 </div>
  )
}

export default page