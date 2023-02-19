import Image from 'next/image'
import React from 'react'
import MapImg from '../../public/assets/map.png'
import Square2Img from '../../public/assets/square2.png'



function Subscription() {
  return (
    <section className="subscription section">
        <Image src={MapImg} alt='' style={{height: "100%", width: 'auto'  }} className='map' />
        <div className="container">

            <div className="sub-box">
                <Image src={Square2Img} width={75} alt='' className='shape square' />

                <div className="sub-info">
                    <h3 className="sub-heading">
                        Newsletter
                    </h3>
                    <h1 className="heading">Get News About My Projects</h1>
                    <p className="text">Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit.
                     Obcaecati porro error explicabo asperiores praesentium maiores!</p>
                </div>
                <form action="index.html">
                    <input type="email" placeholder='Email'  className="form-input" required />
                    <input type="submit" value="Subscribe" className="btn" />
                </form>
            </div>
        </div>
    </section>
  )
}

export default Subscription
