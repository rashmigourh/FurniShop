import React from 'react'
import './specialOffer.css'
import {AiFillStar,AiOutlineStar} from "react-icons/ai"
import { useEffect } from 'react'
import IMG1 from '../../assets/special1.jpg'
import IMG3 from '../../assets/special2.jpg'
import IMG4 from '../../assets/special3.avif'
import IMG2 from '../../assets/special4.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Almirah Collection 50% OFF",
    para: "Almirah Designer Collection",
    tech: "From ₹1000 to ₹5000",
    offer:"50% OFF",
  },
  {
    id: 2,
    image: IMG2,
    title: "Dinning Set Collection 70% OFF",
    para: "Kitchen Furniture Collection",
    tech: "From ₹1000 to ₹5000",
    offer:"70% OFF",
  },
  {
    id: 3,
    image: IMG3,
    title: "Bed and Home Furniture 20% OFF",
    para: "Bed and Home Furniture Collection",
    tech: "From ₹1000 to ₹5000",
    offer:"20% OFF",
  },
  {
    id: 4,
    image: IMG4,
    title: "Sofa Set Collection 50% OFF",
    para: "Sofa With Marble Table Collection",
    tech: "From ₹1000 to ₹5000",
    offer:"50% OFF",
  },
]

const SpecialOffer = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 100,
      easing:'ease-in',
      once:false
    });
  }, []);

  return (
      <div className='container m-top' id='special'>
        <div className="head">
            <h2 data-aos="fade-up">Special Offer</h2>
        </div>
        
        <div className="specialOffer_container">
          {
          data.map(({ id, image, title, para,tech,offer}) => {
            return (
              <article key = { id } className = "special_item" data-aos="fade-up">
              <>
              <div className="item-image" >
                  <img src={image} alt="image"/>
                </div>
                <div className="content" >
                    <h1>{para}</h1>
                    <h3>{tech}</h3>
                    <div className="star">
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiOutlineStar/>
                    </div>
                    <h3>{title}</h3>
                  </div></>
                  <span className="tag">{offer}</span>
            </article>
            
        )
        })
      }
    </div>
      </div >
  )
}

export default SpecialOffer
