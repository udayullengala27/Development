import React from 'react'
import logo from "../../../../assets/images/logo.png"

const Section7 = () => {
    return (
        <div className='mb-4' style={{ padding: "100px 0" }}>
            <h1 className=' fw-bolder text-center'>For You. No Matter <br />Who You Are</h1>

            <div className=' w-75 my-5 d-flex flex-wrap justify-content-center align-items-center gap-5' style={{ marginLeft: "50%", transform: "translateX(-50%)" }}>
                <div className='px-1 py-4 rounded-3 align-self-stretch' style={{ background: "#F6CB45", width: "250px" }}>
                    <h1 className='text-white text-center'>100%</h1>
                    <p className=' fs-4 text-white text-center'>Verified Customer Engagement</p>
                </div>
                <div className='px-1 py-4 rounded-3 align-self-stretch' style={{ background: "#F6CB45", width: "250px" }}>
                    <h1 className='text-white text-center'>3%</h1>
                    <p className=' fs-4 text-white text-center'>Average Click Through</p>
                </div>
                <div className='px-1 py-4 rounded-3 align-self-stretch' style={{ background: "#F6CB45", width: "250px" }}>
                    <h1 className='text-white text-center'>13%</h1>
                    <p className=' fs-4 text-white text-center'>Coversion Rate</p>
                </div>
            </div>

            <div className=' d-flex flex-wrap justify-content-center align-items-center gap-1 mb-2'>
                <h1 className=' fw-bolder m-0'>Grow your business with</h1>
                <img src={logo} alt="logo" width={140} />
            </div>

            <p className=' fw-bolder text-center'>Reach out for customized solutions.</p>

            <div className=' d-flex flex-sm-row flex-column justify-content-center align-items-center gap-3 my-3'>
                <button type="button" className=' btn btn-primary '>REQUEST DEMO</button>
                <button type="button" className=' btn btn-outline-primary '>CONTACT US</button>
            </div>
        </div>
    )
}

export default Section7