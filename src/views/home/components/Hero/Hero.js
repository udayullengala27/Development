import React from 'react'
import "./hero.css"

const Hero = () => {
  return (
    <div className=' hero' style={{ height: "60vh", paddingTop: "100px" }}>
      <h1 id='heroHeading' className='text-center'>
        The World’s First Decentralized Collaborative Marketing Network
      </h1>
      <div className=' d-flex justify-content-center align-items-center gap-3'>
        <button type="button" className=' btn btn-primary '>Get Started</button>
        <button type="button" className=' btn btn-outline-primary '>Let's Talk</button>
      </div>
    </div>
  )
}

export default Hero