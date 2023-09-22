import { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import logo from "@src/assets/images/logo.png"
import "./navbar.css"

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true)
  return (
    <>
      <nav className="homeNav py-1">
        <img src={logo} alt="logo image" style={{ width: "147px" }} className='mx-2' />
        <div className={`toggleMenu ${toggleMenu ? "toggleMenuUp" : "toggleMenuDown"}`}>
          <ul className=' list-unstyled d-inline-flex gap-5 pt-1'>
            <li style={{ color: "rgba(44, 104, 246, 1)" }}>Home</li>
            <li>About Us</li>
            <li>Blogs</li>
            <li>Products</li>
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