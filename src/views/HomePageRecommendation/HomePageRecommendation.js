import React from 'react'
import { Col, Card, CardBody, Row, Progress } from 'reactstrap'
import StatsCard from './statscard'
import { HiChevronDown } from 'react-icons/hi'
import { BsChevronDown, BsCalendar4 } from 'react-icons/bs'
import ApexChart from './MultiDataProgressBar'
import './HomePageRecommendation.css'


const HomePageRecommendation = () => {
    return (
        <>
            <Card>
                <CardBody>
                    <h4>HomePage Recommendation</h4>
                </CardBody>
            </Card>
            <Card className='mb-0'>
                <CardBody>
                    <Col className='d-flex justify-content-between align-items-center '>
                        <div className=' '><BsChevronDown className='mx-1' /><span className='fw-bolder h4'>Recommendations Performance</span></div>
                        <div>
                            <div className="dropdown">
                                <button className="btn border" type="button" style={{ backgroundColor: "#e6f2f2" }} id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <BsCalendar4 style={{ marginRight: "9px" }} />  This Week <HiChevronDown />
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Row className='mt-1'>
                        <StatsCard className="w-100" />
                    </Row>
                    <Row>
                        <Col>
                            <Card className=' position-relative '>
                                <CardBody className=' ps-0 '>
                                    <span className='fw-bolder position-absolute ' style={{ fontSize: "16px", marginLeft: "2rem", top: "20px" }}>Performance Share</span>
                                    <ApexChart />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className=''>
                            <Card className='mb-0'>
                                <CardBody className=''>
                                    <div className='d-flex justify-content-between '>
                                        <span className='fw-bolder' style={{ fontSize: "16px" }}>Catalog Usage</span>
                                        <p className='fw-bolder' style={{ fontSize: "16px" }}>26.81%</p>
                                    </div>
                                    <div>
                                        <Progress
                                            color="success"
                                            value={50}
                                            style={{ height: "20px", marginTop: "4px", marginBottom: "1.2rem", borderRadius: "0" }}
                                        />
                                    </div>
                                    <small ><span className='fw-bolder' style={{ color: "lightgreen" }}>1,704 recommended </span>from 6,355 items</small>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    )
}

export default HomePageRecommendation