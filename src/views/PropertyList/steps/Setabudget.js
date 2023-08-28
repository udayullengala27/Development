// ** React Imports
import { Fragment } from 'react'

// ** Icons Imports
import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Reactstrap Imports
import { Label, Row, Col, Input, Form, Button } from 'reactstrap'
import './steps.css'
const Setabudget = ({ stepper, type }) => {
  return (
    <Fragment>
      <div className='content-header '>
        <h5 className='mb-0'>Set a budget</h5>
        <small className='text-muted'>& customise how you spend it.</small>
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`username-${type}`}>
              Total Sponsorship Amount 0
            </Label>
            <Input type='number' name={`username-${type}`} id={`username-${type}`} placeholder='Total Sponsorship Amount' />
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label' for={`email-${type}`}>
              Total No. Of Customers Rewarded
            </Label>
            <Input
              type='text'
              name={`email-${type}`}
              id={`email-${type}`}
              placeholder='Total'
              aria-label='john.doe'
            />
          </Col>
        </Row>
        <Row>
          <div className='col-md-6 mb-1'>
            <Label className='form-label'>
             Discounted Amount 0
            </Label>
            <Input type='text'  value='475.0' className='form-color '/>
          </div>
          <div className=' col-md-6 mb-1'>
            <Label className='form-label'>
              Fixed Reward 0
            </Label>
            <Input type='text'  value='500' className='form-color '/>
          </div>
        </Row>
        <Row>
        <div className='content-footer pt-1 pb-1'>
        <h5 className='mb-0'>How long</h5>
        <small className='text-muted'>will this sponsorship last ?</small>
      </div>
          <div className='form-password-toggle col-md-6 mb-1'>
            <Label className='form-label' for={`password-${type}`}>
             Sponsorship Start Date
            </Label>
            <Input type='text'  placeholder='Sponsorship Start Date'/>
          </div>
          <div className='form-password-toggle col-md-6 mb-1'>
            <Label className='form-label' >
           Sponsorship End Date
            </Label>
            <Input type='text'   placeholder='Sponsorship Start End'/>
          </div>
        </Row>
       
        <div className='d-flex justify-content-between'>
          <Button color='secondary' className='btn-prev' outline disabled>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>Previous</span>
          </Button>
          <Button color='primary' className='btn-next' onClick={() => stepper.next()}>
            <span className='align-middle d-sm-inline-block d-none'>Next</span>
            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default Setabudget
