/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react'
import Image from 'next/image'
import Mahmoud from '../../public/assets/person1.png'
import Circle2 from '../../public/assets/circle2.png'
import Square1 from '../../public/assets/square1.png'
import Client1 from '../../public/assets/client1.jpg'
import Client2 from '../../public/assets/client2.png'
import Client3 from '../../public/assets/client3.jpg'
import { register } from 'swiper/element/bundle';
import 'swiper/css';

function Testimonials() {
    useEffect(()=>{
        register()
    }, []);


  return (  
    <section className="testimonials section" >
        <div className="container">
            <div className="section-background">
                <Image src={Mahmoud} height={500} alt='That`s Me!' className='person'/>
                <Image src={Circle2} height={170} alt='' className='circle'/>
                <Image src={Square1} width={70} alt='' className='square'/>
            </div>
            <swiper-container pagination="true" clickable="true" autoplay='true' longSwipes="false"  slides-per-view="1" speed="400" loop="true" cssMode='true' class="reviews">
                <swiper-slide class="rvw">
                    <div className="client">
                        <Image src={Client1} width={80} alt=''/>
                        <div className="client-info">
                            <h4>Khalid Saad</h4>
                            <h5>Executive Officer <a href="#">@KhalidSaad223</a></h5>
                        </div>
                    </div>
                        <q className='text'>Mahmoud delivered an exceptional web presence that has driven remarkable results for our business. I highly recommend their front-end development services.</q>
                </swiper-slide>
                <swiper-slide class="rvw">
                    <div className="client">
                        <Image src={Client2} width={80} alt=''/>
                        <div className="client-info">
                            <h4>Mario Reda</h4>
                            <h5>CTO <a href="#">@Marioreda11</a></h5>
                        </div>
                    </div>
                        <q className='text'>Mahmoud's front-end development expertise has been invaluable. Their work has transformed our web presence, 
                            I highly recommend Mahmoud to any business seeking exceptional digital experiences</q>
                </swiper-slide>

                <swiper-slide class="rvw">
                    <div className="client">
                        <Image src={Client3} width={80} alt=''/>
                        <div className="client-info">
                            <h4>Abdalla Samy</h4>
                            <h5>CTO <a href="#">@AbdallaSamy12</a></h5>
                        </div>
                    </div>
                        <q className='text'>The intuitive user experiences they've delivered have directly contributed to a significant increase in user engagement and conversions. I recommend Mahmoud Zakaria without hesitation to any business looking to take their digital strategy to new heights.</q>
                </swiper-slide>
            </swiper-container>
            <div className="testimonials-title">
                <h3 className="sub-heading">Testimonials</h3>
                <h1 className="heading">Hear From My Happy Clients</h1>
            </div>
        </div>
    </section>
  )
}

export default Testimonials
