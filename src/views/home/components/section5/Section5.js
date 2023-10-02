import React from 'react'
import { Carousel } from 'react-bootstrap'
import profileImg from "@src/assets/images/profile-image.png"
import "./section5.css"

const Section5 = () => {
    const companyDetails = [
        {
            name: "BADMAASH",
            personName: "Nikhil Jain",
            role: "Co-founder & CEO",
            desc: "A very good app in terms of collaborative marketing. Something new and unique and helps us spend lesser money than we are used to. The team is very good support wise and follow up wise. Harshitha from the team is in touch with us, and she's like fire, always behind us to plan something or the other. Overall a great platform! Cheers to this great work guys"
        },
        {
            name: "A Diabetic Chef",
            personName: "Harsh Kedia",
            role: "Founder",
            desc: "The famous proverb: 'Necessity is the mother of invention', aptly applies to Chef Harsh Kedia. Diagnosed with type 1.5 Diabetes as a teenager, Harsh was told he would have to give up chocolates. But that wasn't going to stop him!"
        },
        {
            name: "BeYours",
            personName: "Nilesh Karnani & Ashish Baheti",
            role: "Co-founder",
            desc: "XIRCLS is disrupting the marketing industry through collaborative marketing, while helping all brands to increase their reach & sales."
        }
    ]

    return (
        <div>
            <Carousel className=' pt-0'>
                {
                    companyDetails.map((ele, index) => (
                        <Carousel.Item key={index}>
                            <div className=' position-relative ' style={{ padding: "180px 0" }}>
                                <div className=' py-3 section5Content' style={{ background: "#F6CB4554.33%", height: "400px" }}>
                                    <p className=' fw-bold text-black'>THE TESTIMONIAL</p>
                                    <h3 className=' fw-bolder mb-2 text-black testimonialDesc' >
                                        {ele.desc}
                                    </h3>
                                    <div className=' d-flex align-items-center mb-2 gap-1' style={{ width: "250px" }}>
                                        <div className=' rounded-circle' style={{ width: "50px", height: "50px", backgroundColor: "#535353" }}></div>
                                        <h4 className=' fw-bolder text-black'>{ele.name}</h4>
                                    </div>
                                    <p className='text-black'><span className="fw-bolder">{ele.personName},</span> {ele.role}</p>
                                </div>
                                <div className="profileImg" >
                                    <img src={profileImg} alt="profile-image" />
                                </div>
                            </div>
                        </Carousel.Item>
                    ))
                }

            </Carousel>
        </div>
    )
}

export default Section5