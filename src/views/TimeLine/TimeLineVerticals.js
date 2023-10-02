import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './TimeLineVerticals.css'
import { Card, CardBody, Row, Col } from 'reactstrap'
import { FaAdn } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import { BsFileEarmarkPdf } from 'react-icons/bs'
import Avatar from 'react-avatar'
import { HiOutlineChatBubbleBottomCenterText } from 'react-icons/hi2'
import { IoCallOutline } from 'react-icons/io5'
import ProdImg from './productImg.jpeg'


const TimeLineVerticals = () => {
    return (
        <>
            <VerticalTimeline animate={false}>

                <VerticalTimelineElement
                    className="vertical-timeline-element--flight"
                    iconStyle={{ color: 'green' }}
                    icon={<FaAdn />}
                >
                    <Row style={{ marginBottom: "5px" }}>
                        <Col className='d-flex justify-content-between '>
                            <span style={{ fontSize: "14px", fontWeight: "500" }}>Get on the flight</span>
                            <span style={{ fontSize: "11px" }}>Wednesday</span>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: "5px" }}>
                        <Col>
                            <span style={{ fontSize: "13px", marginRight: "5px" }}>Charles de Gaulle Airport, Paris</span>
                            <FiArrowRight className='' />
                            <span style={{ fontSize: "13px", marginLeft: "5px" }}>Heathrow Airport, London</span>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: "5px" }}>
                        <Col>
                            <p style={{ fontSize: "11px" }} className=' mt-0 '>6:30 AM</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <BsFileEarmarkPdf color='red' size={20} style={{ marginRight: "10px" }} />
                            <span style={{ fontSize: "13px" }}>booking-card.pdf</span>
                        </Col>
                    </Row>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--profile"
                    iconStyle={{ color: 'green' }}
                    icon={<FaAdn />}
                >
                    <Row>
                        <Col className='d-flex justify-content-between'>
                            <span style={{ fontSize: '14px', fontWeight: "500" }}>Interview Schedule</span>
                            <span style={{ fontSize: "11px" }}>April, 18</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p style={{ fontSize: "12px", marginTop: "5px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut beatae repellendus necessitatibus dolorum officiis inventore?</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col className='d-flex justify-content-between align-items-center'>
                            <div className="1 d-flex gap-1 ">
                                <Avatar name="Ashley Smith" round={true} size='45' color='#8f85f3' />
                                <div className="bio" style={{ marginTop: "5px" }}>
                                    <h6 style={{ fontSize: "0.8125rem" }}>Ashley Smith</h6>
                                    <span style={{ fontSize: "0.6875rem" }}>JavaScript Developer</span>
                                </div>
                            </div>
                            <div className="2">
                                <button className=' border-0 bg-transparent '><HiOutlineChatBubbleBottomCenterText size={20} /></button>
                                <button className=' border-0 bg-transparent mx-1'><IoCallOutline size={20} /></button>
                            </div>
                        </Col>
                    </Row>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--product"
                    iconStyle={{ color: 'green' }}
                    icon={<FaAdn />}
                >
                    <Row>
                        <Col className='d-flex'>
                            <div className="ProductImg">
                                <img src={ProdImg} alt="" style={{ width: "4.5rem", borderRadius: "0.5rem" }} />
                            </div>
                            <div className="info" style={{ marginLeft: "10px" }}>
                                <div className="name-date d-flex justify-content-between">
                                    <span style={{ fontSize: "15px", fontWeight: "500" }}>Sold Puma POPX Blue Color</span>
                                    <span style={{ fontSize: "11px" }}>January, 10</span>
                                </div>
                                <span style={{ fontSize: "13px" }}>PUMA presents the latest shoes from its collection. Light & comfortable made with highly durable material.</span>
                            </div>
                        </Col>
                    </Row>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ color: 'green' }}
                    icon={<FaAdn />}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                        User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ color: 'green' }}
                    icon={<FaAdn />}
                >
                    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                    <p>
                        Strategy, Social Media
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{ color: 'green' }}
                    icon={<FaAdn />}
                >
                    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </>
    )
}

export default TimeLineVerticals