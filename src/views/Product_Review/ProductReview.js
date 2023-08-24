import { Col, Row, Card, CardBody, Progress } from 'reactstrap'
import DataTableWithButtons from '../tables/data-tables/basic/TableMultilingual'
import StatsCard from '../ui-element/Static'
import { FaStar } from 'react-icons/fa'
import "./ProductReview.css"
import DailyBarGraph from './DailyBarGraph'

const ProductReview = () => {


    return (
        <>
            <Card>
                <CardBody>
                    <h4>Product Reviews</h4>
                </CardBody>
            </Card>
            <Row className='match-height'>
                <Col xl='6'>
                    <Card className='rounded'>
                        <CardBody>
                            <Row>
                                <Col className='card1' md="6" sm="12">
                                    <h2 className="d-flex align-items-center fw-bold gap-1" style={{ color: "#7367f0", fontSize: "32px" }}>4.89
                                        <FaStar className='my-1' size={20} style={{ color: "#7367f0" }} />
                                    </h2>
                                    <p className='fw-bold'>Total 187 reviews</p>
                                    <p className='gap-1'>All reviews are from genuine customers</p>
                                    <span className=' badge week-btn rounded'>+5 This week</span>
                                </Col>
                                <Col md="6" sm="12" className=''>
                                    <div className='d-flex flex-column justify-content-between mx-1 my-1'>
                                        <div className="card2 d-flex align-items-center">
                                            <span className='fw-bold' style={{ width: '5rem' }} >5 star</span>
                                            <Progress value={61.50} className='w-100 h-10' style={{ marginRight: "1rem" }} />
                                            <span className='fw-bold'>124</span>
                                        </div>
                                        <div className="card2 d-flex align-items-center">
                                            <span className='fw-bold' style={{ width: '5rem' }} >4 star</span>
                                            <Progress value={30} className='w-100 h-10' style={{ marginRight: "1rem" }} />
                                            <span className='fw-bold'>40</span>
                                        </div>
                                        <div className="card2 d-flex align-items-center">
                                            <span className='fw-bold' style={{ width: '5rem' }} >3 star</span>
                                            <Progress value={15} className='w-100 h-10' style={{ marginRight: "1rem" }} />
                                            <span className='fw-bold'>12</span>
                                        </div>
                                        <div className="card2 d-flex align-items-center">
                                            <span className='fw-bold' style={{ width: '5rem' }} >2 star</span>
                                            <Progress value={7} className='w-100 h-10' style={{ marginRight: "1rem" }} />
                                            <span className='fw-bold'>7</span>
                                        </div>
                                        <div className="card2 d-flex align-items-center">
                                            <span className='fw-bold' style={{ width: '5rem' }} >1 star</span>
                                            <Progress value={2} className='w-100 h-10' style={{ marginRight: "1rem" }} />
                                            <span className='fw-bold'>2</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl='6'>
                    <Card>
                        <CardBody >
                            <Row className=''>
                                <Col sm="5">
                                    <div className="mb-5">
                                        <h4 className='text-nowrap mb-1'>Reviews statistics</h4>
                                        <p>
                                            <span>12 new reviews</span>
                                            <span className='badge week-btn badge-success mx-1'>+8.4%</span>
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="mb-1"><span className="text-success me-1">87%</span>
                                            Positive reviews</h4>
                                        <span>Weekly Report</span>
                                    </div>
                                </Col>
                                <Col>
                                    <DailyBarGraph />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <DataTableWithButtons />
                        </CardBody>
                    </Card>
                </Col>

            </Row>
        </>
    )
}

export default ProductReview