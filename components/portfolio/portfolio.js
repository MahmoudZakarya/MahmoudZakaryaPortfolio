import React, { useEffect, useRef, useState } from 'react'
import Umf1Img from '../../public/assets/umf1.png'
import Image from 'next/image'
import dynamic from 'next/dynamic';

 







function Portfolio() {
        

    const prtSection = useRef(null);
    const modalOverlay = useRef(null);
    const prev_btn = useRef(null);
    const next_btn = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    

    useEffect(()=>{

        async function loadmix(){
        const Mixitup = (await import("../../utilities/mixitup.min.js") ).default
        let mixer = Mixitup(".portfolio-gallery",
            { selectors: {
              target: ".prt-card",
            },
            animation: {
              duration: 500
            }
        } )
    
    }

    loadmix()
    }); 

 
        //  =   document.querySelectorAll(".images img")
      
    


      function changeImage(index){
        const images = document.querySelectorAll(".images img")
          images.forEach((img)=>{
              img.classList.remove("showImage")
              images[index].classList.add("showImage")
          })
      }
    useEffect(()=>{



        
        const zoomIcons = document.querySelectorAll(".zoom-icon");

        zoomIcons.forEach((icon, i) => {
            icon.addEventListener("click", ()=>{
                setCurrentIndex(i);
                changeImage(currentIndex)
            prtSection.current.classList.add("open");
            document.body.classList.add("stopScrolling");

        }
        )
    }
    );

        modalOverlay.current.addEventListener("click", ()=>{
            prtSection.current.classList.remove('open')
            document.body.classList.remove("stopScrolling");

        })
    })



    




  return (
    <section className="portfolio section" ref={prtSection}>
        <div className="modal">
            <div className="modal-overlay" ref={modalOverlay}></div>
                <div className="slider-wrap">
                    <div className="prev-btn navigation" ref={prev_btn} onClick={()=>{
            if(currentIndex === 0){
                setCurrentIndex(4)
                console.log(currentIndex)
            changeImage(currentIndex)
            }else{
                setCurrentIndex(currentIndex-1)
                console.log(currentIndex)
            changeImage(currentIndex)
            }
           
        }}>
                        <i className="uil uil-arrow-left"></i>
                    </div>
                    <div className="images">
                        <Image className='showImage' src={Umf1Img} alt=''/>
                        <Image src={Umf1Img} alt=''/>
                        <Image src={Umf1Img} alt=''/>
                        <Image src={Umf1Img} alt=''/>
                        <Image src={Umf1Img} alt=''/>
                    </div>
                    <div className="next-btn navigation" ref={next_btn} onClick={()=>{
            if(currentIndex === 4){
                setCurrentIndex(0)
                console.log(currentIndex)
            changeImage(currentIndex)
            }else{
                setCurrentIndex(currentIndex + 1)
                console.log(currentIndex)
            changeImage(currentIndex)
                    }}}>
                        <i className="uil uil-arrow-right"></i>
                    </div>
                </div>
            
        </div>
        <div className="container">
            <div className="portfolio-header">
                <div className="portfolio-title">
                    <h3 className="sub-heading">Portfolio</h3>
                    <h1 className="heading">Latest Projects</h1>
                </div>
                <div className="filter-btns">
                    <button type="button" className="filter-btn "   data-filter="all">All</button>
                    <button type="button" className="filter-btn mixitup-control" data-toggle=".product">Product</button>
                    <button type="button" className="filter-btn mixitup-control" data-toggle=".interacting">Interacting</button>
                    <button type="button" className="filter-btn mixitup-control" data-toggle=".web-app">Web App</button>
                </div>

            </div>
            <div className="portfolio-gallery" >  
                <div className="mix prt-card product" >
                    <div className="prt-image">
                        <Image src={Umf1Img} alt='' />
                        <div className="prt-overlay">
                            <span className="prt-icon zoom-icon" style={{"--i": 0+'s' }}>
                                <i className="uil uil-search-plus"></i>
                            </span> 

                            <a href="#" className="prt-icon" style={{"--i": 0.15+'s' }}>
                                 <i className="uil uil-link-h"></i>
                                  </a>

                         </div>
                    </div>
                    <div className="prt-desc">
                        <h3>Olido Interaction</h3>
                        <a href="#" className="btn secondary-btn sm">Read More</a>
                    </div>
                </div>
                <div className="mix prt-card interacting">
                    <div className="prt-image">
                        <Image src={Umf1Img} alt='' />
                        <div className="prt-overlay">
                            <span className="prt-icon zoom-icon" style={{"--i": 0+'s' }}>
                                <i className="uil uil-search-plus"></i>
                            </span> 

                            <a href="#" className="prt-icon" style={{"--i": 0.15+'s' }}>
                                 <i className="uil uil-link-h"></i>
                                  </a>
                            
                         </div>
                    </div>
                    <div className="prt-desc">
                        <h3>Olido Interaction</h3>
                        <a href="#" className="btn secondary-btn sm">Read More</a>
                    </div>
                </div>
                <div className="mix prt-card web-app">
                    <div className="prt-image">
                        <Image src={Umf1Img} alt='' />
                        <div className="prt-overlay">
                            <span className="prt-icon zoom-icon" style={{"--i": 0+'s' }}>
                                <i className="uil uil-search-plus"></i>
                            </span> 

                            <a href="#" className="prt-icon" style={{"--i": 0.15+'s' }}>
                                 <i className="uil uil-link-h"></i>
                                  </a>
                            
                         </div>
                    </div>
                    <div className="prt-desc">
                        <h3>Olido Interaction</h3>
                        <a href="#" className="btn secondary-btn sm">Read More</a>
                    </div>
                </div>
                <div className="mix prt-card web-app">
                    <div className="prt-image">
                        <Image src={Umf1Img} alt='' />
                        <div className="prt-overlay">
                            <span className="prt-icon zoom-icon" style={{"--i": 0+'s' }}>
                                <i className="uil uil-search-plus"></i>
                            </span> 

                            <a href="#" className="prt-icon" style={{"--i": 0.15+'s' }}>
                                 <i className="uil uil-link-h"></i>
                                  </a>
                            
                         </div>
                    </div>
                    <div className="prt-desc">
                        <h3>Olido Interaction</h3>
                        <a href="#" className="btn secondary-btn sm">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio
