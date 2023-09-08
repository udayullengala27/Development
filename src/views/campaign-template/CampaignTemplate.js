import { useState} from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import {AiOutlineMail, AiOutlineWhatsApp} from "react-icons/ai"
import {MdOutlineTextsms} from "react-icons/md"
import {RxCross2} from "react-icons/rx"
import "./CampaignTemplate.css"

const CampaignTemplate = () => {
  const [cardPop, setCardPop] = useState(true)

  const [selectedOptions, setSelectedOptions] = useState([])
  const campaignOptions = [
    { id: 'email', icon: <AiOutlineMail size={35} className=' text-primary'/>, text: 'Email' },
    { id: 'whatsapp', icon: <AiOutlineWhatsApp size={35} className=' text-primary'/>, text: 'WhatsApp' },
    { id: 'sms', icon: <MdOutlineTextsms size={35} className=' text-primary'/>, text: 'SMS' }
  ]
  const toggleOption = (optionId) => {
    if (selectedOptions.includes(optionId)) {
      setSelectedOptions(selectedOptions.filter((id) => id !== optionId))
    } else {
      setSelectedOptions([...selectedOptions, optionId])
    }
  }

  const templateOptions = ["Template 1", "Template 2", "Template 3", "Template 4", "Template 5"]
  const [templateOption, setTemplateOption] = useState("Template 1")

  // console.log(selectedOptions)

  return (
    <>
      <div className={` campaignPopCard w-50 ${cardPop ? "campaignPopDown" : "campaignPopUp"}`}>
        <Card>
          <CardBody>
            <div className=' d-flex justify-content-between align-items-center'>
              <h5>Create Campaign</h5>
              <RxCross2 onClick={() => setCardPop(false)} />
            </div>
            <hr/>
            <p className=' fw-bold'>What type of campaign would you like to send?</p>
            <Row className=' my-1'>
              {
                campaignOptions.map((option) => (
                <Col key={option.id} className='p-0 mx-1' >
                  <div
                    onClick={() => toggleOption(option.id)}
                    className={` py-1  border border-primary rounded d-flex flex-column justify-content-center align-items-center ${
                      selectedOptions.includes(option.id) ? 'bg-primary  bg-opacity-25' : ''
                    }`}
                    style={{ minHeight: '100px', cursor: 'pointer' }}
                  >
                    {option.icon}
                    <p className="my-1">{option.text}</p>
                  </div>
                </Col>
              ))}
              
            </Row>
            <div className=' d-flex justify-content-end gap-1'>
              <button className='btn btn-light border-black' type='button' onClick={() => setSelectedOptions([])}>Cancel</button>
              <button className='btn btn-dark' type='button'>Create Campaign</button>
            </div>
          </CardBody>
        </Card>
      </div>
        <Card>
            <CardBody>
                <h4>Campaign Templates</h4>
            </CardBody>
        </Card>

        <Card>
            <CardBody>
            <button
              className="btn btn-outline-secondary fs-6 dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {templateOption}
            </button>
            <ul className="dropdown-menu">
              {templateOptions.map((ele, index) => {
                return (
                  <li
                    key={index}
                    className=" dropdown-item cursor-pointer"
                    onClick={() => setTemplateOption(ele)}
                  >
                    {ele}
                  </li>
                ) 
              })}
            </ul>
              <br />
              <br />
            <button className='btn btn-primary'type='button' onClick={() => setCardPop(true)}>Create Campaign</button>
            </CardBody>
        </Card>
    </>
  )
}

export default CampaignTemplate