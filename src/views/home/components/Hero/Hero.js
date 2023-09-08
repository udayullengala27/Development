import React from 'react'
import "./hero.css"

const Hero = () => {
  return (
    <div className=' hero vh-100'>
        <h1 id='heroHeading' className='text-center' style={{width: "600px", margin: "100px auto"}}>
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