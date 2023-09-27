import React, { useState } from 'react'
import { Card, CardBody, Row, Col, InputGroup, Input, InputGroupText } from 'reactstrap'
import { HiOutlineSearch } from 'react-icons/hi'
import { GiResize } from 'react-icons/gi'
import { BsCloudUpload } from 'react-icons/bs'
import FeatureIcons from './FeatureIcons'
import StatsCard from './StatsCard'
import InfoCard from './InfoCard'
import image1 from './ten.png'
import image2 from './bigImage.jpeg'
import Avatar from 'react-avatar'
import './MainHome.css'


const MainHome = () => {
    const [button, setButton] = useState(false)
    window.addEventListener("resize", () => {
        if (window.innerWidth <= 1024) {
            setButton(true)
        } else {
            setButton(false)
        }
    })


    return (
        <>
            <Card className='mb-0' style={{ backgroundColor: "#69015a" }}>
                <div className="images d-flex justify-content-center " >
                    <img src={image1} alt="" className='opacity-50' />
                </div>
                <CardBody className=' card-img-overlay '>
                    <Row>
                        <Col className='text-center mainHeading' xs={9}>
                            <h2 style={{ marginTop: "7px", color: "white", fontWeight: "500" }} >Celebrating 10 year of Canva</h2>
                        </Col>
                        <Col className='mainButton d-flex justify-content-end align-items-center'>
                            <button type="button" className="btn btn-light text-light " style={{ marginRight: "10px", borderRadius: "3px", background: "transparent" }}>{button ? <GiResize /> : "Custom size"}</button>
                            <button type="button" className="btn btn-light text-light" style={{ borderRadius: "3px", background: "transparent" }}>{button ? <BsCloudUpload /> : "Upload"}</button>
                        </Col>
                    </Row>
                    <Row className='mt-2'>
                        <Col className='d-flex justify-content-center mainInput'>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text" style={{ borderRadius: "0" }}><HiOutlineSearch size={21} /></div>
                                </div>
                                <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Search your Content for Canva's" />
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-2'>
                        <div className="homeIcons d-flex justify-content-center">
                            <FeatureIcons />
                        </div>
                    </Row>
                </CardBody>
            </Card>
            <Row className='mt-2'>
                <h3 className='fw-bolder mb-1 mt-1' style={{ fontSize: "20px" }}>Add 2 more stats</h3>
                <div className='mainStats'>
                    <StatsCard />
                </div>

            </Row>
            <Row>
                <h3 className='fw-bolder mb-1 mt-1' style={{ fontSize: "20px" }}>Installed App with uninstalled if required</h3>
                <div className='mainInfo'>
                    <InfoCard />
                </div>

            </Row>
            <Row className='mb-1'>
                <h3 className='fw-bolder mb-1 mt-1' style={{ fontSize: "20px" }}>Templates</h3>
                <Col className=' mainTemplate d-flex gap-1' style={{ flexWrap: "nowrap" }}>
                    <div className="main">
                        <div className="bigImg">
                            <img src={image2} alt="/" width={265} />
                        </div>
                        <div className="profileImg rounded-circle position-relative " style={{ bottom: "2.8rem", left: "7rem" }}>
                            <Avatar name="Sahil Gupta" round={true} size='45' color='#d2b589' />
                        </div>
                    </div>
                    <div className="main">
                        <div className="bigImg">
                            <img src={image2} alt="/" width={265} />
                        </div>
                        <div className="profileImg rounded-circle position-relative " style={{ bottom: "2.8rem", left: "7rem" }}>
                            <Avatar name="Sahil Gupta" round={true} size='45' color='#d2b589' />
                        </div>
                    </div>
                    <div className="main">
                        <div className="bigImg">
                            <img src={image2} alt="/" width={265} />
                        </div>
                        <div className="profileImg rounded-circle position-relative " style={{ bottom: "2.8rem", left: "7rem" }}>
                            <Avatar name="Sahil Gupta" round={true} size='45' color='#d2b589' />
                        </div>
                    </div>
                    <div className="main">
                        <div className="bigImg">
                            <img src={image2} alt="/" width={265} />
                        </div>
                        <div className="profileImg rounded-circle position-relative " style={{ bottom: "2.8rem", left: "7rem" }}>
                            <Avatar name="Sahil Gupta" round={true} size='45' color='#d2b589' />
                        </div>
                    </div>
                    <div className="main">
                        <div className="bigImg">
                            <img src={image2} alt="/" width={265} />
                        </div>
                        <div className="profileImg rounded-circle position-relative " style={{ bottom: "2.8rem", left: "7rem" }}>
                            <Avatar name="Sahil Gupta" round={true} size='45' color='#d2b589' />
                        </div>
                    </div>
                    <div className="main">
                        <div className="bigImg">
                            <img src={image2} alt="/" width={265} />
                        </div>
                        <div className="profileImg rounded-circle position-relative " style={{ bottom: "2.8rem", left: "7rem" }}>
                            <Avatar name="Sahil Gupta" round={true} size='45' color='#d2b589' />
                        </div>
                    </div>
                    <div className="main">
                        <div className="bigImg">
                            <img src={image2} alt="/" width={265} />
                        </div>
                        <div className="profileImg rounded-circle position-relative " style={{ bottom: "2.8rem", left: "7rem" }}>
                            <Avatar name="Sahil Gupta" round={true} size='45' color='#d2b589' />
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default MainHome