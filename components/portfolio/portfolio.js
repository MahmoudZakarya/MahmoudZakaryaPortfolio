import React from 'react'
import Umf1Img from '../../public/assets/umf1.png'
import Image from 'next/image'



function Portfolio() {
  return (
    <section className="portfolio section">
        <div className="container">
            <div className="portfolio-header">
                <div className="portfolio-title">
                    <h3 className="sub-heading">Portfolio</h3>
                    <h1 className="heading">Latest Projects</h1>
                </div>
                <div className="filter-btns">
                    <button className="filter-btn">All</button>
                    <button className="filter-btn">Product</button>
                    <button className="filter-btn">Interacting</button>
                    <button className="filter-btn">Web App</button>
                </div>

            </div>
            <div className="portfolio-gallery">
                <div className="prt-card">
                    <div className="prt-image">
                        <Image src={Umf1Img} alt='' />
                    </div>
                    <div className="prt-desc">
                        <h3>Olido Interaction</h3>
                        <a href="#" className="btn secondary-btn sm">Read More</a>
                    </div>
                </div>
                <div className="prt-card">
                    <div className="prt-image">
                        <Image src={Umf1Img} alt='' />
                    </div>
                    <div className="prt-desc">
                        <h3>Olido Interaction</h3>
                        <a href="#" className="btn secondary-btn sm">Read More</a>
                    </div>
                </div>
                <div className="prt-card">
                    <div className="prt-image">
                        <Image src={Umf1Img} alt='' />
                    </div>
                    <div className="prt-desc">
                        <h3>Olido Interaction</h3>
                        <a href="#" className="btn secondary-btn sm">Read More</a>
                    </div>
                </div>
                <div className="prt-card">
                    <div className="prt-image">
                        <Image src={Umf1Img} alt='' />
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
