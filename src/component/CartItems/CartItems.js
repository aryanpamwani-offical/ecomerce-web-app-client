import { useRouter } from 'next/navigation'
import React from 'react'

const CartItems = ({item,removeItemFromCart}) => {
  const router=useRouter()
 const handlePayment=()=>{
  router.push('/payment')
 }
  return (
    <div className='CartItem-container-main d-flex justify-content-center items-cemter m-auto'>
<div className='CartItem-container d-flex justify-content-center'>
    <div className='CartItem-container-img d-flex justify-content-center'>

    <img src={item.data.detailUrl} alt=""  className='CartItem-img d-flex justify-content-center'/>
    </div >
<div className='CartItem-container-items d-flex justify-content-center flex-column m-auto'>
    <h3 className='CartItem-title'>{item.data.title.longTitle}</h3>
   
    <span className='Product-Showcase-Price'>
    <p className='Product-Showcase-Price-Mrp'>&#8377; {item.data.price.mrp}</p>
    <p className='Product-Showcase-Price-Cost'>&#8377; {item.data.price.cost}</p> </span>
    <button className='btn btn-primary Payment-btn-main'  onClick={() =>handlePayment()}>Proced To Pay</button>
    {/* <button className='btn btn-outline-dark mt-4' onClick={() => removeItemFromCart(item.data._id)}>Remove</button> */}
</div>
</div>
<div></div></div>
    
  )
}

export default CartItems