import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { AiOutlineInfoCircle } from "react-icons/ai"

const SamplesDashboard = () => {
    const samplesInfo = [
        { title: "Total Samples Redeemed", value: "3" },
        { title: "Total Samples Delivered", value: "3" },
        { title: "AOV on Sample Orders", value: "Rs. XXX" },
        { title: "Total Website Engagement", value: "3" },
        { title: "Total Email Engagement", value: "3" },
        { title: "Total SMS Engagement", value: "3" },
        { title: "Total WhatsApp Engagement", value: "3" }
    ]

    return (
        <>
            <h4 className=' mb-2'>Samples Dashboard</h4>

            <Row>
                {
                    samplesInfo.map((ele, index) => (
                        <Col key={index} lg={4} md={6} sm={12}>
                            <Card>
                                <CardBody>
                                    {/* <div className=' d-flex justify-content-around align-items-center gap-3'>
                                        <div className='d-flex flex-column justify-content-between gap-2'>
                                            <h3 className=' m-0'>{ele.value}</h3>
                                            <p className=' fs-5 m-0'>{ele.title}</p>
                                        </div>
                                        <AiOutlineInfoCircle size={20} />
                                    </div> */}
                                    <div>
                                        <h3 className=' mb-1'>{ele.value}</h3>
                                        <div className=' d-flex align-items-end'>
                                            <p className=' fs-5 m-0'>{ele.title}</p>
                                            <p className='' style={{ marginLeft: "5px", marginBottom: "10px" }}>
                                                <AiOutlineInfoCircle size={15} />
                                            </p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    ))
                }
            </Row>

        </>
    )
}

export default SamplesDashboard