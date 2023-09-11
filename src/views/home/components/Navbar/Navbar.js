import React from 'react'
import logo from "@src/assets/images/logo.png"

const Navbar = () => {
  return (
    <>
      <nav className="d-flex justify-content-around align-items-center py-1">
        <img src={logo} alt="logo image" style={{ width: "147px" }} />
        <ul className=' list-unstyled d-inline-flex gap-5 pt-1'>
          <li style={{ color: "rgba(44, 104, 246, 1)" }}>Home</li>
          <li>About Us</li>
          <li>Blogs</li>
          <li>Products</li>
        </ul>
        <div className=' d-flex align-items-center gap-1'>
          <button type="button" className=' btn btn-primary '>Sign Up</button>
          <button type="button" className=' btn btn-outline-primary '>Login</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar