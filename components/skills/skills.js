/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import DotsImg from '../../public/assets/dots.png'
import Square1Img from '../../public/assets/square1.png'

function Skills() {

    const fristSkill = useRef(null);
    const skCounters = useRef(null);
    let skillsPlayed = false;

    function hasReached(el){
        let topPosition = el?.current?.getBoundingClientRect()?.top; 
        if(globalThis.innerHeight >= topPosition + el.current.offsetHeight) return true ; 
        return false;
     
        
        
    }

    function updateCounter(num, maxNum){
        let currentNum = +num.innerText;
        if(currentNum < maxNum){
            num.innerText = currentNum + 1;
            setTimeout(()=>{
                updateCounter(num , maxNum);
            }, 12)
        }
    }

    function skillsCounter(){
       if(fristSkill.current){
       const progressBars = document.querySelectorAll(".skill svg circle");
       const skCounters = document.querySelectorAll(".counter span");

        if(!hasReached(fristSkill)) return;

        skillsPlayed = true; 
        skCounters.forEach((counter, i )=>{
            let target = +counter.dataset.target;
            let strokeValue = 427 - 427 * (target/100); 
            progressBars[i].style.setProperty("--target", strokeValue);
            setTimeout(()=>{
                updateCounter(counter,  target);
            }, 400)
            })

        progressBars.forEach(p => {
            p.style.animation = 'progress 2s ease-in-out forwards'
        });
    }

    }

    useEffect(()=>{
        globalThis.addEventListener('scroll', ()=>{
            if(!skillsPlayed){skillsCounter();}
        }, )
    })

  return (
    <section className="skills section">
        <div className="container">
            <div className="skills-box">
                <div className="box-heading">
                    <h3 className="sub-heading">My Skills</h3>
                    <h1 className="heading">Let Me Help You</h1>
                    <div className="box-desc">
                        <p className="text">
                            As an experienced front-end developer focused on TypeScript and React.js, 
                            I believe I can provide a significantly better design solution for your project compared to what you currently have.

                            While your existing website may function adequately, I can tell it's lacking the level of visual appeal, 
                            interactivity, and user-friendliness that modern web users have come to expect
                            My expertise in crafting responsive, dynamic interfaces would 
                            allow me to transform your online presence into something truly compelling and engaging for your audience.
                        </p>
                        <a href="mailto:mahmoudzakaria1011@gmail.com" className="btn">Hire Me</a>
                    </div>
                </div>
                <div className="skills-wrap">
                    <div className="skill" ref={fristSkill}>
                    <div className="sk-progress">
                        <svg>
                            <circle cx='75' cy='75' r="68"/>
                        </svg>
                        <h2 className="counter">
                            <span data-target="89">0</span>%
                        </h2>
                    </div>
                    <div className="sk-title">HTML</div>
                    </div>

                    <div className="skill">
                    <div className="sk-progress">
                        <svg>
                            <circle cx='75' cy='75' r="68"/>
                        </svg>
                        <h2 className="counter">
                            <span data-target="86">0</span>%
                        </h2>
                    </div>
                    <div className="sk-title">CSS</div>
                    </div>

                    <div className="skill">
                    <div className="sk-progress">
                        <svg>
                            <circle cx='75' cy='75' r="68"/>
                        </svg>
                        <h2 className="counter">
                            <span data-target="82">0</span>%
                        </h2>
                    </div>
                    <div className="sk-title">JavaScript</div>
                    </div>

                    <div className="skill">
                    <div className="sk-progress">
                        <svg>
                            <circle  cx='75' cy='75' r="68"/>
                        </svg>
                        <h2 className="counter">
                            <span data-target="76">0</span>%
                        </h2>
                    </div>
                    <div className="sk-title">UI Design</div>
                    </div>
                </div>
                <Image src={DotsImg} alt='' className='shape dots' width={112} />
                <Image src={Square1Img} alt='' className='shape square' width={70} />
            </div>
        </div>
    </section>
  )
}

export default Skills
