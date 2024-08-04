/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import TriangleImg from '../../public/assets/triangle.png'
import Square2Img from '../../public/assets/square2.png'



function Contact() {
  return (
    <section className="contact section" id='contact'>
      <Image src={TriangleImg} width={95} alt='' className='shape triangle' />
      <Image src={Square2Img} width={75} alt='' className='shape square' />
        <div className="container">
            <div className="contact-info">
                <h3 className="sub-heading">Contact Me</h3>
                <h1 className="heading">Let`s Work Together</h1>
                <p className="text">I'd welcome the opportunity to discuss how I can leverage my front-end development skills to create an exceptional user experience for your business. Please feel free to reach out whenever you're ready to explore working together.

.</p>
                 <a href="mailto:mahmoudzakaria1011@gmail.com" className="mail">mahmoudzakaria1011@gmail.com <i className="uil uil-arrow-right"></i></a>
            </div>
            <form action="index.html" className="contact-form">
                <h3>Send Me a Message</h3>
                <input type="text" className='form-input' placeholder='Your Name' required />
                <input type="email" className='form-input' placeholder='Your Email' required />
                <textarea placeholder='Project Details' className="form-input" required></textarea>
                <input type="submit"  value="send" className='btn'/>

            </form>
        </div>
    </section>
  )
}

export default Contact
