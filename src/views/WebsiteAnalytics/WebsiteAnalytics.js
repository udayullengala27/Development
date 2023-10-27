import React, { useState } from 'react'

import { Card, CardBody, Row, Col, Badge, Button } from 'reactstrap'
import { BsClock } from 'react-icons/bs'
import { BiUser, BiUpArrowAlt } from 'react-icons/bi'

import HeatMap from './HeatMap'
import ColumnChart from './ColumnChart'
import BarChart from './BarChart'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_blue.css'

import Devices from './Device'
import { LineChart, LineChart2 } from './allLineChart'
import apiData from "../../@core/auth/api/api.json"

const WebsiteAnalytics = () => {

  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const handleDateChange = (selectedDates) => {
    setStartDate(selectedDates[0])
    setEndDate(selectedDates[1])
  }

  // const [date, setDate] = useState({ start_date: "", end_date: "" })
  // const [startDate, setStartDate] = useState('')
  // const [endDate, setEndDate] = useState('')
  const [responseData, setResponseData] = useState({})
  // const formattedStartDate = moment(setStartDate).format("YYYY-MM-DD")
  // const formattedEndDate = moment(setEndDate).format("YYYY-MM-DD")

  const handleSubmit = () => {
    const form_data = new FormData()
    form_data.append("shop", "maapro.myshopify.com")
    form_data.append("app", "superleadz")
    form_data.append("start_date", startDate.toISOString().split('T')[0])
    form_data.append("end_date", endDate.toISOString().split('T')[0])

    try {
      fetch(apiData.api_link, {
        method: "POST",
        body: form_data
      }).then(response => {
        if (!response.ok) {
          throw new Error("Failed")
        }
        return response.json()
      }).then(data => {
        setResponseData(data)
      })
    } catch (error) {
      console.error("Error found")
    }
  }
  // console.log("data:", responseData)

  // ------------------date function
  // const handleStartDateChange = (event) => {
  //   const selectedStartDate = event.target.value

  //   if (selectedStartDate) {
  //     const startDate = new Date(selectedStartDate)
  //     startDate.setDate(startDate.getDate() + 7) // Add 7 days to the selected date
  //     const endDate = startDate.toISOString().split('T')[0] // Format the date as "YYYY-MM-DD"

  //     setDate({ start_date: selectedStartDate, end_date: endDate })
  //   } else {
  //     setDate({ start_date: "", end_date: "" })
  //   }
  // }
  // const updateEndDate = 

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
              <Card className='border rounded-0 h-100'>
                <div className="title d-flex flex-column" style={{ margin: "0.5rem 0 0.5rem 2rem" }}>
                  <span style={{ fontSize: "14px", fontWeight: "900", color: "black" }}>Session by Time</span>
                  <span style={{ marginTop: "5px", fontWeight: "900", color: "#abb0cf" }}><BsClock /> 9am - 2pm</span>
                </div>
                {/* <div className="dataInput d-flex flex-column">
                  <div className="start" style={{ padding: "5px" }}>
                    <label htmlFor="" style={{ marginRight: "5px" }}>Start Date</label>
                    <input type="date" className="startDate" value={date.start_date} onChange={handleStartDateChange} style={{ padding: "5px", border: "1px solid #abb0cf" }} />
                  </div>
                  <div className="end" style={{ padding: "5px" }}>
                    <label htmlFor="" style={{ marginRight: "10px" }}>End Date</label>
                    <input type="date" className="endDate" value={date.end_date} disabled style={{ padding: "5px", border: "1px solid #abb0cf" }} />
                  </div>
                </div>*/}
                <div className="input d-flex justify-content-between mt-2">
                  <Flatpickr
                    options={{
                      mode: 'range',
                      dateFormat: 'Y-m-d' // You can customize the date format
                    }}
                    style={{ width: "70%", marginLeft: "5px" }}
                    value={[startDate, endDate]}
                    onChange={handleDateChange}
                  />
                  <button className='bg-transparent' onClick={handleSubmit} style={{ width: "25%", padding: "5px", marginRight: "5px", border: "1px solid black" }}>Show</button>
                </div>
                <div className="linechart2 p-1 mt-1" >
                  <LineChart2 date={responseData} />
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
                <div className="increment d-flex mt-2">
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
              <div className="FAQs bg-white border pt-1">
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

//onChange={(e) => setDate({ ...date, start_date: e.target.value })}