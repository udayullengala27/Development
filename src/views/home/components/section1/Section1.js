import React from 'react'
import image1 from "@src/assets/images/image 1.png"
import "./section1.css"

const Section1 = () => {
  return (
    <div className='d-flex flex-wrap justify-content-center align-items-center mb-4 ' style={{ minHeight: "80vh" }}>
      {/* <div className=' d-flex flex-wrap justify-content-center align-items-center gap-5'> */}
      <div className='d-flex justify-content-center me-2 sect1Card' >
        <img src={image1} alt="image1" />
      </div>
      <div className='ms-2 p-2 d-flex justify-content-center sect1Card' >
        <div className='w-75'>
          <h5 className=' fw-bolder mb-1 text-black'>SUPERLEADZ</h5>
          <h1 className='h1Heading mb-1 text-black' style={{ lineHeight: "1.5" }}>Gain High-Quality Leads & Convert With Ease</h1>
          <h3 className=' mb-1' style={{ color: "#F6CB45" }}>Reduce Drop-Offs</h3>
          <p className=' fs-5 mb-1 text-black' style={{ width: "300px", lineHeight: "1.5" }}>Optimize your website sales funnel. Gain qualified leads & personalize shopper journeys. Serve instant incentives for faster conversions.</p>
          <button className='btn btn-primary'>Learn more about SuperLeadz</button>
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Section1