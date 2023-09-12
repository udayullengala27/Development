import React from 'react'
import cryptoImg from "@src/assets/images/crpto-decentralised.svg"

const Section3 = () => {
    return (
        <div className=' d-flex justify-content-center' style={{ background: "#F4F4F4", padding: "100px 0px" }}>
            <div style={{ width: "40%" }}>
                <h5 className=' fw-bolder mb-2 text-black'>THE CHALLENGE</h5>
                <h1 className=' fw-bolder mb-2 w-75  text-black' style={{ lineHeight: "1.5" }}>Skip The Big Promises Hire Marketing Experts Based on Honesty</h1>
                <p className=' w-75 text-black' style={{ lineHeight: "1.5" }}>H3 with line spacing - Lorem ipsum dolor sit H3 with line spacing - Lorem ipsum dolor sit </p>
            </div>
            <div className=' d-flex flex-column align-items-center gap-2' style={{ width: "40%" }}>
                <div className=' bg-white rounded-2 d-flex justify-content-center align-items-center gap-1' style={{ width: "400px", height: "120px" }}>
                    <div className=' rounded-circle' style={{ backgroundColor: "#F6CB45", padding: "10px" }}>
                        <img src={cryptoImg} alt="crpto-image" />
                    </div>
                    <div>
                        <h3 className=' fw-bolder text-black'>Decentralized</h3>
                        <p className=' text-black'>Lorem ipsum dolor sit amet,</p>
                    </div>
                </div>
                <div className=' bg-white rounded-2 d-flex justify-content-center align-items-center gap-1' style={{ width: "400px", height: "120px" }}>
                    <div className=' rounded-circle' style={{ backgroundColor: "#F6CB45", padding: "10px" }}>
                        <img src={cryptoImg} alt="crpto-image" />
                    </div>
                    <div>
                        <h3 className=' fw-bolder text-black'>Decentralized</h3>
                        <p className=' text-black'>Lorem ipsum dolor sit amet,</p>
                    </div>
                </div>
                <div className=' bg-white rounded-2 d-flex justify-content-center align-items-center gap-1' style={{ width: "400px", height: "120px" }}>
                    <div className=' rounded-circle' style={{ backgroundColor: "#F6CB45", padding: "10px" }}>
                        <img src={cryptoImg} alt="crpto-image" />
                    </div>
                    <div>
                        <h3 className=' fw-bolder text-black'>Decentralized</h3>
                        <p className=' text-black'>Lorem ipsum dolor sit amet,</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3