import React from 'react'

function Contact() {
  return (
    <section className="contact section">
        <div className="container">
            <div className="contact-info">
                <h3 className="sub-heading">Contact Me</h3>
                <h1 className="heading">Let`s Work Together</h1>
                <p className="text">Lorem, ipsum dolor
                 sit amet consectetur adipisicing elit. 
                Explicabo provident, distinctio 
                amet sequi iste reiciendis
                 rem nesciunt perspiciatis sint corrupti.</p>
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
