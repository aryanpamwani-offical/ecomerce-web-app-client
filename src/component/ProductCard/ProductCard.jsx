'use client'
import Link from 'next/link'
import React from 'react'



const ProductCard = (props) => {



  return (
    <>
          <div className="Product-card" key={props.ProductKey}>
 <Link  href={ props.ProductLink}> <img src={props.ProductImg} className=" Product-img" alt="..."/></Link>
  <div className="">
  <Link  href={ props.ProductLink}>  <h5 className="">{props.ProductTitle}</h5></Link>
  <Link  href={ props.ProductLink}> <p className=" Product-discount">{props.ProductDiscount}</p></Link>

   <span className='Product-price'>
    <p className='Product-price-mrp'> &#8377; {props.ProductMrp}</p>
    <p className='Product-price-cost'> &#8377;{props.ProductCost}</p>
   </span>
   
  </div>

  
</div>
    </>
  )
}

export default ProductCard