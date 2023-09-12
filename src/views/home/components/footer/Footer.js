import React from 'react'
import logo from "@src/assets/images/logo.png"
import { AiFillInstagram } from "react-icons/ai"
import { BiLogoFacebookSquare } from "react-icons/bi"
import { BsLinkedin } from "react-icons/bs"
import { FaTwitterSquare } from "react-icons/fa"

const Footer = () => {
    return (
        <div className='d-flex justify-content-evenly ' style={{ padding: "20px 50px 100px 50px" }}>
            <div>
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
            <div>
                <h5 className=' fw-bolder mb-2'>Newsletter</h5>
                <input type="email" className='form-control' name="email" placeholder='Enter your email' />
            </div>
            <div>
                <h5 className=' fw-bolder mb-2'>Products</h5>
                <ul className=' list-unstyled'>
                    <li className='mb-1'>About us</li>
                    <li className='mb-1'>Spaces</li>
                    <li className='mb-1'>Link</li>
                </ul>
            </div>
            <div>
                <h5 className=' fw-bolder mb-2'>Resources</h5>
                <ul className=' list-unstyled'>
                    <li className='mb-1'>Success stories</li>
                    <li className='mb-1'>BLog</li>
                    <li className='mb-1'>FAQ</li>
                </ul>
            </div>
            <div>
                <h5 className=' fw-bolder mb-2'>Company</h5>
                <ul className=' list-unstyled'>
                    <li className='mb-1'>About us</li>
                    <li className='mb-1'>Careers</li>
                    <li className='mb-1'>Partners</li>
                    <li className='mb-1'>Contact us</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer