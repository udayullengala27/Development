import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './TimeLineVerticals.css'
import { Row, Col, Button } from 'reactstrap'
import { FiClock } from 'react-icons/fi'
import { BsCart3, BsHddStack, BsArrowRightShort } from 'react-icons/bs'
import { HiOutlinePencilSquare } from 'react-icons/hi2'
import { IoAirplaneOutline } from 'react-icons/io5'


const TimeLineVerticals = () => {
    return (
        <>
            <VerticalTimeline animate={false}>

                <VerticalTimelineElement
                    className="vertical-timeline-element--flight"
                    iconStyle={{ color: '#7367f0', background: "#f8f8f8", height: "20px" }}
                    icon={<IoAirplaneOutline />}
                >
                    <Row style={{ marginBottom: "5px" }}>
                        <Col className='d-flex justify-content-between '>
                            <span style={{ fontSize: "14px", fontWeight: "500" }}>Company Created</span>
                            <span style={{ fontSize: "11px" }}>Wednesday</span>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: "5px" }}>
                        <Col>
                            <span style={{ fontSize: "14px", fontWeight: "400" }}>Before: Add your company details for invoicing purposes. This information will not be visible to end customers.</span>
                        </Col>
                    </Row>
                    <hr />
                    <button className='d-flex justify-content-between w-100 align-items-center border-0 bg-transparent buttonFont fw-bold' style={{ fontSize: '14px', color: "#6e6b7b" }}><span>Create Company Profile</span> <BsArrowRightShort size={20} /></button>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--profile"
                    iconStyle={{ color: '#28c76f', background: "#f8f8f8", height: "22px" }}
                    icon={<FiClock />}
                >
                    <Row>
                        <Col className='d-flex justify-content-between'>
                            <span style={{ fontSize: '14px', fontWeight: "500" }}>Outlet Added</span>
                            <span style={{ fontSize: "11px" }}>April, 18</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p style={{ fontSize: "14px", marginTop: "5px", fontWeight: "400" }}>Before: Your outlet is your brand. XIRCLS products you install will be linked with this outlet. You can add more outlets later. This information will be visible to other outlets on the XIRCLS network.</p>
                        </Col>
                    </Row>
                    <hr />
                    <button className='d-flex justify-content-between w-100 align-items-center border-0 bg-transparent buttonFont fw-bold' style={{ fontSize: '14px', color: "#6e6b7b" }}><span>Add Outlet</span> <BsArrowRightShort size={20} /></button>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--product"
                    iconStyle={{ color: '#ff9f43', background: "#f8f8f8", height: "15px" }}
                    icon={<BsCart3 />}
                >
                    <Row>
                        <Col className='d-flex justify-content-between'>
                            <span style={{ fontSize: '14px', fontWeight: "500" }}>Offer Created</span>
                            <span style={{ fontSize: "11px" }}>April, 18</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p style={{ fontSize: "14px", marginTop: "5px", fontWeight: "400" }}>Before: Your outlet is your brand. XIRCLS products you install will be linked with this outlet. You can add more outlets later. This information will be visible to other outlets on the XIRCLS network.</p>
                        </Col>
                    </Row>
                    <hr />
                    <button className='d-flex justify-content-between w-100 align-items-center border-0 bg-transparent buttonFont fw-bold' style={{ fontSize: '14px', color: "#6e6b7b" }}><span>Create Offer</span> <BsArrowRightShort size={20} /></button>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ color: '#00cfe8', background: "#f8f8f8", height: "15px" }}
                    icon={<HiOutlinePencilSquare />}
                >
                    <Row>
                        <Col className='d-flex justify-content-between'>
                            <span style={{ fontSize: '14px', fontWeight: "500" }}>Offer Synced</span>
                            <span style={{ fontSize: "11px" }}>September, 20</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p style={{ fontSize: "14px", marginTop: "5px", fontWeight: "400" }}>Before: Sync your offers with your Platform store to activate and track offer redemptions.</p>
                        </Col>
                    </Row>
                    <hr />
                    <button className='d-flex justify-content-between w-100 align-items-center border-0 bg-transparent buttonFont fw-bold' style={{ fontSize: '14px', color: "#6e6b7b" }}><span>Sync Offers</span> <BsArrowRightShort size={20} /></button>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ color: '#ea5455', background: "#f8f8f8", height: "15px" }}
                    icon={<BsHddStack />}
                >
                    <Row>
                        <Col className='d-flex justify-content-between'>
                            <span style={{ fontSize: '14px', fontWeight: "500" }}>Campaign Live</span>
                            <span style={{ fontSize: "11px" }}>September, 20</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p style={{ fontSize: "14px", marginTop: "5px", fontWeight: "400" }}>Before: Go live with your Infiniti campaign and begin issuing offers to customers of your outlet & partner outlets.</p>
                        </Col>
                    </Row>
                    <hr />
                    <button className='d-flex justify-content-between w-100 align-items-center border-0 bg-transparent buttonFont fw-bold' style={{ fontSize: '14px', color: "#6e6b7b" }}><span>Go Live</span> <BsArrowRightShort size={20} /></button>
                    {/* <Button className='p-0 w-100 d-flex justify-content-between align-items-center '><span>Go Live</span> <BsArrowRightShort size={20}/></Button> */}
                </VerticalTimelineElement>
            </VerticalTimeline>
        </>
    )
}

export default TimeLineVerticals