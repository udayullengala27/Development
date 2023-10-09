import React from 'react'
import { FaDesktop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa'
import { Col, Row } from 'reactstrap'

const Devices = () => {
    const data = [
        {
            icon: <FaDesktop size={25} color='white' />,
            name: "Desktop",
            value: "95.4%",
            bg: "#0ba4c6"
        },
        {
            icon: <FaTabletAlt size={25} color='white' />,
            name: "Tablet",
            value: "4.4%",
            bg: "#f49940"
        },
        {
            icon: <FaMobileAlt size={25} color='white' />,
            name: "Mobile",
            value: "0.2%",
            bg: "#149575"
        }
    ]
    return (
        <>
            <Row className=' d-flex justify-content-center'>
                {
                    data.map((currElem) => {
                        return (
                            <>
                                <Col xs={4} style={{ background: `${currElem.bg}`, borderRadius: "10px", margin: "0 10px 0 10px" }} className='py-2 w-25'>
                                    <div>
                                        <div className="icon">
                                            {currElem.icon}
                                        </div>
                                        <div className="whiteLine my-2" style={{ height: "5px", width: "2.5rem", background: "white" }}>
                                        </div>
                                        <div className="info d-flex flex-column text-light gap-1">
                                            <span>{currElem.name}</span>
                                            <span style={{ marginTop: "5px" }}>{currElem.value}</span>
                                        </div>
                                    </div>
                                </Col>
                            </>
                        )
                    })
                }
            </Row>
        </>
    )
}

export default Devices