import React from 'react'

const Hero = () => {
  return (
    <>

    <div id="carouselExampleIndicators" className="carousel slide hero-postion">
 
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50" className="d-block w-100 hero-height" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50" className="d-block w-100 hero-height" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50" className="d-block w-100 hero-height" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50" className="d-block w-100 hero-height" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Hero