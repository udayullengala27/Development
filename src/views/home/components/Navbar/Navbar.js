import { useEffect, useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io"
import logo from "@src/assets/images/logo.png"
import XIRCLSLogo from "@src/assets/images/logo/XIRCLS_LOGO.png"
import CollaborativeMarketingLogo from "@src/assets/images/logo/collaborative_marketing_logo.png"
import VisionMissionLogo from "@src/assets/images/logo/mission_statement_logo.png"
import InfinitiLogo from "@src/assets/images/logo/Infiniti-logo.jpg"
import SemperFiLogo from "@src/assets/images/logo/SemperFi-logo.jpg"
import SniperLogo from "@src/assets/images/logo/Sniper-logo.jpg"
import "./navbar.css"

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true)
  const [openMenu, setOpenMenu] = useState('')
  const [toggleSubMenu, setToggleSubMenu] = useState({ aboutMenuToggle: false, productMenuToggle: false })


  const aboutList = [
    {
      title: "why XIRCLS?",
      desc: "To Decentralize Online Marketing Practices.",
      img: XIRCLSLogo
    },
    {
      title: "Why Collaborative Marketing?",
      desc: "Because Life is Collaboration, Not Competition.",
      img: CollaborativeMarketingLogo
    },
    {
      title: "Vision & Mission",
      desc: "To Empower Businesses, Globally",
      img: VisionMissionLogo
    }
  ]

  const productList = [
    {
      title: "Infinti",
      desc: "Customer Acquisition & Loyalty",
      img: InfinitiLogo
    },
    {
      title: "Semper fi",
      desc: "Customer Loyalty",
      img: SemperFiLogo
    },
    {
      title: "Sniper",
      desc: "Customer Acquisition",
      img: SniperLogo
    }
  ]

  const handleClick = (ele) => {
    setOpenMenu(ele)
    setToggleSubMenu({ aboutMenuToggle: false, productMenuToggle: false })
  }

  useEffect(() => {
    if (openMenu === "About") {
      setToggleSubMenu({ ...toggleSubMenu, aboutMenuToggle: !toggleSubMenu.aboutMenuToggle })
    } else if (openMenu === "Products") {
      setToggleSubMenu({ ...toggleSubMenu, productMenuToggle: !toggleSubMenu.productMenuToggle })
    }
  }, [openMenu])

  return (
    <>
      <nav className="homeNav py-1">
        <img src={logo} alt="logo image" style={{ width: "147px" }} className='mx-2' />
        <div className={`toggleMenu ${toggleMenu ? "toggleMenuUp" : "toggleMenuDown"}`}>
          <ul className=' list-unstyled d-inline-flex gap-5 pt-1'>
            <li style={{ color: "rgba(44, 104, 246, 1)" }}><p>Home</p></li>
            <li className='aboutLi'>
              <p onClick={() => handleClick("About")}>About Us<IoIosArrowDown /></p>
              <div className={`subMenu ${toggleSubMenu.aboutMenuToggle ? "aboutSubMenuDown" : "aboutSubMenuUp"} p-1 border border-1`}>
                <ul className=' list-unstyled'>
                  {
                    aboutList.map((ele, index) => (
                      <li key={index} className='mt-1 w-100'>
                        <div className=' d-flex flex-md-row flex-column align-items-center gap-1' style={{ marginBottom: "12px" }}>
                          <img src={ele.img} alt="XIRCLSLogo" width={70} />
                          <div className='d-flex flex-column justify-content-center w-100'>
                            <h4 className=' text-capitalize text-primary' style={{ marginBottom: "5px" }}>{ele.title}</h4>
                            <p className=' m-0'>{ele.desc}</p>
                          </div>
                        </div>
                        <p className=' text-md-end text-center'><a href="#">Learn More <IoIosArrowForward /></a></p>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </li>
            <li><p>Blogs</p></li>
            <li className='productLi'>
              <p onClick={() => handleClick("Products")}>Products <IoIosArrowDown /></p>
              <div className={`subMenu ${toggleSubMenu.productMenuToggle ? "productSubMenuDown" : "productSubMenuUp"} p-1 border border-1`}>
                <ul className=' list-unstyled'>
                  {
                    productList.map((ele, index) => (
                      <li key={index} i className='mt-1 '>
                        <div className=' d-flex flex-md-row flex-column align-items-center gap-1' style={{ marginBottom: "12px" }}>
                          <img src={ele.img} alt="XIRCLSLogo" width={70} />
                          <div className='d-flex flex-column justify-content-center w-100 '>
                            <h4 className=' text-capitalize text-primary ' style={{ marginBottom: "5px" }}>{ele.title}</h4>
                            <p className='m-0'>{ele.desc}</p>
                          </div>
                        </div>
                        <p className=' text-md-end text-center'><a href="#">Learn More <IoIosArrowForward /></a></p>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </li>
          </ul>
          <div className='navBtn gap-1'>
            <button type="button" className=' btn btn-primary '>Sign Up</button>
            <button type="button" className=' btn btn-outline-primary '>Login</button>
          </div>
        </div>
        <div className='menuBtn' onClick={() => setToggleMenu(!toggleMenu)}>
          <AiOutlineMenu size={25} />
        </div>
      </nav>
    </>
  )
}

export default Navbar