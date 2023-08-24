`    import { useState } from 'react'
    import { Col, Row, Card, CardBody, InputGroup, ButtonDropdown, Button, DropdownToggle, DropdownMenu, DropdownItem, Input } from 'reactstrap'
    import {AiFillStar} from "react-icons/ai"
    import BarChart from './BarChart'
    import "./Analytics.css"

    const Analytics = () => {
        const [dropdownOpen, setDropdownOpen] = useState(false)
        const [selectedOption, setSelectedOption] = useState('option1')
        const options = ['5 star', '4 star', '3 star', '2 star', '1 star']

        const toggleDropdown = () => {
            setDropdownOpen(!dropdownOpen)
        }

        const handleOptionChange = (event) => {
            setSelectedOption(event.target.value)
        }

    return (
        <>
            <Card>
                <CardBody>
                    <h4>Analytics</h4>
                </CardBody>
            </Card>
            <Row>
                <Col md="6">
                    <Card>
                        <CardBody>
                            <div className=' d-flex justify-content-between align-items-center '>
                                <p className=' fw-bold '>Average</p>
                                <select
                                    id="optionSelect"
                                    value={selectedOption}
                                    onChange={handleOptionChange}
                                    className='no-border'
                                >
                                    {options.map((option) => (
                                        <option key={option} value={option} className=' m-3 ' >
                                            {option}
                                        </option>
                                    ))}
                                </select>
                        
                            </div>
                            <p className=' mb-2'><span className=' fw-bolder '>Q</span> Base on <span className=' fs-5 fw-bolder'>0</span> publish review</p>
                            <div>
                                <ul className=' list-unstyled'>
                                    <li className=' d-flex justify-content-evenly align-items-center mb-1'>
                                        <AiFillStar style={{color: "yellow", fontSize:"20px"}}/> 
                                        <span className=' fw-bold fs-5'>5</span> 
                                        <span className=' d-block w-75 rounded-pill' style={{ height: "5px", background: "rgb(219, 219, 219)"}}></span> 
                                        0%
                                    </li>
                                    <li className=' d-flex justify-content-evenly align-items-center mb-1'>
                                        <AiFillStar style={{color: "yellow", fontSize:"20px"}}/> 
                                        <span className=' fw-bold fs-5'>4</span> 
                                        <span className=' d-block w-75 rounded-pill' style={{ height: "5px", background: "rgb(219, 219, 219)"}}></span> 
                                        0%
                                    </li>
                                    <li className=' d-flex justify-content-evenly align-items-center mb-1'>
                                        <AiFillStar style={{color: "yellow", fontSize:"20px"}}/> 
                                        <span className=' fw-bold fs-5'>3</span> 
                                        <span className=' d-block w-75 rounded-pill' style={{ height: "5px", background: "rgb(219, 219, 219)"}}></span> 
                                        0%
                                    </li>
                                    <li className=' d-flex justify-content-evenly align-items-center mb-1'>
                                        <AiFillStar style={{color: "yellow", fontSize:"20px"}}/> 
                                        <span className=' fw-bold fs-5'>2</span> 
                                        <span className=' d-block w-75 rounded-pill' style={{ height: "5px", background: "rgb(219, 219, 219)"}}></span> 
                                        0%
                                    </li>
                                    <li className=' d-flex justify-content-evenly align-items-center mb-1'>
                                        <AiFillStar style={{color: "yellow", fontSize:"20px"}}/> 
                                        <span className=' fw-bold fs-5'>1</span> 
                                        <span className=' d-block w-75 rounded-pill' style={{ height: "5px", background: "rgb(219, 219, 219)"}}></span> 
                                        0%
                                    </li>
                                    
                                </ul>
                            </div>
                        </CardBody>
                    </Card>
                </Col>

                <Col md="6">
                    <Card>
                        <CardBody>
                            <div className=' d-flex justify-content-between align-items-center '>
                                <p className=' fw-bold '>Top Countries</p>
                                <p>All time</p>
                            </div>
                            <div className=' d-flex justify-content-evenly align-items-center '>
                                <div className='topCountryOuterDiv rounded-circle'>
                                    <div className='topCountryInnerDiv  rounded-circle'></div>
                                </div>
                                <div className=' d-flex justify-content-between align-items-center '>
                                    <div className=' mx-1' style={{ width: "15px", height: "15px", backgroundColor: "rgba(90, 200, 140, 255)"}}></div>
                                    <h6>
                                        EMPTY
                                    </h6>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Card>
                <CardBody>
                    <div className=' d-flex justify-content-between align-items-center pb-2  border-bottom'>
                        <h4>Analytics</h4>
                        <>
                            <ButtonDropdown
                                isOpen={dropdownOpen}
                                toggle = { toggleDropdown }
                            >
                                <Button outline>
                                    All time
                                </Button>
                                <DropdownToggle
                                    outline
                                    split
                                    onClick={toggleDropdown} 
                                />
                                <DropdownMenu direction="down">
                                    <DropdownItem header>
                                        Header
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem disabled>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    
                                    <DropdownItem>
                                        Option 3
                                    </DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </>
                    </div>

                    <h5 className=' fw-bolder  text-capitalize my-2 '>All reviews Growth</h5>

                    <div>
                        
                        <BarChart />
                    </div>

                    <h6 className=' mb-1'><span className=' fw-bolder'>Request Email Analysis -</span> Sent, Open Clicked</h6>
                    <h6 className=' mb-1'><span className=' fw-bolder'>Best Rated Products</span></h6>
                    <h6 className=' mb-1'><span className=' fw-bolder'>1mo 3days</span></h6>
                    <h6 className=' mb-1'><span className=' fw-bolder'>Avg. Duration from Product Purchase to Review Posted</span></h6>
                </CardBody>
            </Card>
            
            
        </>
    )
    }

    export default Analytics`