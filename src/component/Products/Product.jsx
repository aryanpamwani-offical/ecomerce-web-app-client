'use client'
import axios from 'axios'
import React,{useState,useEffect} from 'react'
import ProductCard from '../ProductCard/ProductCard'
import Spinner from '../Spinner/Spinner'



const Product = () => {

   
    const [getProduct, setgetProduct] = useState()
    const [getLoader,setLoader]=useState(false);
    const [cart,setCart]=useState([])
    const addToCart=(data)=>[
      setCart([...cart,data])
    ]
    useEffect(() => {
     
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/product/`).then((res)=>{
            setgetProduct(res.data.data)
            setLoader(true)
        }).catch((error)=>{
console.log(error)
        })
    
    }, [])
    console.log()

  return (
    <>
{
  getLoader?
  <>
   <div className='Product-grid'>
     
     {
      getProduct?.map((data,key)=>{
      return  <ProductCard 
      key={key}
      ProductKey={key}
      ProductLink={`product/${data._id}`}
      ProductImg={data.url}
      ProductTitle={data.title.shortTitle}
      ProductMrp={data.price.mrp}
      ProductCost={data.price.cost}
      ProductDiscount={data.discount}
      ProductTagLine={data.tagline}
      
      />
      })
}
</div> 
  </>:
  <div className='m-auto d-flex justify-content-center'>
    <Spinner/>
  </div>
}
   




   
    </>
  )
}


export default Product
