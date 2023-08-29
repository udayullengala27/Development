import { useState } from 'react'
import { AiOutlineArrowUp } from "react-icons/ai"
import { BsDownload } from "react-icons/bs"
import { Card, CardBody, Col, Row } from 'reactstrap'
import AreaChart from './AreaChart'
import LineChart from './LineChart'
import "./OverallStats.css"

const OverallStats = () => {
    const campaignOptions = ["All Campaigns", "Campaign 1", "Campaign 2", "Campaign 3", "Campaign 4", "Campaign 5"]
    const [campaignOption, setCampaignOption] =  useState("All Campaigns")

    const [daysOption, setDaysOption] =  useState("Last 1month")
    const daysOptions = ["Last 30days", "Last 1month", "Last 2months", "Last 3months", "Last 6months", "Last 1year"]

    const summaryDetails = [
        {
            value: "$1,83",
            detail: "Cost per Lead"
        },
        {
            value: "$0,09",
            detail: "Cost per Impression"
        },
        {
            value: "$0,23",
            detail: "Cost per Click"
        },
        {
            value: "$48,34",
            detail: "Cost per Conversion"
        },
        {
            value: "$24,458",
            detail: "Money Spent"
        }
    ]
    const campaignDetails = [
        {
            title: "Impressions",
            percentage: "100%",
            value: "1,840,863"
        },
        {
            title: "Clicks",
            percentage: "87%",
            value: "102,232"
        },
        {
            title: "Sessions",
            percentage: "36%",
            value: "10,829"
        },
        {
            title: "Engagement",
            percentage: "16%",
            value: "560"
        },
        {
            title: "Conversion",
            percentage: "12%",
            value: "420"
        }
    ]

  return (
    <>
        <div className=' d-flex justify-content-between align-items-center flex-wrap mb-2 '>
            <h2>Overall Stats</h2>
            <div className=' d-flex justify-content-evenly align-items-center flex-wrap'>
                <div>
                    <button className="btn btn-outline-secondary fs-6 dropdown-toggle no-border-rate" type="button" data-bs-toggle="dropdown" aria-expanded="false">{ campaignOption }</button>
                    <ul className="dropdown-menu">
                        {
                            campaignOptions.map((ele, index) => {
                                return (
                                    <li key={ index } className=" dropdown-item cursor-pointer" onClick={ () => setCampaignOption(ele)}>{ ele }</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div>
                    <button className="btn btn-outline-secondary fs-6 dropdown-toggle no-border-rate" type="button" data-bs-toggle="dropdown" aria-expanded="false">{ daysOption }</button>
                    <ul className="dropdown-menu">
                        {
                            daysOptions.map((ele, index) => {
                                return (
                                    <li key={ index } className=" dropdown-item cursor-pointer" onClick={ () => setDaysOption(ele)}>{ ele }</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <button className="btn btn-outline-secondary text-primary fs-6 no-border-rate" type="button"> <BsDownload/> Export CSV</button>
            </div>
        </div>

        <div>
            <Row>
                <Col md='6'>
                    <Card>
                        <CardBody className=' p-1' style={{minHeight: "200px"}}>
                            <div className=' d-flex justify-content-around'>
                                <div className='' style={{width: "40%"}}>
                                    <div>
                                        <button className="btn btn-outline-secondary fs-6 mb-1 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{ campaignOption }</button>
                                        <ul className="dropdown-menu">
                                            {
                                                campaignOptions.map((ele, index) => {
                                                    return (
                                                        <li key={ index } className=" dropdown-item cursor-pointer" onClick={ () => setCampaignOption(ele)}>{ ele }</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <p className=' fs-6 mb-2 opacity-50'>Jan 2, 2023 - Jun 2, 2023</p>
                                    <div className=' d-flex'>
                                        <p className=' fs-3 fw-bold pe-1'>1,840,863</p>
                                        <p className=' text-success'>32%<AiOutlineArrowUp/></p>
                                    </div>
                                </div>
                                <LineChart />
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col md='6'>
                    <Card>
                        <CardBody style={{minHeight: "200px"}}>
                            <h5>Summary</h5>
                            <p className=' fs-6 mb-3 opacity-50'>Jan 2, 2023 - Jun 2, 2023</p>
                            <div className=' d-flex justify-content-between flex-wrap'>
                                {
                                    summaryDetails.map((ele) => {
                                        return (
                                            <div className='' style={{ width: "90px"}}>
                                                <h4 className='fw-bolder'>{ele.value}</h4>
                                                <p className='fw-bold mb-0'>{ele.detail}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>

        <h4>Campaign Funnel</h4>
        <p className=' fs-6 opacity-50'>Jan 2, 2023 - Jun 2, 2023</p>
        <Card>
            <CardBody>
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                    {
                        campaignDetails.map((ele) => {
                            return (
                                <div style={{ width: "150px", height: "100px"}}>
                                    <h6 className=' mb-1'>{ele.title} <span className=' opacity-50'>{ele.percentage}</span></h6>
                                    <h1 className=' fw-bolder'>{ele.value}</h1> 
                                </div>
                            )
                        })
                    }
                </div>
                <AreaChart />
            </CardBody>
        </Card>
    </>
  )
}

export default OverallStats