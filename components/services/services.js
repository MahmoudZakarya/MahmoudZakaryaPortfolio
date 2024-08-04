import React from 'react'
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import TriangleImg from '../../public/assets/triangle.png'
import Square1Img from '../../public/assets/square1.png'



function Services() {


    const mlSection = useRef(null);
    let mlPlayed = false;

    function updateCounter(num, maxNum){
        let currentNum = +num.innerText;
        if(currentNum < maxNum){
            num.innerText = currentNum + 1;
            setTimeout(()=>{
                updateCounter(num , maxNum);
            }, 12)
        }
    }
    function mlCounter(){

        const ml_counters = document.querySelectorAll(".number span"); 

        if(!hasReached(mlSection)) return ; 
        mlPlayed = true; 
        ml_counters.forEach(ctr=>{
            let target = + ctr.dataset.target; 

            setTimeout(()=>{
                updateCounter(ctr, target)
            }, 400)
        })

            
    }

    function hasReached(el){
        let topPosition = el?.current?.getBoundingClientRect()?.top; 
        if(globalThis.innerHeight >= topPosition + el.current.offsetHeight) return true ; 
        return false;
     
        
        
    }

    useEffect(()=>{
        if(mlSection.current){
            globalThis.addEventListener('scroll', ()=>{
             if(!mlPlayed) {  mlCounter()}
            })
        }
    })

  return (
    <section className="services section" id='services'>
        <Image src={TriangleImg} className='shape triangle' alt='' width={95}/>
        
        <div className="container">
            <div className="services-info">
                <h3 className="sub-heading">My Services</h3>
                <h1 className="heading">Things I May Do For My Clients</h1>
                <p className="text">Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Voluptatem quibusdam molestiae nostrum?
                 Totam vel maxime illum modi voluptate obcaecati,
                 enim, vitae placeat labore cupiditate dignissimos.</p>
                 <div className="milestones" ref={mlSection}>
                    <div className="ml">
                        <h2 className="number"><span data-target="3">0</span>+</h2>
                        <h5>Years</h5>
                    </div>

                    <div className="ml">
                        <h2 className="number"><span data-target="11">0</span>+</h2>
                        <h5>Projects</h5>
                    </div>

                    <div className="ml">
                        <h2 className="number"><span data-target="4">0</span>+</h2>
                        <h5>Clients</h5>
                    </div>

                    
                 </div>
                 <div className="cta">
                        <a href="" className="btn">Hire Me</a>
                        <a href="/asstes/mahmoudCV.pdf" download className="btn secondary-btn">Download CV</a>
                    </div>
            </div>
            <div className="services-grid">
                <div className="srv-card">
                    <div className="card-desc">
                        <h3>Brand Identity</h3>
                        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
                           est illum laboriosam eius facere reiciendis sapiente esse totam ex.
                           Praesentium.</p>
                    </div>
                    <a href="#" className="btn secondary-btn">Explore More</a>
                </div>

                <div className="srv-card">
                    <div className="card-desc">
                        <h3>Integration Design</h3>
                        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
                           est illum laboriosam eius facere reiciendis sapiente esse totam ex.
                           Praesentium.</p>
                    </div>
                    <a href="#" className="btn secondary-btn">Explore More</a>
                </div>

                <div className="srv-card">
                    <div className="card-desc">
                        <h3>App Design</h3>
                        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
                           est illum laboriosam eius facere reiciendis sapiente esse totam ex.
                           Praesentium.</p>
                    </div>
                    <a href="#" className="btn secondary-btn">Explore More</a>
                </div>

                <div className="srv-card">
                    <div className="card-desc">
                        <h3>Product Design</h3>
                        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
                           est illum laboriosam eius facere reiciendis sapiente esse totam ex.
                           Praesentium.</p>
                    </div>
                    <a href="#" className="btn secondary-btn">Explore More</a>
                </div>
                <Image src={Square1Img} className='shape square' alt='' width={75}/>
            </div>
        </div>
    </section>
  )
}

export default Services
