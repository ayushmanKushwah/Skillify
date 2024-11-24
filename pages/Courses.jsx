import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import image1 from "../assets/code1.jpg"
import image2 from "../assets/code2.jpg"
import image3 from "../assets/code3.jpg"
import SpecialOfferCards from '../components/SpecialOfferCards'
const Courses = () => {
  return (
    <div>
      <Navbar />
      <div className='courses'>
        <div className='course-heading'>
          Unleash Your Potential, One Course at a Time
        </div>
        <div className=' course-cards'>
          <Link to="#"> <SpecialOfferCards img={image3} title="DSA + Dev" price="7999" duration="9" /></Link>
          <Link to="#"> <SpecialOfferCards img={image1} title="DSA" price="4999" duration="5" /></Link>
          <Link to="#"> <SpecialOfferCards img={image2} title="Development" price="3999" duration="5" /></Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Courses
