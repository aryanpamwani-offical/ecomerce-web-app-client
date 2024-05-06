import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <>
     <div className={`d-flex justify-content-center flex-column m-auto align-items-center w-100 spinner-height`}>
     <h1 className='Error-Heading'>404</h1>
            <h4 className=''>Page Not Found</h4>
            <Link href={"/"}><button className='btn btn-outline-dark Error-btn'><i className="bi bi-arrow-left-square-fill mx-2"></i> Go To Home</button></Link>

     </div>
    </>
  )
}

export default NotFound