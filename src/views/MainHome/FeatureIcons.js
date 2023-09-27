import React from 'react'
import { HiSparkles } from 'react-icons/hi2'
import { BsThreeDots, BsWindowDock, BsFillChatSquareDotsFill } from 'react-icons/bs'
import { IoDocumentText } from 'react-icons/io5'
import { HiOutlinePresentationChartLine } from 'react-icons/hi'
import { MdVideoCameraFront } from "react-icons/md"
import { FaPrint, FaExpand } from 'react-icons/fa'
// import { Carousel } from 'react-bootstrap'

const FeatureIcons = () => {
    const data = [
        {
            icon: <HiSparkles size={20} color='#69015a' />,
            title: "For you"
        },
        {
            icon: <IoDocumentText size={20} color='#32c0d4' />,
            title: "Docs"
        },
        {
            icon: <FaExpand size={20} color='#20a662' />,
            title: "Whiteboards"
        },
        {
            icon: <HiOutlinePresentationChartLine size={20} color='#fe9804' />,
            title: "Presentation"
        },
        {
            icon: <BsFillChatSquareDotsFill size={20} color='#ff5053' />,
            title: "Social Media"
        },
        {
            icon: <MdVideoCameraFront size={20} color='#d170e5' />,
            title: "Videos"
        },
        {
            icon: <FaPrint size={20} color='#a345fc' />,
            title: "Print Products"
        },
        {
            icon: <BsWindowDock size={20} color='#595efd' />,
            title: "WebSites"
        },
        {
            icon: <BsThreeDots size={20} color='#8f5b88' />,
            title: "More"
        }

    ]
    return (
        <>
            {
                data.map((currElem) => {
                    return (
                        <>
                            <div className="d-flex flex-column align-items-center gap-1 px-2" style={{ flexWrap: "wrap" }}>
                                <div className=" rounded-circle d-flex w-auto " style={{ padding: "13px", backgroundColor: "white" }}>
                                    {currElem.icon}
                                </div>
                                <small className='m-0' style={{ color: "white" }}>{currElem.title}</small>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default FeatureIcons