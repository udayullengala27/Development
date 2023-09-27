import React from 'react'
import { Card, CardBody, Row, Col } from 'reactstrap'
import image1 from './CardImage.jpeg'
import './MainHome.css'
const InfoCard = () => {
    const data = [
        {
            title: "Verify traffic data",
            desc: "Put your analytics tools for a test- you may be in for a surprise or discover something else",
            image: <img src={image1} alt="/" style={{ maxWidth: "100%" }} />
        },
        {
            title: "We're here for you!",
            desc: "Reach put for Question, Suggestions or get a walk through of our solutions for you",
            image: <img src={image1} alt="/" style={{ maxWidth: "100%" }} />
        },
        {
            title: "Know your mission",
            desc: "To Empower business globally to instantly connect and fulfill their marketing goals",
            image: <img src={image1} alt="/" style={{ maxWidth: "100%" }} />
        }
    ]
    return (
        <>
            <Row>
                {
                    data.map((currElem) => {
                        return (
                            <>
                                <Col md={4} s={12}>
                                    <Card style={{ maxHeight: "17rem" }}>
                                        <CardBody className=''>
                                            <div className="main d-flex justify-content-between ">
                                                <div className="title-desc d-flex flex-column">
                                                    <h5>{currElem.title}</h5>
                                                    <p>{currElem.desc}</p>
                                                </div>
                                                <div className="img">
                                                    {currElem.image}
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </>
                        )
                    })
                }
            </Row >

        </>
    )
}

export default InfoCard