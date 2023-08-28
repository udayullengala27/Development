
import {Col, Row, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText, Button, Container, ButtonGroup} from 'reactstrap'

import banner from "../../assets/images/movies/headerbg.jpg"
import popcor from "../../assets/images/movies/popcorn.jpg"
import "./style.css"

const Movies = () => {

  return (
    <>
    
      <Row className='match-height'>
        <Col>
          <Card className='HeaderBanner h-screen d-flex align-items-center justify-content-center text-white bg-cover bg-center' style={{ backgroundImage: `url(${banner})` }}>
            <h1 className="fs-7 text-bold text-center">Choose exactly what you want to <span class="nextlinetext">reward your customer</span></h1>

          </Card>

        </Col>

      </Row>
      <Container className='container py-2 pt-1'>
      <Row>
        <Col md={"6"}>
        <Card>
        <CardImg className='CardImg bg-cover bg-center'
      alt="Card image cap"
      src={popcor}
      top
      width="100%"
     
    />
    <CardBody className='CardContain d-flex flex-lg-row flex-column justify-content-sm-between text-lg-left text-center justify-content-center'>
      <CardTitle tag="h5" className=''>
       Gift-Voucher 500
      </CardTitle>
     <div className='ButtonContain' >
     <Button outline className='button px-1 py-0 left-button'>
        Quick View
      </Button>

      <Button outline className='button px-1 py-0 right-button'>
       View Reward Details
      </Button>
     </div>
      
    </CardBody>
  </Card>
        </Col>
        <Col md={"6"}>
        <Card>
        <CardImg  
      className='CardImg'
      alt="Card image cap"
      src={popcor}
      top
      width="100%"
    />
    <CardBody className='CardContain d-flex flex-lg-row flex-column justify-content-sm-between text-lg-left text-center justify-content-center'>
      <CardTitle tag="h5" className=''>
       Gift-Voucher 500
      </CardTitle>
     <div className='ButtonContain' >
     <Button outline className='button px-1 py-0 left-button'>
        Quick View
      </Button>

      <Button outline className='button px-1 py-0 right-button'>
       View Reward Details
      </Button>
     </div>
      
    </CardBody>
  </Card>
        </Col>
      </Row>
      </Container>
    </>
  )
}

export default Movies