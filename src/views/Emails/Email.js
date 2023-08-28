// ** React Imports
import { Fragment, useState } from 'react'
import styled from 'styled-components'
// ** Icons Imports

import { ArrowLeft, ArrowRight } from 'react-feather'

// ** Reactstrap Imports

import { Label, Row, Col, Input, Form, Button, Card} from 'reactstrap'
import './steps.css'
const Email = () => {

  const StyledSelect = styled.select`
  color: #b9b9c3; /* Placeholder text color */
  font-size: 16px; /* Adjust font size as needed */
  /* Add any other styles you want for the select element */
`

const PlaceholderOption = styled.option`
  color: #b9b9c3; /* Placeholder text color */
`

  const [selectedOption, setSelectedOption] = useState('')

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value)
  }
  return (
    <Fragment>
      
      <Form onSubmit={e => e.preventDefault()}>
      
        <Card>
  <h4 className='p-1'>Campaign Information </h4>
        <Row className='p-2'>
        <Col md='6' className='mb-1'>
           
           <Label className='form-label' for="">
            Name
           </Label>
           <Input type='text' name="" id="" placeholder='Email Campaign 2022-09-19 00.27.57' />
         </Col>
         <Col md='6' className='mb-1'>
           <Label className='form-label'>
            Tags
            </Label>
            <StyledSelect value={selectedOption} onChange={handleSelectChange}>
        <PlaceholderOption value="" disabled>
          Choose a list or segment
        </PlaceholderOption>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </StyledSelect>
      
         </Col>
         </Row>
        </Card>
         
       <Card>
      
       <Row className='d-flex flex-column'>
       <h4 className='p-1 m-1'>Recipients</h4>
       <Col className='xm-12'>
       
       <Col className='mb-1 p-1'>
           <Label className='form-label'>
           Send To
            </Label>
            <StyledSelect value={selectedOption} onChange={handleSelectChange}>
        <PlaceholderOption value="" disabled>
          Choose a list or segment
        </PlaceholderOption>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </StyledSelect>
      
         </Col>
       </Col>

       <Col>
       <Col className='mb-1 p-1'>
           <Label className='form-label'>
           Don't send to <span>(Optional)</span>
            </Label>
            <StyledSelect value={selectedOption} onChange={handleSelectChange}>
        <PlaceholderOption value="" disabled>
          Choose a list or segment
        </PlaceholderOption>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </StyledSelect>
         </Col>
       </Col>
       <Col>
       <div className='discription'>
       <h5 className=''>Skip recently emailed profiles</h5>
       <p className=''>This campaign will skip profilers who recived an email in 
       the past <span class="break">% hours.</span> Also called <br/> Smart Sending you can 
        this timeframe in <a href="#">Account Settings .</a></p>
       </div>
       
       </Col>
         </Row>
       </Card>
      
      </Form>
    </Fragment>
  )
}

export default Email
