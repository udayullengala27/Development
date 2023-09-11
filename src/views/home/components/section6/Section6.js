import React from 'react'
import bewakoofLogo from "@src/assets/images/logo/bewakoof_logo.png"
import cornitosLogo from "@src/assets/images/logo/cornitos_logo.png"
import designersClassLogo from "@src/assets/images/logo/designers-class_logo.png"
import hammerLogo from "@src/assets/images/logo/hammer_logo.png"
import kapivaLogo from "@src/assets/images/logo/kapiva-logo.png"
import leafLogo from "@src/assets/images/logo/Leaf_logo.png"
import snitchBlackLogo from "@src/assets/images/logo/snitch-black_logo.png"
import skullcandyLogo from "@src/assets/images/logo/skullcandy_logo.png"

const Section6 = () => {
    return (
        <div style={{ padding: "100px 0" }}>
            <h1 className=' text-center fw-bolder mb-5'>Join A Global Network <br />Of Companies</h1>

            <div className=' d-flex flex-wrap justify-content-evenly align-items-center' style={{ margin: "100px 0" }}>
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
            </div>

            <div className=' d-flex justify-content-center'>
                <button className="btn btn-primary fs-5 py-1">Learn more about us</button>
            </div>
        </div >
    )
}

export default Section6