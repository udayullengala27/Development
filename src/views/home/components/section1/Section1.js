import React from 'react'
import image1 from "@src/assets/images/image 1.png"

const Section1 = () => {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>

      <div className=' d-flex justify-content-center align-items-center gap-5'>
        <div className='d-flex justify-content-end' style={{ width: "40%" }}>
          <img src={image1} alt="image1" style={{ width: "350px" }} />
        </div>
        <div className=' p-2' style={{ width: "40%" }}>
          <h5 className=' fw-bolder mb-1 text-black'>THE STATEMENT</h5>
          <h1 className=' mb-1 text-black' style={{ width: "300px", fontWeight: "900", lineHeight: "1.5" }}>We're On A Mission To Help Businesses Grow</h1>
          <h3 className=' mb-1' style={{ color: "#F6CB45" }}>Reduce Bounce Rates</h3>
          <p className=' mb-1 text-black' style={{ width: "300px", lineHeight: "1.5" }}>H3 with line spacing - Lorem ipsum dolor sit H3 with line spacing - Lorem ipsum dolor sit</p>
          <button className='btn btn-primary'>Learn more about security</button>
        </div>
      </div>
    </div>
  )
}

export default Section1