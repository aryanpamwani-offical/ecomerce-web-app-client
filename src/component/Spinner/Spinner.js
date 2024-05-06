import React from 'react'

const Spinner = (props) => {
  return (
    <>
        <div className={`d-flex justify-content-center m-auto align-items-center w-100 ${props.spinnerHeight}`}>
    <div className="spinner-border text-primary " role="status">

</div></div>
    </>
  )
}

export default Spinner