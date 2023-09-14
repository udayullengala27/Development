import { AiOutlineIdcard, AiOutlineUser } from 'react-icons/ai'
import { GrRotateLeft } from "react-icons/gr"
import { Col, Row, Card, CardBody } from 'reactstrap'
import Avatar from '@components/avatar'

const StatsCard = () => {
    const data = [
        {
            title: 'Recommended Items',
            subtitle: '267610',
            color: 'light-warning',
            subitems: "129,147 items",
            icon: <AiOutlineIdcard size={24} />
        },
        {
            title: 'Personalized',
            subtitle: '48.26%',
            subitems: "129,147 items",
            color: 'light-info',
            icon: <AiOutlineUser size={24} />
        },
        {
            title: 'Non-Personalized',
            subtitle: '49.65%',
            subitems: "132,874 items",
            color: 'light-primary',
            icon: <AiOutlineUser size={24} />
        },
        {
            title: 'Fallback',
            subtitle: '2.09%',
            subitems: "5,589 items",
            color: 'light-danger',
            icon: <GrRotateLeft size={24} />
        }
    ]
    return (
        <>
            {
                data.map((currElem) => {
                    return (
                        <>
                            <Col md={3}>
                                <Card className='border' style={{minHeight:"155px"}}>
                                    <CardBody>
                                        <Row>
                                            <Col xs={9}>
                                                <div data-toggle="tooltip" data-placement="top" title="i am a good boy" className='fw-bolder' style={{ fontSize: "17px" }}>
                                                    <span>{currElem.title}</span>
                                                </div>
                                            </Col>
                                            <Col xs={3}>
                                                <Avatar color={currElem.color} icon={currElem.icon} className='me-1' style={{ borderRadius: "0" }} />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <div>
                                                <span className='fw-bold h1 mt-1'>{currElem.subtitle}</span>
                                            </div>
                                        </Row>
                                        <Row className='mt-1 mb-1'>
                                            <div>
                                                <span className='text-muted'>{currElem.subitems}</span>
                                            </div>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </>
                    )
                })
            }
        </>
    )
}

export default StatsCard