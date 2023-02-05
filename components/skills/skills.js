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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos sequi numquam
                             autem quam incidunt ex minima officiis?
                             Beatae repudiandae, esse voluptates nam qui incidunt nostrum inventore sunt assumenda enim dolor sint debitis
                             voluptatem perferendis tempora ex expedita magnam odit ut cum temporibus? Quis, illum.
                        </p>
                        <a href="#" className="btn">Hire Me</a>
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
                            <span data-target="54">0</span>%
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
