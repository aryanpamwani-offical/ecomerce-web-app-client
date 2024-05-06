'use client'
import axios from 'axios'
import React,{useState} from 'react'


const Search = () => {
  const [getProduct, setgetProduct] = useState()
    const [getLoader,setLoader]=useState(false);
  const [getSearch, setSearch] = useState("");
  const [close, setClose] = useState(true)
const handleSerch=()=>{

  axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/product/getSingleSearch/?search=${getSearch}`).then((res)=> 
  {
   setgetProduct(res.data.data)
    setLoader(true)
  
  }
    )
   
  
}





return (
    <>
    <div className='d-flex m-auto flex-row w-100 justify-content-center'>
    <input type="search" className="search-bar mx-2" placeholder='Search Product'
    value={getSearch}
    onChange={(e)=> setSearch(e.target.value)} name="search" id="" /> 
    <button
     className='search-btn' 
    onClick={()=>{
      handleSerch();
      setClose(!close)
      }}> <i className="bi bi-search " ></i>   </button></div>
   
 {getProduct?<>{
 getProduct?.map((data,key)=>{
 return <div className='d-flex flex-row justify-content-around w-100'key={getProduct._id}>
  {
      close? <>
      
      <div className={`SearchResultContainer`} key={data._id}>
      <a href={`${process.env.NEXT_PUBLIC_WEB_URL}/product/${data._id}`} ><p className={`SearchResultParagraph`}>{data.title.longTitle}</p>
     
      </a>   </div><i class="bi bi-x-square-fill" onClick={()=>{setClose(!close)}}></i></>:<div className='d-none'></div>
  }
 

  </div>

 })
 }</>:<>
 <div className='d-none'></div>
 </>}
    
  
    
    
  

     
    </>
  )
}

export default Search