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
              <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Voluptate tenetur nobis voluptatem repellendus beatae delectus cupiditate eius 
              esse rerum sunt amet deserunt sequi provident inventore quos explicabo iure minus 
              temporibus, sint eum dolorum fuga accusamus? Aut veniam mollitia voluptatem magnam!</p>
             <div className="cta">
                <a href="mailto:mahmoudzakaria1011@gmail.com" className="btn">Contact Me</a>
                <a href='assets/mahmoudCV.pdf' download target="_blank" className="btn secondary-btn" rel="noreferrer">Download CV</a>
             </div>
        </div>
        </div>
    </section>
  ) 
}

export default About
