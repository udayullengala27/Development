// ** React Imports
import { Fragment } from 'react'
import banner1 from "../../../assets/sidebar/PVR.png"
import banner2 from "../../../assets/sidebar/XIRCLS.png"
import banner3 from "../../../assets/sidebar/link.png"
// ** Third Party Components
import Select from 'react-select'
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Utils
// ** Reactstrap Imports
import { Label, Row, Col, Form, Input, Button, Card, Table } from 'reactstrap'
// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

import './steps.css'
const Review = () => {
  
return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Summary</h5>
        <small>Rule Description.</small>
      </div>
      <Row>
      <Col className='banner d-flex justify-content-around col-12 p-1' >
        <img src={banner2} className="img-1" atl="xircls"/>
        <img src={banner3} className="img-2" atl="link"/>
        <img src={banner1} className="img-3" atl="pvr"/>
      </Col>
      </Row>
      <Row className='mt-2'>
        
        <Col className='col-8 report'>
        <Col className='col-12'>
          <div className="d-flex items flex-row justify-content-between p-1">
            <div className='text-start'>Total Sponsorship Amount:</div>
            <div className='text-end mr-1'>2375</div>
          </div>
        </Col>
        <Col className='col-12'>
          <div className="d-flex flex-row items  justify-content-between p-1">
            <div className='text-start'>Maximum Rewardable Amount Per Transaction:</div>
            <div className='text-end mr-1'>500</div>
          </div>
        </Col>
        <Col className='col-12'>
          <div className="d-flex flex-row items justify-content-between p-1 ">
            <div className='text-end'>Total Rewardable Customers:</div>
            <div className='text-end mr-1'>5</div>
          </div>
        </Col>
        <Col className='col-12'>
          <div className="d-flex flex-row items justify-content-between p-1">
            <div className='text-end'>Customers Rewarded:</div>
            <div className='text-end mr-1'>1</div>
          </div>
        </Col>

        <Row>
        
      </Row>
        
  
        </Col>
        <Col className='col-4 report-2'>
       

        <Row>
        <Col className='col-12'>
          <div className="d-flex flex-row items justify-content-between p-1">
            <div className='text-start'>Start End:</div>
            <div className='text-end mr-1'>2375</div>
          </div>
        </Col>
        <Col className='col-12'>
          <div className="d-flex flex-row  items justify-content-between p-1">
            <div className='text-start'>End Date</div>
            <div className='text-end mr-1'>500</div>
          </div>
        </Col>
       
      </Row>
        
  
        </Col>
      </Row>
    </Fragment>
  )
}

export default Review
