import React from 'react'
import { Link } from 'react-router-dom'
import InfiniteScroll from './InfiniteScroll.jsx'
import SpecialOfferCards from './SpecialOfferCards.jsx'
import image1 from "../assets/code1.jpg"
import image2 from "../assets/code2.jpg"
import image3 from "../assets/code3.jpg"
const SpecialOffers = () => {
  return (
    <div className='special-offers'>
      <h1>Get a chance to work with:</h1>
      <InfiniteScroll />
      <h1>Most Popular Courses</h1>
      <div className="special-offer">
        <Link to="/courses/dsa" target='_blank'> <SpecialOfferCards img={image1} title="DSA" price="4999" duration="5" /></Link>
        <Link to="/courses/dev" target='_blank'> <SpecialOfferCards img={image2} title="Development" price="3999" duration="5" /></Link>
        <Link to="/courses/dsaAndDev" target='_blank'> <SpecialOfferCards img={image3} title="DSA + Dev" price="7999" duration="9" /></Link>
      </div>
    </div>
  )
}

export default SpecialOffers