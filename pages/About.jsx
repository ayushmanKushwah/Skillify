import React from 'react'
import Navbar from '../components/Navbar'
import mission from '../assets/mission.avif'
import Avatar from '../assets/Avatar.jpeg'
import Footer from '../components/Footer'
const About = () => {
  return (
    <div>
      <Navbar />
      <div className='about'>
        <div className='about-text-section'>
          <h1 className='about-text-section-heading'>
            About Skilify
          </h1>
          <p className='about-text-section-sun-part'>
            Empowering learners worldwide with quality education and practical skills for tomorrow's challenges.
          </p>
        </div>
        <div className='about-mission'>
          <div className='mission-img-container'>
            <img src={mission} id='mission-img' />
          </div>
          <div className='about-mission-text'>

            <h2 className='about-mission-heading'>
              Our Mission
            </h2>
            <p className='about-mission-desc'>
              At Skilify, we believe that quality education should be accessible to everyone. Our mission is to bridge the gap between traditional education and industry demands by providing practical, hands-on learning experiences.<br />
              We collaborate with industry experts and leading institutions to create comprehensive courses that prepare our students for real-world challenges and opportunities.
            </p>
          </div>
        </div>
        <div className='about-me'>
          <div className='about-me-text'>
            <div className='about-me-heading'>About me</div>
            <div className='about-me-desc'>Hi! I'm a student and an aspiring web developer, currently learning the MERN stack to build modern, dynamic web applications. My recent project, Skillify, is an educational technology website that showcases my front-end skills using React. I'm passionate about combining my technical knowledge with creative design to build user-friendly applications that make a real impact.</div>
          </div>
          <div className='about-me-image-container'>
            <img src={Avatar} className='about-me-image'/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
