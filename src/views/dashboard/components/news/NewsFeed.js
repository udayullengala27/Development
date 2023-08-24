import React, {useState} from 'react'
import { useNavigate } from "react-router-dom"
import "./news.css"

const NewsLetter = () => {
    const [newsFeed, setNewsFeed] = useState("report")
    const navigate = useNavigate()
    const routeChange = (path) => { 
        setNewsFeed(path)
        navigate(`/merchant/dashboard/${path}`)
    }
  return (
    <>
      <div className=' '>
        <ul className='mb-2 list-unstyled d-inline-flex'>
            <li className={newsFeed === "report" ? " feedToggle fs-6 fw-bold text-capitalize cursor-pointer" : "fs-6 fw-bold text-capitalize cursor-pointer"} onClick={() => setNewsFeed("report")}>Reports</li>
            <li className={newsFeed === "notification" ? " feedToggle mx-3 fs-6 fw-bold text-capitalize cursor-pointer" : "mx-3 fs-6 fw-bold text-capitalize cursor-pointer"} onClick={() => setNewsFeed("notification")}>Notification</li>
        </ul>
        {
            newsFeed === "report" ? (
                <div className=' mx-2 '>
                    <h5 className=' text-capitalize cursor-pointer' onClick={() => routeChange("report")}>reports</h5>
                </div>
            ) : (
                <div className=' mx-2 '>
                    <h5 className=' text-capitalize cursor-pointer' onClick={() => routeChange("notification")}>notification</h5>
                </div>
            )
        }
    </div>
    </>
  )
}

export default NewsLetter