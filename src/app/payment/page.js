'use client'
import { useRouter } from 'next/navigation';
import React,{useState,useEffect} from 'react'

const page = () => {
  const [token, setToken] = useState(null)
  useEffect(() => {
   
    let token = localStorage.getItem("token");
    setToken(token);
  
}, [setToken]);
const router=useRouter();
const handleLogin=()=>{
  router.push('/login')
}
  return (
    <>
    {
      token?<div className='Empty-Cart'>
      <h1>Payment Method Will Be Integrated Soon</h1>
      </div>:<div className='Empty-Cart flex-column'>
      <h1> Please login before you Proced  </h1> 
      <button className="btn btn-dark" onClick={()=>{handleLogin()}}>Login</button>
      </div>
    
    }
    
    </>
  )
}

export default page