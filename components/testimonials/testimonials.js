import React, { useEffect } from 'react'
import Image from 'next/image'
import Mahmoud from '../../public/assets/person1.png'
import Circle2 from '../../public/assets/circle2.png'
import Square1 from '../../public/assets/square1.png'
import Client1 from '../../public/assets/testi1.jpg'
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
                            <h4>Emily Rose</h4>
                            <h5>Executive Officer <a href="#">@EmilyRose</a></h5>
                        </div>
                    </div>
                        <q className='text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Quidem sit sapiente dignissimos asperiores commodi dicta! 
                            Laboriosam minus laborum blanditiis, 
                            iste ex impedit, quae sequi qui facilis neque fuga quaerat adipisci!</q>
                </swiper-slide>
                <swiper-slide class="rvw">
                    <div className="client">
                        <Image src={Client1} width={80} alt=''/>
                        <div className="client-info">
                            <h4>Emily Rose</h4>
                            <h5>Executive Officer <a href="#">@EmilyRose</a></h5>
                        </div>
                    </div>
                        <q className='text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Quidem sit sapiente dignissimos asperiores commodi dicta! 
                            Laboriosam minus laborum blanditiis, 
                            iste ex impedit, quae sequi qui facilis neque fuga quaerat adipisci!</q>
                </swiper-slide>

                <swiper-slide class="rvw">
                    <div className="client">
                        <Image src={Client1} width={80} alt=''/>
                        <div className="client-info">
                            <h4>Emily Rose</h4>
                            <h5>Executive Officer <a href="#">@EmilyRose</a></h5>
                        </div>
                    </div>
                        <q className='text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Quidem sit sapiente dignissimos asperiores commodi dicta! 
                            Laboriosam minus laborum blanditiis, 
                            iste ex impedit, quae sequi qui facilis neque fuga quaerat adipisci!</q>
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
