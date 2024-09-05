import React from 'react'

const Carousal = () => {
  return (
    <div>
      <div
        id='carouselExampleFade'
        className='carousel slide carousel-fade'
        data-bs-ride='carousel'
        style={{objectFit:"contain !important"}}
        f
      >
        <div className='carousel-inner'id='carousel' >
        <div className="carousel-caption "style={{'zIndex':'10'}}>
        <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </form>
      </div>
          <div className='carousel-item active'>
            <img
              src='https://graphicsfamily.com/wp-content/uploads/edd/2022/08/Food-Menu-Instagram-Carousel-Design-scaled.jpg'style={{filter: "brightness(80%)"}}
              className='d-block w-100 h-300'
              alt='...'
            />
          </div>
          <div className='carousel-item'>
            <img src='https://media.gettyimages.com/id/184946701/photo/pizza.jpg?s=612x612&w=gi&k=20&c=4iMEO-I-_0tSb7f35CMFWN4N3Xdqf99sadSJyD-4dZk=' className='d-block w-100' style={{filter: "brightness(80%)"}} alt='...' />
          </div>
          <div className='carousel-item'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl6qaGSIaVBtOBR8vr0E8sJ1Gj-Yul5-qWilOQ49a8PAOr5EMEpYfP5HoZsMTlFIL7pH8&usqp=CAU' className='d-block w-100' style={{filter: "brightness(80%)"}} alt='...' />
          </div>
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleFade'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleFade'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousal
