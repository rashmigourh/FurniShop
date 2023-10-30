import React from 'react'
import './popular_product.css'
import { useEffect } from 'react'
import IMG1 from '../../assets/popu1.png'
import IMG2 from '../../assets/popu2.png'
import IMG3 from '../../assets/popu3.png'
import IMG4 from '../../assets/popu4.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Table And Chair Set 50% OFF",
    para: "Table And Chair Collection",
    tech: "From ₹1000 to ₹5000",
    color: "blue"
  },
  {
    id: 2,
    image: IMG2,
    title: "Comfortable Sofa Chair 60% OFF",
    para: "Sofa Chair Collections",
    tech: "From ₹1000 to ₹5000",
    color: "pink"
  },
  {
    id: 3,
    image: IMG3,
    title: "Drawer And Desk Collection 70% OFF",
    para: "Drawer And Desk Collection",
    tech: "From ₹1000 to ₹5000",
    color: "orange"
  },
  {
    id: 4,
    image: IMG4,
    title: " Dressing Table Set Collection 40% OFF",
    para: "Dressing Table Collection",
    tech: "From ₹1000 to ₹5000",
    color: "purple"
  }
]

const Popular = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 100,
      easing:'ease-in',
      once:false
    });
  }, []);

  return (
      <div className='container m-top' id='popular'>
        <div className="head">
            <h2 data-aos="fade-up">Popular Collection</h2>
        </div>
        
        <div className="popular_container">
          {
          data.map(({ id, image, title, para,tech,color}) => {
            return (
              <article key = { id } className = "project_item" data-aos="fade-up" style={{background:`var(--color-${color})`}}>
              <>
                <div className="content" >
                    <h3>{title}</h3>
                    <h1>{para}</h1>
                    <h3 style={{color:"var(--color-lightBlue)"}}>{tech}</h3>
                  </div>
                  <div className="item-image" >
                  <img src={image} alt={title} />
                </div></>
            </article>
        )
        })
      }
    </div>
      </div >
  )
}

export default Popular
