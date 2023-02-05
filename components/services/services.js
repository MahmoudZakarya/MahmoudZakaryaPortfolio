import React from 'react'

function Services() {
  return (
    <section className="services section">
        <div className="container">
            <div className="services-info">
                <h3 className="sub-heading">My Services</h3>
                <h1 className="heading">Things I May Do For My Clients</h1>
                <p className="text">Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Voluptatem quibusdam molestiae nostrum?
                 Totam vel maxime illum modi voluptate obcaecati,
                 enim, vitae placeat labore cupiditate dignissimos.</p>
                 <div className="milestones">
                    <div className="ml">
                        <h2 className="number"><span>11</span>+</h2>
                        <h5>Years</h5>
                    </div>

                    <div className="ml">
                        <h2 className="number"><span>50</span>+</h2>
                        <h5>Projects</h5>
                    </div>

                    <div className="ml">
                        <h2 className="number"><span>4</span>+</h2>
                        <h5>Clients</h5>
                    </div>

                    <div className="cta">
                        <a href="" className="btn">Hire Me</a>
                        <a href="/asstes/mahmoudCV.pdf" download className="btn secondary-btn">Download CV</a>
                    </div>
                 </div>
            </div>
            <div className="services-grid">

            </div>
        </div>
    </section>
  )
}

export default Services
