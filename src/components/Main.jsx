import React from 'react'

const Main = () => {
  return (
    <div className='section container'>
      <div className='section-one'>

        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

        <div className='main-btn'>
          <button>Shop Now</button>
          <button className='sec-btn'>Category</button>
        </div>

        <div className='avai'>
          <p>Also Available On</p>
        </div>

        <div className='brand-icons'>
          <img src="/images/flipkart.png" alt="filpkart" />
          <img src="/images/amazon.png" alt="amazon" />
        </div>

      </div>

      <div className='section-two'>

        <img src="/images/shoe_image.png" alt="" />
      </div>

    </div>
  )
}

export default Main