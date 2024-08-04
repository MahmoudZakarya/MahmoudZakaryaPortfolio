/* eslint-disable @next/next/no-img-element */
import React, { useDeferredValue, useEffect, useRef } from 'react'
import Image from 'next/image'
function ShowCaseArea() {

  
 const showcaseInfo = useRef(null);
 const showcaseImg = useRef(null);


  useEffect(()=>{

    async function animate(){
      if(showcaseInfo.current && showcaseImg.current){
        const sr = (await import("scrollreveal")).default
        sr().reveal(showcaseInfo.current, {delay: 600, duration:2500, distance:'60px' })
        sr().reveal(showcaseImg.current, {delay: 700, duration:2500, distance:'60px', origin:"top" })
      }
    }

    animate();
    


  }, []);

  return (
    <section className="showcase-area" id='home'>
        <img src="assets/square1.png" className='shape square' alt="" />
        <div className="container">
            <div className="showcase-info" ref={showcaseInfo}>
              <h3 className="sub-heading">Front End Developer</h3>
              <h1 className="heading">Mahmoud Mohammed Zakaria</h1>
              <p className="text">I am a freelance web developer, Let`s work together</p>
              <div className="cta">
                <a href="https://wa.link/8b64nx" target="_" className="btn">Contact Me</a>
                <a href='assets/mahmoudCV.pdf' download target="_blank" className="btn secondary-btn" rel="noreferrer">Download CV</a>
              </div>
            
            </div>
            <div className="showcase-image" ref={showcaseImg}>

              <img className='person' src='assets/person1.png' alt="Mahmoud Zakaria" />
              
                
            </div>
            <img className='shape circle' src='assets/circle1.png' alt="" />
              <img className='shape dots' src='assets/dots.png' alt="" />
        </div>
    </section>
  )
}

export default ShowCaseArea
