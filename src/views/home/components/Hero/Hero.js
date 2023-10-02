import React from 'react'
import { Carousel } from 'react-bootstrap'

import "./hero.css"

const Hero = () => {
  return (
    <div className='' style={{ minHeight: "500px" }}>
      <Carousel className=' pt-5'>
        <Carousel.Item>
          <div className=' hero  ' style={{ paddingTop: "5%" }}>
            <h1 id='heroHeading' className='h1Heading'>
              FROM FIRST VISIT TO FOREVER LOYAL.
            </h1>
            <p className=' text-center fs-5' style={{ marginBottom: "80px" }}>An end-to-end martech stack for every step of the buyer journey.</p>
            <div className=' d-flex flex-sm-row flex-column justify-content-center align-items-center gap-3'>
              <button type="button" className=' btn btn-primary '>SEE PRODUCTS</button>
              <button type="button" className=' btn btn-outline-primary '>REQUEST DEMO</button>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className=' hero ' style={{ paddingTop: "5%", paddingBottom: "5% " }}>
            <h1 id='heroHeading' className='h1Heading'>
              XIRCLS
            </h1>
            <p className=' text-center fs-5' style={{ marginBottom: "80px" }}>THE WORLD’S FIRST DECENTRALIZED COLLABORATIVE MARKETING NETWORK.</p>
            <div className=' d-flex flex-sm-row flex-column flex-column justify-content-center align-items-center gap-3'>
              <button type="button" className=' btn btn-primary '>JOIN NETWORK </button>
              <button type="button" className=' btn btn-outline-primary '>LEARN MORE</button>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className=' hero ' style={{ paddingTop: "5%" }}>
            <h1 id='heroHeading' className='h1Heading'>
              BREAK FREE FROM AGGREGATORS.
            </h1>
            <h3 className='text-center'>YOUR CUSTOMERS STAY YOURS ALONE.</h3>
            <p className=' text-center fs-5' style={{ marginBottom: "80px" }}>Stop driving customers to your competition. Avoid harmful discounting. Cultivate loyalty for your business, not third-party platforms.</p>
            <div className=' d-flex flex-sm-row flex-column justify-content-center align-items-center gap-3'>
              <button type="button" className=' btn btn-primary '>Get Started</button>
              <button type="button" className=' btn btn-outline-primary '>Let's Talk</button>
            </div>
          </div>

        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Hero