import { useState } from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import StackedBarChart from './StackedBarChart'

const SmsReports = () => {
    const balanceStatus = [{ title: "Promotional", value: 0 }, { title: "Transactional", value: 0 }, { title: "Sent OTP", value: 0 }]

    const [timeLine, setTimeLine] = useState("Day")
    const [smsMode, setSmsMode] = useState("Sends")

    return (
        <>
            <Card>
                <CardBody>
                    <h2>Dashboard</h2>
                </CardBody>
            </Card>

            <h3 className=' fw-bold mb-1'>Balance status</h3>

            <Row>
                {
                    balanceStatus.map(stats => (
                        <Col key={stats.title} md={4}>
                            <Card>
                                <CardBody>
                                    <h2 className=' text-primary text-center mt-1 mb-2'>{stats.value}</h2>
                                    <p className=' text-center fs-4 fw-bolder mb-1 '>{stats.title}</p>
                                </CardBody>
                            </Card>
                        </Col>
                    ))
                }
            </Row>

            <h3 className=' fw-bold mb-1'>SMS Activity Timeline</h3>

            <div className=' my-2 '>
                <button className={`btn ${timeLine === "Day" ? "btn-primary" : ""}`} onClick={() => setTimeLine("Day")}>Day</button>
                <button className={`btn ${timeLine === "Month" ? "btn-primary" : ""}`} onClick={() => setTimeLine("Month")}>Month</button>
                <button className={`btn ${timeLine === "Quarter" ? "btn-primary" : ""}`} onClick={() => setTimeLine("Quarter")}>Quarter</button>
                <button className={`btn ${timeLine === "Year" ? "btn-primary" : ""}`} onClick={() => setTimeLine("Year")}>Year</button>
            </div>

            <div>
                <button className="btn btn-outline-secondary fs-5 dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    {smsMode}
                </button>
                <ul className="dropdown-menu">
                    <li className=" dropdown-item cursor-pointer" onClick={() => setSmsMode("Sends")}>Sends</li>
                    <li className=" dropdown-item cursor-pointer" onClick={() => setSmsMode("Delivered")}>Delivered</li>
                </ul>
            </div>

            <StackedBarChart smsMode={smsMode} timeLine={timeLine} />
        </>
    )
}

export default SmsReports