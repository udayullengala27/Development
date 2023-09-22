import React from 'react'
import logo from "@src/assets/images/logo.png"
import { AiFillInstagram } from "react-icons/ai"
import { BiLogoFacebookSquare } from "react-icons/bi"
import { BsLinkedin } from "react-icons/bs"
import { FaTwitterSquare } from "react-icons/fa"

const Footer = () => {
    return (
        <>
            <div className='d-flex flex-wrap justify-content-evenly gap-1 mx-2' style={{ padding: "20px 50px 100px 50px" }}>
                <div className="mt-3" style={{ width: "220px" }}>
                    <img className='mb-1' src={logo} alt="logo-image" width={130} />
                    <div className='d-flex justify-content-center align-items-center gap-2'>
                        <a href="" className=' text-decoration-none' style={{ color: "rgba(77,77,77,255)" }}>
                            <BsLinkedin size={25} />
                        </a>
                        <a href="" className=' text-decoration-none' style={{ color: "rgba(77,77,77,255)" }}>
                            <BiLogoFacebookSquare size={35} />
                        </a>
                        <a href="" className=' text-decoration-none' style={{ color: "rgba(77,77,77,255)" }}>
                            <FaTwitterSquare size={30} />
                        </a>
                        <a href="" className=' text-decoration-none' style={{ color: "rgba(77,77,77,255)" }}>
                            <AiFillInstagram size={35} />
                        </a>
                    </div>
                </div>
                <div className="mt-3" style={{ width: "220px" }}>
                    <h5 className=' fw-bolder mb-2'>Newsletter</h5>
                    <input type="email" className='form-control' name="email" placeholder='Enter your email' />
                </div>
                <div className="mt-3" style={{ width: "220px" }}>
                    <h5 className=' fw-bolder mb-2'>Products</h5>
                    <ul className=' list-unstyled'>
                        <li className='mb-1'>About us</li>
                        <li className='mb-1'>Spaces</li>
                        <li className='mb-1'>Link</li>
                    </ul>
                </div>
                <div className="mt-3" style={{ width: "220px" }}>
                    <h5 className=' fw-bolder mb-2'>Resources</h5>
                    <ul className=' list-unstyled'>
                        <li className='mb-1'>Success stories</li>
                        <li className='mb-1'>BLog</li>
                        <li className='mb-1'>FAQ</li>
                    </ul>
                </div>
                <div className="mt-3" style={{ width: "220px" }}>
                    <h5 className=' fw-bolder mb-2'>Company</h5>
                    <ul className=' list-unstyled'>
                        <li className='mb-1'>About us</li>
                        <li className='mb-1'>Careers</li>
                        <li className='mb-1'>Partners</li>
                        <li className='mb-1'>Contact us</li>
                    </ul>
                </div>
            </div>
            <div style={{ padding: "50px 50px 100px 100px" }}>
                <ul className=' d-inline-flex flex-wrap gap-3 list-unstyled'>
                    <li className=' fw-bolder'>Terms & Conditions</li>
                    <li className=' fw-bolder'>Privacy policy</li>
                    <li className=' fw-bolder'>Cookies policy</li>
                </ul>
            </div>
        </>
    )
}

export default Footer