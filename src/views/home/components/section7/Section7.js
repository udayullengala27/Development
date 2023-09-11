import React from 'react'
import logo from "../../../../assets/images/logo.png"

const Section7 = () => {
    return (
        <div style={{ padding: "100px 0" }}>
            <h1 className=' fw-bolder text-center'>For You. No Matter <br />Who You Are</h1>

            <div className='my-5 d-flex flex-wrap justify-content-center align-items-center gap-5'>
                <div className='px-3 py-4 rounded-3 align-self-stretch' style={{ background: "#F6CB45", width: "190px" }}>
                    <h1 className='text-white text-center'>760k</h1>
                    <p className=' fs-4 text-white text-center'>Transactions</p>
                </div>
                <div className='px-3 py-4 rounded-3 align-self-stretch' style={{ background: "#F6CB45", width: "190px" }}>
                    <h1 className='text-white text-center'>70k</h1>
                    <p className=' fs-4 text-white text-center'>Genuine <br />customers </p>
                </div>
                <div className='px-3 py-4 rounded-3 align-self-stretch' style={{ background: "#F6CB45", width: "190px" }}>
                    <h1 className='text-white text-center'>100%</h1>
                    <p className=' fs-4 text-white text-center'>Verified</p>
                </div>
            </div>

            <div className=' d-flex justify-content-center align-items-center gap-1 mb-2'>
                <h1 className=' fw-bolder m-0'>Grow your business with</h1>
                <img src={logo} alt="logo" width={140} />
            </div>

            <p className=' fw-bolder text-center'>No payment required. 100% free.</p>

            <div className=' d-flex justify-content-center align-items-center gap-3 my-3'>
                <button type="button" className=' btn btn-primary '>Get Started</button>
                <button type="button" className=' btn btn-outline-primary '>Let's Talk</button>
            </div>
        </div>
    )
}

export default Section7