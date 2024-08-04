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
                <p className="text">As your front-end development partner, I would bring my expertise in building dynamic, high-performing web applications using the latest technologies. From crafting clean, optimized code to identifying and resolving performance bottlenecks, I'm dedicated to delivering solutions that delight your users and exceed your business goals.</p>
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
                        <a href="mailto:mahmoudzakaria1011@gmail.com" className="btn">Hire Me</a>
                        <a href="/asstes/mahmoudCV.pdf" download className="btn secondary-btn">Download CV</a>
                    </div>
            </div>
            <div className="services-grid">
                <div className="srv-card">
                    <div className="card-desc">
                        <h3>Develop and Maintain Web Applications</h3>
                        <p className='text'>I specialize in building highly interactive web pages that captivate users. From seamless animations to real-time data visualizations, I leverage the latest front-end technologies to create dynamic, engaging user experiences.

</p>
                    </div>
                    <a href="#" className="btn secondary-btn">Explore More</a>
                </div>

                <div className="srv-card">
                    <div className="card-desc">
                        <h3>Integration Design</h3>
                        <p className='text'>As an integration design expert, I excel at creating cohesive, interactive web experiences. I seamlessly blend intuitive UI elements with robust backend integrations,
                             delivering polished solutions that delight users while meeting complex business requirements.
                           Praesentium.</p>
                    </div>
                    <a href="#" className="btn secondary-btn">Explore More</a>
                </div>

                <div className="srv-card">
                    <div className="card-desc">
                        <h3>Translating UI Designs</h3>
                        <p className='text'>I'm adept at transforming UI designs into elegant, functional web experiences. With a keen eye for detail and strong technical skills, I translate visuals into responsive, interactive interfaces that engage users and exceed expectations.</p>
                    </div>
                    <a href="#" className="btn secondary-btn">Explore More</a>
                </div>

                <div className="srv-card">
                    <div className="card-desc">
                        <h3>Debug and Optimize Performance</h3>
                        <p className='text'>I excel at debugging complex issues and implementing solutions that maximize speed and efficiency. I employ a range of techniques to identify bottlenecks, optimize assets, and fine-tune the user experience.
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
