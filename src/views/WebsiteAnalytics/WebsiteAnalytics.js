import React from 'react'

import { Card, CardBody, Row, Col, Badge } from 'reactstrap'
import { BsClock } from 'react-icons/bs'
import { BiUser, BiUpArrowAlt } from 'react-icons/bi'
import { PiCirclesFourBold } from 'react-icons/pi'

import HeatMap from './HeatMap'
import ColumnChart from './ColumnChart'
import BarChart from './BarChart'
import Devices from './Device'
import LineChart from './LineChart'
import LineChart2 from './LineChart2'

const WebsiteAnalytics = () => {
  return (
    <>
      <Card>
        <CardBody>
          <h4>Website Analytics</h4>
        </CardBody>
      </Card>

      <Row>
        <Col lg="9">
          <Row >
            <Col className='d-flex flex-column' lg="4">
              <Card className='border rounded-0'>
                <div className="title d-flex flex-column" style={{ margin: "4rem 0 0.5rem 2rem" }}>
                  <span style={{ fontSize: "14px", fontWeight: "900", color: "black" }}>Session by Time</span>
                  <span style={{ marginTop: "5px", fontWeight: "900", color: "#abb0cf" }}><BsClock /> 9am - 2pm</span>
                </div>
                {/* <HeatMap /> */}
                <div className="linechart2 p-1" style={{ marginTop: "7rem" }}>
                  {/* style={{ marginTop: "9rem" }} */}
                  <LineChart2 />
                </div>
              </Card>
            </Col>
            <Col className='' lg="8">
              <input type="text" placeholder='Search For reports' className='w-100 p-1 mb-1' style={{ border: "1px solid #e8ebff" }} />
              <Card style={{ paddingTop: "5px" }} className='rounded-0'>
                <ColumnChart />
              </Card>
            </Col>
          </Row>
          <Card className='rounded-0'>
            <CardBody>
              <Row>
                <Col style={{ borderRight: "1px solid #dbdade" }} lg="6"><BarChart /></Col>
                <Col className='' lg="6">
                  <div className="title">
                    <span className='' style={{ fontSize: "15px", color: "black", fontWeight: "900", marginLeft: "2rem" }}>Session by Device</span>
                  </div>
                  <div className="device mt-2">
                    <Devices />
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col >
        {/* -------------------------------------------------------------- */}
        <Col lg="3">
          <Row>
            <Col lg="12" className='' style={{ padding: "0 2rem 0 2rem" }}>
              <div className="activeUser border" style={{ padding: "2.5rem 2rem 2.5rem 2rem", background: "#5b9af7" }}>
                <div className="user">
                  <BiUser size={25} color="white" style={{ background: "#6ba3f6" }} />
                  <span className='ms-1 text-light fw-bolder '>All Active user</span>
                </div>
                <div className="increment d-flex mt-4">
                  <div className="number-increment">
                    <p><h1 style={{ color: "white" }}>80</h1></p>
                  </div>
                  <div className="badge">
                    <Badge color="info" style={{ marginLeft: "10px", display: "flex", alignItems: "center" }}><BiUpArrowAlt /> 20%</Badge>
                  </div>
                </div>
                <div className="graph mt-3">
                  <LineChart />
                </div>
              </div>
            </Col>
          </Row>
          <Row className='mt-3'>
            <Col lg="12" className='' style={{ padding: "0 2rem 0 2rem" }}>
              <div className="FAQs bg-white border">
                {/* <h4>FAQs</h4>
                <div className="audience d-flex" style={{ marginTop: "10px" }}>
                  <BiUser size={30} color="#4a91f7" style={{ background: "#ebf4fe" }} />
                  <div className='title' style={{ marginLeft: "10px" }}>
                    <span style={{ fontSize: "13px", fontWeight: "900" }}>
                      AUDIENCE BEHAVIOR
                    </span>
                    <p>What are my top shots platform by audience?</p>
                  </div>
                </div>
                <hr />
                <div className="contents d-flex mt-1">
                  <PiCirclesFourBold size={30} color="#4a91f7" style={{ background: "#ebf4fe" }} />
                  <div className="info" style={{ marginLeft: "10px" }}>
                    <span style={{ fontSize: "13px", fontWeight: "900" }}>CONTENT ANALYSIS</span>
                    <p>
                      What are my top landing pages in terms of session?
                    </p>
                  </div>
                </div>
                <div className="more d-flex justify-content-center ">
                  <button className='border-0 fw-bolder' style={{ padding: "1rem 6rem 1rem 6rem", background: "#eef5ff", color: "#4a91f7" }}>See more</button>
                </div> */}
                <HeatMap />
              </div>
            </Col>
          </Row>
        </Col >
      </Row >


    </>
  )
}

export default WebsiteAnalytics