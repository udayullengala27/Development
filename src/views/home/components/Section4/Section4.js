import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai"
import expand from "@src/assets/images/expand.svg"

const Section4 = () => {
    return (
        <div style={{ padding: "80px 100px" }}>
            <div style={{ paddingBottom: "100px" }}>
                <h4 className=' text-center fw-bold mb-2 text-black'>THE SOLUTION</h4>
                <h1 className=' text-center fw-bolder text-black' style={{ lineHeight: "1.5" }}>How does it work? well, it’s as <br />easy as enroll, engage, reward.</h1>
                <div className=' d-flex justify-content-between align-items-center gap-5 my-5'>
                    <div>
                        <img src={expand} alt="expand" className=' mb-1' />
                        <h4 className=' fw-bolder  text-black'>Lorem ipsum dolor sit </h4>
                        <p>Lorem ipsum   dolor sit amet, consectetur adipiscing elit, sed...</p>
                    </div>
                    <div>
                        <img src={expand} alt="expand" className=' mb-1' />
                        <h4 className=' fw-bolder  text-black'>Lorem ipsum dolor sit </h4>
                        <p>Lorem ipsum   dolor sit amet, consectetur adipiscing elit, sed...</p>
                    </div>
                    <div>
                        <img src={expand} alt="expand" className=' mb-1' />
                        <h4 className=' fw-bolder  text-black'>Lorem ipsum dolor sit </h4>
                        <p>Lorem ipsum   dolor sit amet, consectetur adipiscing elit, sed...</p>
                    </div>
                </div>
            </div>
            <center><a href="#" className=' fw-bolder' style={{ color: "#2C68F6" }}>Get Started <AiOutlineArrowRight /></a></center>
        </div>
    )
}

export default Section4