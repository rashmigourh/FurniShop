import React, {useEffect} from 'react'
import "../brands/brands.css"
import IMG1 from "../../assets/brand1.jpg"
import IMG2 from "../../assets/brand2.png"
import IMG3 from "../../assets/brand3.png"
import IMG5 from "../../assets/brand5.jpg"
import IMG6 from "../../assets/brand6.png"

import AOS from 'aos';
import 'aos/dist/aos.css';

    const Brands= () => {
        useEffect(() => {
          AOS.init({
            duration: 2000,
            offset: 100,
            easing:'ease-in',
            once:false
          });
        }, []);
  return (
    <div className='container'>
      <div className="marquee" style={{marginTop:"10rem", width:"100%"}} data-aos="fade-up">
        <marquee direction="left" scrollAmount="10">
            <img src={IMG1} alt="" style={{margin:"0 1rem"}}/>
            <img src={IMG2} alt="" style={{margin:"0 1rem"}}/>
            <img src={IMG3} alt="" style={{margin:"0 1rem"}}/>
            <img src={IMG5} alt="" style={{margin:"0 1rem"}}/>
            <img src={IMG6} alt="" style={{margin:"0 1rem"}}/>
        </marquee>
      </div>
    </div>
  )
}
export default Brands
