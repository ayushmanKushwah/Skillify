import React from 'react'
import heroImage from "../assets/hero.jpg"
import {Link} from 'react-router-dom'
const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <p>Master New Skills for <br /> Tomorrow's Future</p>
        <p className='hero-desc'>Join millions of learners worldwide in accessing high-quality online courses from industry experts and leading institutions.</p>
        <div className='hero-bottons'>
          <Link to="/courses">
            <button className="boton-elegante">Explore Courses</button>
          </Link>

        </div>
      </div>
      <div className='hero-image-container'>
        <img className='hero-image' src={heroImage} />
      </div>
    </div>
  )
}

export default Hero
