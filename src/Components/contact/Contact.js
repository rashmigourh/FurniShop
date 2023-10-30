import React from 'react'
import '../contact/Contact.css'
import { useEffect } from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import IMG from "../../assets/contact_img.avif"


function Contact() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            offset: 100,
            easing: 'ease-in',
            once: false
        });
    }, []);

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_g104fv9', 'template_pp7h0x6', form.current, 'LYe0KG1w11KF7mqqc')
        e.target.reset()
    };
    return (
        <div className="container" id='#contact'>
             <div className="heading" style={{margin:"8rem"}}>
          <h1 data-aos="fade-up">Contact Us</h1>
          <div className="section">
            <p data-aos="fade-up">Ask your querries</p>
        </div>
        </div>

            <div className="contact_container">
                <div className="contact_image" data-aos="fade-up" >
                    <img src={IMG} alt="" />
                </div>

                <div className="form_container">
                    <form ref={form} onSubmit={sendEmail} data-aos="fade-up">
                        <input type="text" name='name' placeholder='Your Full Name...' required />
                        <input type="email" name='email' placeholder='Your Email...' required />
                        <textarea name="message" id="" rows="7" placeholder='Enter Your Message...' required></textarea>
                        <div className="exp_button">
                            <button type='submit'>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact