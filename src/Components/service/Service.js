// packages for counter:-
// npm i react-scroll-trigger
//npm i react-countup

import React, {useState,useEffect} from 'react'
import './service.css'
import {BsGift,BsTruck,BsMegaphone} from "react-icons/bs"
import {CiDiscount1,CiWallet} from "react-icons/ci"
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 100,
      easing:'ease-in',
      once:false
    });
  }, []);

  //counter
  const [counterStart,setCounterStart]=useState(false);

  return (
      <div className='container' id='services'>
        <div className="heading" style={{margin:"5rem"}}>
          <h1 data-aos="fade-up">Our Services</h1>
          <div className="section">
            <p data-aos="fade-up">Benefits we provide</p>
        </div>
        </div>

        <ScrollTrigger onEnter={()=>setCounterStart(true)} onExit={()=>setCounterStart(false)}>
        <div className="counter" data-aos="fade-up">
            <div className="counter_card">
                <h2>{counterStart && <CountUp start={0} end={7} duration={6} delay={0}/>}+</h2>
                <p>Year Experience</p>
            </div>
            <div className="counter_card">
                <h2>{counterStart && <CountUp start={0} end={15} duration={6} delay={0}/>}K+</h2>
                <p>People Trust</p>
            </div>
            <div className="counter_card">
                <h2>{counterStart && <CountUp start={0} end={20} duration={6} delay={0}/>}K+</h2>
                <p>Furniture sold</p>
            </div>
            <div className="counter_card">
                <h2>{counterStart && <CountUp start={0} end={200} duration={6} delay={0}/>}+</h2>
                <p>Variant Furniture</p>
            </div>
        </div>
        </ ScrollTrigger>

        <div className="service_container">
              <div className= "service_item" data-aos="fade-up">
              <div className="service_icon">
                <BsGift/>
                </div>
                <div className="content">
                    <h2>Free Shipping</h2>
                    <p>From all orders over &#8377;500 </p>
                  </div>
            </div>

            <div className= "service_item" data-aos="fade-up">
              <div className="service_icon">
              <BsTruck/>
                </div>
                <div className="content">
                    <h2>Daily Surprise Offers</h2>
                    <p>Save up to 25% off</p>
                  </div>
            </div>

            <div className= "service_item" data-aos="fade-up">
              <div className="service_icon">
              <BsMegaphone/>
                </div>
                <div className="content">
                    <h2>Suppor 24/7</h2>
                    <p>Shop with an expert</p>
                  </div>
            </div>

            <div className= "service_item" data-aos="fade-up">
              <div className="service_icon">
              <CiDiscount1/>
                </div>
                <div className="content">
                    <h2>Affordable Prices</h2>
                    <p>Get factory direct price</p>
                  </div>
            </div>

            <div className= "service_item" data-aos="fade-up">
              <div className="service_icon">
              <CiWallet/>
                </div>
                <div className="content">
                    <h2>Secure Payments</h2>
                    <p>100% protexted payments</p>
                  </div>
            </div>

            <div className= "service_item" data-aos="fade-up">
              <div className="service_icon">
              <CiWallet/>
                </div>
                <div className="content">
                    <h2>Sofa Set</h2>
                    <p>comfortable for you</p>
                  </div>
            </div>
           </div>
      </div >
  )
}

export default Service

