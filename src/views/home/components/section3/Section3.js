import React from 'react'
import cryptoImg from "@src/assets/images/crpto-decentralised.svg"
import "./section3.css"

const Section3 = () => {
    return (
        <div className=' d-flex flex-wrap justify-content-center mb-2' style={{ background: "#F4F4F4", padding: "100px 0px" }}>
            <div className='sect3Card'>
                <h5 className=' fw-bolder mb-1 text-black text-md-start text-center'>TOGETHER WE WIN</h5>
                <h1 className='h1Heading fw-bolder text-black mb-1 text-md-start text-center' style={{ lineHeight: "1.5" }}>Join a Global Network of Like-minded Companies</h1>
                <p className='fs-5 text-black text-md-start text-center' style={{ lineHeight: "1.5" }}>Operating online and offline, across diverse categories and industries, other businesses help you sustainably reach your marketing goals</p>
            </div>
            <div className='sect3Card d-flex flex-column align-items-center gap-2'>
                <div className='sect3MinCard bg-white rounded-2 d-flex flex-sm-row flex-column align-items-center gap-1 p-1' style={{ minHeight: "120px" }}>
                    <div className=' rounded-circle ms-1' style={{ backgroundColor: "#F6CB45", padding: "10px" }}>
                        <img src={cryptoImg} alt="crpto-image" />
                    </div>
                    <div>
                        <h3 className=' fw-bolder text-black text-capitalize mb-1'>Decentralized</h3>
                        <p className='fs-5 text-black'>Global network of companies with no central authority</p>
                    </div>
                </div>
                <div className='sect3MinCard bg-white rounded-2 d-flex flex-sm-row flex-column align-items-center gap-1 p-1' style={{ minHeight: "120px" }}>
                    <div className=' rounded-circle ms-1' style={{ backgroundColor: "#F6CB45", padding: "10px" }}>
                        <img src={cryptoImg} alt="crpto-image" />
                    </div>
                    <div>
                        <h3 className=' fw-bolder text-black text-capitalize mb-1'>Peer-to-Peer Verified</h3>
                        <p className='fs-5 text-black'>Real-time customer verification by companies</p>
                    </div>
                </div>
                <div className='sect3MinCard bg-white rounded-2 d-flex flex-sm-row flex-column align-items-center gap-1 p-1' style={{ minHeight: "120px" }}>
                    <div className=' rounded-circle ms-1' style={{ backgroundColor: "#F6CB45", padding: "10px" }}>
                        <img src={cryptoImg} alt="crpto-image" />
                    </div>
                    <div>
                        <h3 className=' fw-bolder text-black text-capitalize mb-1'>No Data Sharing</h3>
                        <p className='fs-5 text-black'>Localized 100% secure data protocols</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3