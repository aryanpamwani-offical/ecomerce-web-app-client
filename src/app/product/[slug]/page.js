'use client'
import ProductShowcase from '@/component/ProductShowCase/productShowcase'
import Search from '@/component/Search/Search.jsx'
import Spinner from '@/component/Spinner/Spinner'
import { getProductDetails } from '@/redux/actions/getProductctions'

import { useParams } from 'next/navigation'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const page = () => {
  const { slug } = useParams();

  const [getLoader, setLoader] = useState(false);
  const { loading  } = useSelector(state => state.getProductDetails);
  const {product}= useSelector(state => state.getProductDetails);
  const dispatch = useDispatch();
  useEffect(() => {
   
    if(product && slug !== product._id)   
      dispatch(getProductDetails(slug));
    setLoader(true)
}, [  ]);

  // useEffect(() => {
  //   axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/product/getSingle/${slug}`).then((res) => {
  //     setgetProduct(res.data.data)
  //     setLoader(true)
  //   }).catch((error) => {
  //     console.log(error)
  //   })


  // }, [slug])
 
  const [token, setToken] = useState(null);
  
 
  return (
    <div className="container  Product-showcase">
      <Search />
      <div className="mb-4"></div>
      {
        getLoader?<>
 {

product && Object.keys(product).length && 

<ProductShowcase 
ProductImg={product.data.detailUrl}
ProductLongTitle={product.data.title.longTitle}
ProductDescription={product.data.description}
ProductPriceMrp={product.data.price.mrp}
ProductPriceCost={product.data.price.cost}
cartProduct={product.data}
/>
}

        </>:<>
        <Spinner spinnerHeight={'spinner-height'}></Spinner>
        </>
      }
      


    </div>
  )
}

export default page