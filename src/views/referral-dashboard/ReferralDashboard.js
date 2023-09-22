import { useState, useEffect } from 'react'
import { Col, Row, Card, CardBody } from 'reactstrap'
// import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container'
// import Table from 'react-bootstrap/Table'
import box from '../../assets/images/icons/box.svg'
import PieChartWithCustomLegend from '../ui-element/PieChartWithCustomLegend'
import LineChartWithCustomLegend from '../ui-element/LineGraphWithPercentage'
import ResponsiveTable from '../tables/reactstrap/ResponsiveTable'
import TableResponsive from '../tables/reactstrap/TableResponsive'
import './ReferralDashboard.css'

function Referrals() {
    const [responseData, setResponseData] = useState({})
    const loyaltyData = {
        loyalty: 75,
        nonLoyalty: 25
    }

    const loyaltyData1 = {
        loyalty: 75,
        nonLoyalty: 25
    }

    useEffect(() => {
        fetch(`https://api.xircles.in/referral/dashboard`, {
            method: "GET",
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk0MTAwMjI0LCJpYXQiOjE2OTQwNzAyMjQsImp0aSI6Ijc1YTM5NGM1NTYxYzRmNDM5YjJkMTg5MTQwMzYxMTZjIiwidXNlcl9pZCI6MTg3MTc2fQ.6eBUrGq_mLJrtG7e36pjt-WLvWhbs1_pV0s0cXehQCk",
                //  'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk0MTAwMjI0LCJpYXQiOjE2OTQwNzAyMjQsImp0aSI6Ijc1YTM5NGM1NTYxYzRmNDM5YjJkMTg5MTQwMzYxMTZjIiwidXNlcl9pZCI6MTg3MTc2fQ.6eBUrGq_mLJrtG7e36pjt-WLvWhbs1_pV0s0cXehQCk',
                "Api-key": "Fv14sMRkz8uYqd3VMbKy5U+7h6QE4Rcb7MeG1d/PoXU="
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setResponseData(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <>
            <Card>
                <Row>
                    <Col sm={12} md={6} xl={4}>
                        <CardBody>
                            <div className='section-1-heading'>
                                <h4>Overview</h4>
                            </div>
                        </CardBody>
                    </Col>
                </Row>
            </Card>

            <Row >
                <Col sm={12} md={12} lg={6} xl={5} >
                    <Card >
                        <CardBody className='w-25' >

                            <div className='line-chart d-flex'>
                                <div className='left'>
                                    <div className='line-chart-heading'>
                                        <h5 style={{ width: "max-content", fontWeight: "600" }}>Average Customer Spend</h5>
                                    </div>
                                    <div className='chart-container-1 mt-2'>
                                        <LineChartWithCustomLegend loyaltyData1={loyaltyData1} />
                                    </div>
                                </div>
                                <div className='right d-flex flex-column justify-content-center ms-3'>
                                    <div className='loyalty' style={{ width: "max-content" }}>
                                        <p className='font-small-3 mt-1'>Loyalty</p>

                                    </div>
                                    <div className='loyalty-value'>
                                        <h5 style={{ fontWeight: "600" }}>N/A</h5>
                                    </div>

                                    <div className='Non-loyalty' style={{ width: "max-content" }}>
                                        <p className='font-small-3 mt-1'>Non-Loyalty</p>
                                    </div>
                                    <div className='Non-loyalty-value'>
                                        <h5 style={{ fontWeight: "600" }}>N/A</h5>
                                    </div>
                                </div>
                            </div>
                            {/* <PieChartWithCustomLegend loyaltyData={loyaltyData} />
                         <div>{loyaltyData.loyalty}%</div> */}
                        </CardBody>
                    </Card>
                </Col>

                <Col sm={12} md={12} lg={6} xl={5} >
                    <Card>
                        <CardBody>
                            <div className='pie-chart d-flex' >

                                <div className='left'>
                                    <div className='pie-chart-heading'>
                                        <h5 style={{ width: "max-content", fontWeight: "600" }}>Average Customer Spend</h5>
                                    </div>
                                    <div className='chart-container mt-2'>
                                        <PieChartWithCustomLegend loyaltyData={loyaltyData} height={200} width={300} />
                                    </div>
                                </div>
                                <div className='right d-flex flex-column justify-content-center' style={{ marginLeft: "15vh" }}>
                                    <div className='loyalty' style={{ width: "max-content" }}>
                                        <p className='font-small-3 mt-1'>Loyalty</p>
                                    </div>
                                    <div className='loyalty-value'>
                                        <h5 style={{ fontWeight: "600" }}>N/A</h5>
                                    </div>

                                    <div className='Non-loyalty' style={{ width: "max-content" }}>
                                        <p className='font-small-3 mt-1'>Non-Loyalty</p>
                                    </div>
                                    <div className='Non-loyalty-value'>
                                        <h5 style={{ fontWeight: "600" }}>N/A</h5>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col sm={12} md={6} xl={4}>
                    {/* <CardBody> */}
                    <div className='section-1-heading'>
                        <h4 className='ms-1' style={{ marginTop: "1vh", marginBottom: "3.2vh" }}>Customers</h4>
                        {/* <p className='ms-1'style={{marginTop:"1vh", marginBottom:"3.2vh"}}>Rewards Issued</p> */}
                    </div>
                    {/* </CardBody> */}
                </Col>
            </Row>

            <Row>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <CardBody>
                            <div className='card-contend'>
                                <div className='section-4-card-2 d-flex justify-content-between'>
                                    <div className='section-4-card-1-heading'>
                                        <h5 style={{ fontWeight: "600" }}>{responseData?.total_revenue ? responseData.total_revenue : 0}</h5>
                                        <p className='font-small-3 mt-1 text-uppercase'>Total Revenue</p>
                                    </div>
                                    <div className='section-4-cad-1-img'>
                                        <img className='voucher' src={box} style={{ width: "5vh" }}></img>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <CardBody>
                            <div className='card-contend'>
                                <div className='section-4-card-2 d-flex justify-content-between'>
                                    <div className='section-4-card-1-heading'>
                                        <h5 style={{ fontWeight: "600" }}>{responseData?.total_referrals ? responseData.total_referrals : 0}</h5>
                                        <p className='font-small-3 mt-1 text-uppercase'>Total Referrals</p>
                                    </div>
                                    <div className='section-4-cad-1-img'>
                                        <img className='voucher' src={box} style={{ width: "5vh" }}></img>
                                    </div>
                                </div>

                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <CardBody>
                            <div className='card-contend'>
                                <div className='section-4-card-2 d-flex justify-content-between'>
                                    <div className='section-4-card-1-heading'>
                                        <h5 style={{ fontWeight: "600" }}>{responseData?.total_share ? responseData.total_share : 0}</h5>
                                        <p className='font-small-3 mt-1 text-uppercase'>Total Shares</p>
                                    </div>
                                    <div className='section-4-cad-1-img'>
                                        <img className='voucher' src={box} style={{ width: "5vh" }}></img>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col sm={12} md={6} xl={4}>
                    {/* <CardBody> */}
                    <div className='section-1-heading'>
                        <h4 className='ms-1' style={{ marginTop: "1vh", marginBottom: "3.2vh" }}>Top Customers</h4>
                        {/* <p className='ms-1'style={{marginTop:"1vh", marginBottom:"3.2vh"}}>Rewards Issued</p> */}
                    </div>
                    {/* </CardBody> */}
                </Col>
            </Row>

            <Row>
                <Col sm={12} md={12} xl={12}>
                    <Card>
                        <CardBody>
                            <ResponsiveTable></ResponsiveTable>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col sm={12} md={6} xl={4}>
                    {/* <CardBody> */}
                    <div className='section-1-heading'>
                        <h4 className='ms-1' style={{ marginTop: "1vh", marginBottom: "3.2vh" }}>Rewards Redeemed</h4>
                        {/* <p className='ms-1'style={{marginTop:"1vh", marginBottom:"3.2vh"}}>Rewards Issued</p> */}
                    </div>
                    {/* </CardBody> */}
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card>
                        <CardBody>
                            <TableResponsive></TableResponsive>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            {/* <Card>
                <Row>
                    <Col sm={12} md={6} xl={4}>
                        <CardBody>
                            <PieChartWithCustomLegend loyaltyData={loyaltyData} />
                            <div>{loyaltyData.loyalty}%</div>
                        </CardBody>
                    </Col>
                </Row>
            </Card>

             <Card>
                <Row>
                    <Col sm={12} md={6} xl={4}>
                        <CardBody>
                            <LineChartWithCustomLegend loyaltyData1={loyaltyData1} /> 
                        </CardBody>
                    </Col>
                </Row>
             </Card> */}

            <Card>
                <Row>
                    <Col sm={12} md={6} xl={4}>
                        <CardBody>
                            <div className='section-1-heading'>
                                <h4>Referrals</h4>
                            </div>
                        </CardBody>
                    </Col>
                </Row>
            </Card>
            <Card className='mb-3'>
                <Row >

                    <Col sm={6} md={6} xl={4}>
                        <CardBody style={{ display: "flex", justifyContent: "flex-start" }}>
                            <div className='section-2-card-bottom' style={{ marginTop: "5vh" }}>
                                <div className='section-2-card-1 d-flex'>
                                    <div className='section-2-card-img'>
                                        <img className='voucher' src={box} style={{ width: "5vh" }}></img>
                                        {/* <img className='user' src={rupee}></img> */}
                                    </div>
                                    <div className='section-2-card-info' style={{ marginLeft: "3vh" }}>
                                        <div className='section-2-card-heading fw-bolder'>
                                            <h5 style={{ fontWeight: "600" }}>XX</h5>
                                        </div>
                                        <div className='section-2-card-para '>
                                            <p className='font-small-3 '>Successful Referrals</p>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </CardBody>
                    </Col>

                    <Col sm={6} md={4} xl={3}>
                        <CardBody >
                            <div className='section-2-card-bottom' style={{ marginTop: "5vh" }}>
                                <div className='section-2-card-1 d-flex'>
                                    <div className='section-2-card-img'>
                                        <img className='voucher' src={box} style={{ width: "5vh" }}></img>
                                        {/* <img className='user' src={rupee}></img> */}
                                    </div>
                                    <div className='section-2-card-info' style={{ marginLeft: "3vh" }}>
                                        <div className='section-2-card-heading fw-bolder'>
                                            <h5 style={{ fontWeight: "600" }}>Rs.XXX</h5>
                                        </div>
                                        <div className='section-2-card-para '>
                                            <p className='font-small-3 '>Amount Earned via Referrals</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </CardBody>
                    </Col>
                </Row>
            </Card>

            <hr style={{ border: "1.7px solid #d5d5e7", width: "50%", margin: "auto" }}></hr>

            {/* <Card> */}
            <Row>
                <Col sm={12} md={6} xl={4}>
                    {/* <CardBody> */}
                    <div className='section-1-heading'>
                        <h4 className='ms-1' style={{ marginTop: "3vh", marginBottom: "3.2vh" }}>Rewards Issued</h4>
                        {/* <p className='ms-1'style={{marginTop:"1vh", marginBottom:"3.2vh"}}>Rewards Issued</p> */}
                    </div>
                    {/* </CardBody> */}
                </Col>
            </Row>
            {/* </Card> */}

            <Row>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <CardBody>
                            <div className='card-contend'>
                                <div className='section-4-card-2 d-flex justify-content-between'>
                                    <div className='section-4-card-1-heading'>
                                        <h5 style={{ fontWeight: "600" }}>Rs.XX</h5>
                                        <p className='font-small-3 mt-1'> Store Credit Issued</p>
                                    </div>
                                    <div className='section-4-cad-1-img'>
                                        <img className='voucher' src={box} style={{ width: "5vh" }}></img>
                                    </div>
                                </div>
                                <div className='card-link d-flex justify-content-end'>
                                    <a href='/' style={{ textDecoration: "underline" }}>See more</a>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <CardBody>
                            <div className='card-contend'>
                                <div className='section-4-card-2 d-flex justify-content-between'>
                                    <div className='section-4-card-1-heading'>
                                        <h5 style={{ fontWeight: "600" }}>XX</h5>
                                        <p className='font-small-3 mt-1'> Gift Cards Issued</p>
                                    </div>
                                    <div className='section-4-cad-1-img'>
                                        <img className='voucher' src={box} style={{ width: "5vh" }}></img>
                                    </div>
                                </div>
                                <div className='card-link d-flex justify-content-end'>
                                    <a href='/' style={{ textDecoration: "underline" }}>See more</a>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <CardBody>
                            <div className='card-contend'>
                                <div className='section-4-card-2 d-flex justify-content-between'>
                                    <div className='section-4-card-1-heading'>
                                        <h5 style={{ fontWeight: "600" }}>XX</h5>
                                        <p className='font-small-3 mt-1'> Offers Issued</p>
                                    </div>
                                    <div className='section-4-cad-1-img'>
                                        <img className='voucher' src={box} style={{ width: "5vh" }}></img>
                                    </div>
                                </div>
                                <div className='card-link d-flex justify-content-end'>
                                    <a href='/' style={{ textDecoration: "underline" }}>See more</a>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col sm={12} md={6} xl={4}>
                    {/* <CardBody> */}
                    <div className='section-1-heading'>
                        <h4 className='ms-1' style={{ marginTop: "1vh", marginBottom: "3.2vh" }}>Rewards Redeemed</h4>
                        {/* <p className='ms-1'style={{marginTop:"1vh", marginBottom:"3.2vh"}}>Rewards Issued</p> */}
                    </div>
                    {/* </CardBody> */}
                </Col>
            </Row>

            <Card>
                <Row >

                    <Col sm={6} md={6} xl={4}>
                        <CardBody style={{ display: "flex", justifyContent: "flex-start" }}>
                            <div className='section-2-card-bottom' style={{ marginTop: "5vh" }}>
                                <div className='section-2-card-1 d-flex'>
                                    <div className='section-2-card-img'>
                                        <img className='voucher' src={box} style={{ width: "5vh" }}></img>
                                        {/* <img className='user' src={rupee}></img> */}
                                    </div>
                                    <div className='section-2-card-info' style={{ marginLeft: "3vh" }}>
                                        <div className='section-2-card-heading fw-bolder'>
                                            <h5 style={{ fontWeight: "600" }}>XX</h5>
                                        </div>
                                        <div className='section-2-card-para '>
                                            <p className='font-small-3 '>Total Rewards Redeemed</p>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </CardBody>
                    </Col>

                    <Col sm={6} md={4} xl={3}>
                        <CardBody >
                            <div className='section-2-card-bottom' style={{ marginTop: "5vh" }}>
                                <div className='section-2-card-1 d-flex'>
                                    <div className='section-2-card-img'>
                                        <img className='voucher' src={box} style={{ width: "5vh" }}></img>
                                        {/* <img className='user' src={rupee}></img> */}
                                    </div>
                                    <div className='section-2-card-info' style={{ marginLeft: "3vh" }}>
                                        <div className='section-2-card-heading fw-bolder'>
                                            <h5 style={{ fontWeight: "600" }}>Rs.XX</h5>
                                        </div>
                                        <div className='section-2-card-para '>
                                            <p className='font-small-3 '>Total Rewards Value Redeemed</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </CardBody>
                    </Col>
                </Row>
            </Card>

            <Row>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <CardBody>
                            <div className='card-contend'>
                                <div className='section-4-card-2 d-flex justify-content-between'>
                                    <div className='section-4-card-1-heading'>
                                        <h5 style={{ fontWeight: "600" }}>Rs.XX</h5>
                                        <p className='font-small-3 mt-1'> Store Credit Redeemed</p>
                                    </div>
                                    <div className='section-4-cad-1-img'>
                                        <img className='voucher' src={box} style={{ width: "5vh" }}></img>
                                    </div>
                                </div>
                                <div className='card-link d-flex justify-content-end'>
                                    <a href='/' style={{ textDecoration: "underline" }}>See more</a>
                                </div>
                            </div>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <div className='card-contend'>
                                <div className='section-4-card-2 d-flex justify-content-between'>
                                    <div className='section-4-card-1-heading'>
                                        <h5 style={{ fontWeight: "600" }}>Rs.XX</h5>
                                        <p className='font-small-3 mt-1'> Samples Redeemed</p>
                                    </div>
                                    <div className='section-4-cad-1-img'>
                                        <img className='voucher' src={box} style={{ width: "5vh" }}></img>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <CardBody>
                            <div className='card-contend'>
                                <div className='section-4-card-2 d-flex justify-content-between'>
                                    <div className='section-4-card-1-heading'>
                                        <h5 style={{ fontWeight: "600" }}>XX</h5>
                                        <p className='font-small-3 mt-1'>Gift Cards Redeemed</p>
                                    </div>
                                    <div className='section-4-cad-1-img'>
                                        <img className='voucher' src={box} style={{ width: "5vh" }}></img>
                                    </div>
                                </div>
                                <div className='card-link d-flex justify-content-end'>
                                    <a href='/' style={{ textDecoration: "underline" }}>See more</a>
                                </div>
                            </div>
                        </CardBody>
                    </Card>

                </Col>

                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <CardBody>
                            <div className='card-contend'>
                                <div className='section-4-card-2 d-flex justify-content-between'>
                                    <div className='section-4-card-1-heading'>
                                        <h5 style={{ fontWeight: "600" }}>Rs.XX</h5>
                                        <p className='font-small-3 mt-1'> Offers Redeemed</p>
                                    </div>
                                    <div className='section-4-cad-1-img'>
                                        <img className='voucher' src={box} style={{ width: "5vh" }}></img>
                                    </div>
                                </div>
                                <div className='card-link d-flex justify-content-end'>
                                    <a href='/' style={{ textDecoration: "underline" }}>See more</a>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default Referrals