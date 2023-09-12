import React from 'react'
import profileImg from "@src/assets/images/profile-image.png"
import "./section5.css"

const Section5 = () => {
    return (
        <div className=' position-relative' style={{ padding: "230px 0" }}>
            <div className=' profileImg'>
                <img src={profileImg} alt="" />
            </div>
            <div className=' py-3' style={{ background: "#F6CB4554.33%", paddingLeft: "100px" }}>
                <p className=' fw-bold text-black'>THE TESTIMONY</p>
                <h2 className=' fw-bolder mb-2 text-black' style={{ width: "550px" }}>XIRCLS  matching process takes into account so many variables that I wouldn't even have thought of when trying to hire a marketing agency.</h2>
                <div className=' d-flex justify-content-between align-items-center mb-2' style={{ width: "150px" }}>
                    <div className=' rounded-circle' style={{ width: "50px", height: "50px", backgroundColor: "#535353" }}></div>
                    <h4 className=' fw-bolder text-black'>Company</h4>
                </div>
                <p className='text-black'><span className="fw-bolder">Name of user,</span> title of user</p>
            </div>
        </div>
    )
}

export default Section5