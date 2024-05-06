'use client'

import { addToCart } from '@/redux/actions/cartActions';

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';



const ProductShowcase = (props) => {

 const router=useRouter()
const dispatch=useDispatch();
const [quantity, setQuantity] = useState(1);
const {_id}=props.cartProduct;
 const handleCart=async()=>{
  await dispatch(addToCart(_id, quantity))
  router.push('/cart')
 }

  return (
    <>
    <div className="row" >
          <div className="col-lg-6 col-md-5 Product-Showcase-Img">
          <img src={props.ProductImg} className='Product-Showcase-Img' alt="" />
        </div>
        <div className="col-lg-6 col-md-7 m-md-auto">
          <div className='Product-Showcase-Details'>

          
          <h1 className='Product-Showcase-Title'>{props.ProductLongTitle}</h1>
          <p className='Product-Showcase-Description'>{props.ProductDescription}</p>
          <span className='Product-Showcase-Price'>
            <p className='Product-Showcase-Price-Mrp'> &#8377; {props.ProductPriceMrp}</p>
           <p className='Product-Showcase-Price-Cost'> &#8377; {props.ProductPriceCost}</p>
          </span>
          </div>
          <div className="Product-btn-card">
      <button className="mx-2 mb-2 btn btn-warning  Product-btn"  onClick={async()=>{await handleCart();}}>Add to Cart</button>
      <button className="mx-2 btn btn-primary Product-btn">Buy Now</button>
    </div>
        </div>
     </div>
    </>
  )
}

export default ProductShowcase