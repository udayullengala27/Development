import React from 'react'
import expand from "@src/assets/images/expand.svg"
import "./section4.css"

const Section4 = () => {
    return (
        <div className='sect4Div'>
            <div style={{ paddingBottom: "80px" }}>
                <h4 className=' text-center fw-bold mb-1 text-black'>ALL IN ONE PLACE</h4>
                <h1 className='h1Heading text-center fw-bolder text-black' style={{ lineHeight: "1.5" }}>Marketing solutions you actually need. No fluff.</h1>
                <div className=' d-flex flex-wrap justify-content-md-between justify-content-center align-items-center gap-5 mt-5 mx-1'>
                    <div style={{ width: "320px" }}>
                        <img src={expand} alt="expand" className=' mb-1' width={40} />
                        <h4 className=' fw-bolder  text-black mb-1'>Buyer Journey Optimization</h4>
                        <p className=' w-75 fs-5'>Optimization tools for frictionless, super-fast checkouts</p>
                    </div>
                    <div style={{ width: "320px" }}>
                        <img src={expand} alt="expand" className=' mb-1' width={40} />
                        <h4 className=' fw-bolder  text-black mb-1'>Revenue Generation</h4>
                        <p className=' fs-5'>Incentivize customers to buy more than they intended to</p>
                    </div>
                    <div style={{ width: "320px" }}>
                        <img src={expand} alt="expand" className=' mb-1' width={40} />
                        <h4 className=' fw-bolder  text-black mb-1'>Revenue Recovery</h4>
                        <p className=' fs-5'>Predict, protect or recover lost or at-risk revenue across the buying cycle</p>
                    </div>
                </div>
            </div>
            <center><a href="#" className=' fw-bolder' style={{ color: "#2C68F6" }}>Coming Soon</a></center>
        </div>
    )
}

export default Section4