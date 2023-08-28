// ** React Imports
import { Fragment } from 'react'

// ** Icons Imports
import { ArrowLeft, ArrowRight } from 'react-feather'
import DataTableWithButtons from '../../tables/data-tables/basic/TableMultilingual'
// ** Reactstrap Imports
import { Label, Row, Col, Input, Form, Button, Card, CardBody, Table} from 'reactstrap'

const Address = ({ stepper, type }) => {
  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>Assign Customer</h5>
        <small>Selct customer groups to reward .</small>
      </div>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
          <Col md='3' className='mb-1'>
            <Label className='form-label' for={`address-${type}`}>
             My Rewards
            </Label>
            <Input
              type='text'
              id={`address-${type}`}
              name={`address-${type}`}
              value="Gift-Card (500)"
              
            />
          </Col>
          <Col md='6' className='button mb-1'>
            <div>
            <Label className='form-label' for={`landmark-${type}`}>
              Customer Group
            </Label>
            <Input type='text' className='width-[70%]' name={`landmark-${type}`} id={`landmark-${type}`} placeholder='Select customer group' />
            
            </div>
          </Col>
          <Col md='3 mt-2'>
          <a  color='primary' className='btn btn-primary'> Customer</a>
          </Col>
        </Row>
        <Row>
        <Col lg='4' className='d-flex align-items-center px-0 px-lg-1'>
        <div className='align-items-center me-2'>
           
           <label htmlFor='rows-per-page'>Show</label>
           <Input
             type='select'
             id='rows-per-page'
             value=''
             onChange=''
             className='form-control ms-50 pe-3'
           >
             <option value='10'>10</option>
             <option value='25'>25</option>
             <option value='50'>50</option>
           </Input>
        
         
         </div>
        </Col>
        <Col
          lg='4'
          className='text-center'
        >
         <h3 className='mt-2'>Selected Customer</h3>
          </Col>
          <Col lg='4'>
          <Input className='w-auto mt-2' type='text' value="" onChange="" placeholder='Customer'>
           
          </Input>
          </Col>
          
      </Row>
     <Row>
    <Col className='mt-1 text-center'>
    <Table bordered responsive>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr bordered>
          <td colSpan={3}>No data Available</td>
        </tr>
        </tbody>
        </Table>
    </Col>
     </Row>
        <div className='d-flex justify-content-between mt-2'>
          <Button color='primary' className='btn-prev' onClick={() => stepper.previous()}>
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

export default Address
