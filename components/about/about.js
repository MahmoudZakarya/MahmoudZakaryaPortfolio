/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import ResearchIcon from '../../public/assets/research.svg'
import PrototypeIcon from '../../public/assets/prototype.svg'
import TestingIcon from '../../public/assets/testing.svg'
import DesignIcon from '../../public/assets/design.svg'
import TriangleImg from '../../public/assets/triangle.png'

function About() {
  return (
    <section className="about section" id='about'>
      <Image src={TriangleImg} className='shape triangle' alt='' width={95}/>  
        <div className="container">
            <div className="about-grid">
                <div className="about-card">
                  <ResearchIcon />
                  
                  <h3>User Research</h3>
                </div>

                <div className="about-card">
                  <DesignIcon />
                  
                  <h3>Visual Design</h3>
                </div>

                <div className="about-card">
                  <TestingIcon />
                  
                  <h3>User Testing</h3>
                </div>
                <div className="about-card">
                  <PrototypeIcon />
                  
                  <h3>Prototyping</h3>
                </div>

            </div>
            <div className="about-info">
              <h3 className="sub-heading">About Me</h3>
              <h1 className="heading">Better design, <br /> Better experiences</h1>
              <p className="text">With my deep knowledge of the latest front-end frameworks and best practices,
                 I can rebuild your site from the ground up to be not just functional, but beautifully designed. 
                 I'll work closely with you to understand your brand, your users' needs, and your business goals
                 - then use that insight to create a polished,
                  intuitive user experience that sets you apart from your competitors.</p>
             <div className="cta">
                <a href="https://wa.link/8b64nx" target="_" className="btn">Contact Me</a>
                <a href='assets/mahmoudCV.pdf' download target="_blank" className="btn secondary-btn" rel="noreferrer">Download CV</a>
             </div>
        </div>
        </div>
    </section>
  ) 
}

export default About
