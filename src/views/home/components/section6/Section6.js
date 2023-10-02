import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import './section6.css'

import bewakoofLogo from "@src/assets/images/logo/bewakoof_logo.png"
import cornitosLogo from "@src/assets/images/logo/cornitos_logo.png"
import designersClassLogo from "@src/assets/images/logo/designers-class_logo.png"
import hammerLogo from "@src/assets/images/logo/hammer_logo.png"
import kapivaLogo from "@src/assets/images/logo/kapiva-logo.png"
import leafLogo from "@src/assets/images/logo/Leaf_logo.png"
import snitchBlackLogo from "@src/assets/images/logo/snitch-black_logo.png"
import skullcandyLogo from "@src/assets/images/logo/skullcandy_logo.png"

const Section6 = () => {
    const [numOfPages, setNumOfPages] = useState(6)
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            setNumOfPages(6)
        } else if (window.innerWidth <= 576) {
            setNumOfPages(2)
        } else if (window.innerWidth <= 768) {
            setNumOfPages(4)
        }
    })
    return (
        <div style={{ padding: "100px 0" }}>
            <h1 className=' text-center fw-bolder mb-5'>Join A Global Network <br />Of Companies</h1>
            {/* <marquee behavior="scroll" direction="left" scrollamount="5">
                <div className="d-flex justify-content-evenly align-items-center">
                    <div ><img className='joinCompanyLogo' src={bewakoofLogo} /></div>
                    <div><img className='joinCompanyLogo' src={cornitosLogo} /></div>
                    <div><img className='joinCompanyLogo' src={designersClassLogo} /></div>
                    <div> <img className='joinCompanyLogo' src={hammerLogo} /></div>
                    <div><img className='joinCompanyLogo' src={kapivaLogo} /></div>
                    <div> <img className='joinCompanyLogo' src={leafLogo} /></div>
                    <div><img className='joinCompanyLogo' src={snitchBlackLogo} /></div>
                    <div><img className='joinCompanyLogo' src={skullcandyLogo} /></div>
                </div>
            </marquee> */}
            {/* <div className='marquee-container'>
                <div className="marquee-content">
                    <div className="d-flex justify-content-evenly align-items-center">
                        <div ><img className='joinCompanyLogo' src={bewakoofLogo} /></div>
                        <div><img className='joinCompanyLogo' src={cornitosLogo} /></div>
                        <div><img className='joinCompanyLogo' src={designersClassLogo} /></div>
                        <div> <img className='joinCompanyLogo' src={hammerLogo} /></div>
                        <div><img className='joinCompanyLogo' src={kapivaLogo} /></div>
                        <div> <img className='joinCompanyLogo' src={leafLogo} /></div>
                        <div><img className='joinCompanyLogo' src={snitchBlackLogo} /></div>
                        <div><img className='joinCompanyLogo' src={skullcandyLogo} /></div>
                    </div>
                </div>
            </div> */}
            <div className='SwipePad'>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={numOfPages}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false
                    }}
                    modules={[Autoplay]}
                >

                    <SwiperSlide ><img className='joinCompanyLogo' src={bewakoofLogo} /></SwiperSlide>
                    <SwiperSlide><img className='joinCompanyLogo' src={cornitosLogo} /></SwiperSlide>
                    <SwiperSlide><img className='joinCompanyLogo' src={designersClassLogo} /></SwiperSlide>
                    <SwiperSlide> <img className='joinCompanyLogo' src={hammerLogo} /></SwiperSlide>
                    <SwiperSlide><img className='joinCompanyLogo' src={kapivaLogo} /></SwiperSlide>
                    <SwiperSlide> <img className='joinCompanyLogo' src={leafLogo} /></SwiperSlide>
                    <SwiperSlide><img className='joinCompanyLogo' src={snitchBlackLogo} /></SwiperSlide>
                    <SwiperSlide><img className='joinCompanyLogo' src={skullcandyLogo} /></SwiperSlide>
                </Swiper>
            </div>

            {/* <div className=' d-flex flex-wrap justify-content-evenly align-items-center' style={{ margin: "100px 0" }}>
                <div>
                    <img src={bewakoofLogo} alt="" />
                </div>
                <div>
                    <img src={cornitosLogo} alt="" />
                </div>
                <div>
                    <img src={designersClassLogo} alt="" />
                </div>
                <div>
                    <img src={hammerLogo} alt="" />
                </div>
                <div>
                    <img src={kapivaLogo} alt="" />
                </div>
                <div>
                    <img src={leafLogo} alt="" />
                </div>
                <div>
                    <img src={snitchBlackLogo} alt="" />
                </div>
                <div>
                    <img src={skullcandyLogo} alt="" />
                </div>
            </div> */}

            <div className=' d-flex justify-content-center'>
                <button className="btn btn-primary fs-5 py-1">Learn more about us</button>
            </div>
        </div >
    )
}

export default Section6