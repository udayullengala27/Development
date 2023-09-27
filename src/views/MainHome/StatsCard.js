import React from 'react'
import { FiUsers } from 'react-icons/fi'
import { CgLoadbarSound } from 'react-icons/cg'
import { ImLoop2 } from 'react-icons/im'

import { Row, Col, CardBody, Card } from 'reactstrap'
const StatsCard = () => {
    const data = [
        {
            icon: <FiUsers size={25} />,
            title: "Visitors",
            number: 0
        },
        {
            icon: <CgLoadbarSound size={25} />,
            title: "Customers",
            number: 0
        },
        {
            icon: <ImLoop2 size={25} />,
            title: "Revenue",
            number: 0
        }
    ]
    return (
        <Row>
            {
                data.map((values) => {
                    return (
                        <>
                            <Col md={4} s={12}>
                                <Card className='mainStats'>
                                    <CardBody className='pb-0 pt-0'>
                                        <Row className='mb-4'>
                                            <Col className='mt-1'>{values.icon}</Col>
                                        </Row>
                                        <Row>
                                            <Col className='d-flex justify-content-between'>
                                                <p style={{ fontSize: "16px" }}>{values.title}</p>
                                                <p style={{ fontSize: "20px" }}>{values.number}</p>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </>
                    )
                })
            }
        </Row>
    )
}

export default StatsCard