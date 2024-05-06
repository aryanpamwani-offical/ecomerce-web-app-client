'use client'
import React,{useState} from 'react'
import CartProduct from '../CartProduct/CartProduct'
import Link from 'next/link'
const Productbtn = ({cartProduct}) => {
 const [cart, setCart] = useState([])
 const addToCart=(data)=>{
  setCart([...cart,{data,quantity:1}])

 }
 console.log(cart)
  return (
    <>
      <div className="Product-btn-card">
      <button className="mx-2 mb-2 btn btn-warning  Product-btn"  onClick={()=>addToCart(cartProduct)}><Link href={'/cart'}>Add to Cart</Link></button>
      <button className="mx-2 btn btn-primary Product-btn">Buy Now</button>
    </div>
   
    </>
  )
}

export default Productbtn