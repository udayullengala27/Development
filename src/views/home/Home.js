import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
import Section3 from './components/section3/Section3'
import Section4 from './components/Section4/Section4'
import Section5 from './components/section5/Section5'
import Section6 from './components/section6/Section6'
import Section7 from './components/section7/Section7'
import Footer from './components/footer/Footer'

const Home = () => {
  return (
    <div style={{ background: "#fff" }}>
      <Navbar />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <hr align="center" style={{ width: "75%" }} />
      <Footer />
    </div>
  )
}

export default Home