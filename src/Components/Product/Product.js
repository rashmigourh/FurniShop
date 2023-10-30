import React from 'react'
import './product.css'
import {AiFillStar,AiOutlineStar,AiOutlinePlusCircle} from "react-icons/ai"
import {IoHeartCircle} from "react-icons/io5"
import { useEffect } from 'react'

import IMG1 from '../../assets/special2.jpg'
import IMG2 from '../../assets/img2.avif'
import IMG3 from '../../assets/img19.jpg'
import IMG4 from '../../assets/img6.jpg'
import IMG5 from '../../assets/img10.jpg'
import IMG6 from '../../assets/img24.jpg'
import IMG7 from '../../assets/img7.avif'
import IMG8 from '../../assets/img8.avif'
import IMG9 from '../../assets/img3.avif'
import IMG10 from '../../assets/img5.avif'
import IMG11 from '../../assets/img22.avif'
import IMG12 from '../../assets/img4.avif'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Product = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 100,
      easing:'ease-in',
      once:false
    });
  }, []);

  return (
      <div className='container' id='product'>
        <div className="heading">
          <h1 data-aos="fade-up">Our Products</h1>
          <div className="section">
            <p data-aos="fade-up">Crafed with Best Quality</p>
        </div>
        </div>

        <div className="head">
            <h2 data-aos="fade-up">Featured Collection</h2>
        </div>

        <div className="product_container">
              <div className= "product_item" data-aos="fade-up">
              <div className="item-image">
                  <img src={IMG1} alt="sofa" />
                  <div className="like">
                    <IoHeartCircle/>
                  </div>
                </div>
                <div className="content">
                    <h1>Bed</h1>
                    <p>comfortable for you</p>
                    <div className="price">
                    <p>From  &#8377;5000</p>
                    <div className="add"><AiOutlinePlusCircle/></div>
                </div>
                    <div className="star">
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiOutlineStar/>
                    </div>
                  </div>
            </div>

            <div className= "product_item" data-aos="fade-up">
              <div className="item-image">
                  <img src={IMG2} alt="sofa" />
                  <div className="like">
                    <IoHeartCircle/>
                  </div>
                </div>
                <div className="content">
                    <h1>Sofa Cum Bed</h1>
                    <p>comfortable for you</p>
                    <div className="price">
                    <p>From  &#8377;5000</p>
                    <div className="add"><AiOutlinePlusCircle/></div>
                </div>
                    <div className="star">
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiOutlineStar/>
                    </div>
                  </div>
            </div>

            <div className= "product_item" data-aos="fade-up">
              <div className="item-image">
                  <img src={IMG3} alt="sofa" />
                  <div className="like">
                    <IoHeartCircle/>
                  </div>
                </div>
                <div className="content">
                    <h1>Master Bed</h1>
                    <p>comfortable for you</p>
                    <div className="price">
                    <p>From  &#8377;5000</p>
                    <div className="add"><AiOutlinePlusCircle/></div>
                </div>
                    <div className="star">
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiOutlineStar/>
                    </div>
                  </div>
            </div>

            <div className= "product_item" data-aos="fade-up">
              <div className="item-image">
                  <img src={IMG4} alt="sofa" />
                  <div className="like">
                    <IoHeartCircle/>
                  </div>
                </div>
                <div className="content">
                    <h1>Sofa Set</h1>
                    <p>comfortable for you</p>
                    <div className="price">
                    <p>From  &#8377;5000</p>
                    <div className="add"><AiOutlinePlusCircle/></div>
                </div>
                    <div className="star">
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiOutlineStar/>
                    </div>
                  </div>
            </div>

            <div className= "product_item" data-aos="fade-up">
              <div className="item-image">
                  <img src={IMG5} alt="sofa" />
                  <div className="like">
                    <IoHeartCircle/>
                  </div>
                </div>
                <div className="content">
                    <h1>Table And Chair</h1>
                    <p>comfortable for you</p>
                    <div className="price">
                    <p>From  &#8377;5000</p>
                    <div className="add"><AiOutlinePlusCircle/></div>
                </div>
                    <div className="star">
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiOutlineStar/>
                    </div>
                  </div>
            </div>

            <div className= "product_item" data-aos="fade-up">
              <div className="item-image">
                  <img src={IMG6} alt="sofa" />
                  <div className="like">
                    <IoHeartCircle/>
                  </div>
                </div>
                <div className="content">
                    <h1>White Royal Bed</h1>
                    <p>comfortable for you</p>
                    <div className="price">
                    <p>From  &#8377;5000</p>
                    <div className="add"><AiOutlinePlusCircle/></div>
                </div>
                    <div className="star">
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiOutlineStar/>
                    </div>
                  </div>
            </div>

            <div className= "product_item" data-aos="fade-up">
              <div className="item-image">
                  <img src={IMG7} alt="sofa" />
                  <div className="like">
                    <IoHeartCircle/>
                  </div>
                </div>
                <div className="content">
                    <h1>Soft Cusion Chair</h1>
                    <p>comfortable for you</p>
                    <div className="price">
                    <p>From  &#8377;5000</p>
                    <div className="add"><AiOutlinePlusCircle/></div>
                </div>
                    <div className="star">
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiOutlineStar/>
                    </div>
                  </div>
            </div>
            <div className= "product_item" data-aos="fade-up">
              <div className="item-image">
                  <img src={IMG8} alt="sofa" />
                  <div className="like">
                    <IoHeartCircle/>
                  </div>
                </div>
                <div className="content">
                    <h1>King Chair</h1>
                    <p>comfortable for you</p>
                    <div className="price">
                    <p>From  &#8377;5000</p>
                    <div className="add"><AiOutlinePlusCircle/></div>
                </div>
                    <div className="star">
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiOutlineStar/>
                    </div>
                  </div>
            </div>

            <div className= "product_item" data-aos="fade-up">
              <div className="item-image">
                  <img src={IMG9} alt="sofa" />
                  <div className="like">
                    <IoHeartCircle/>
                  </div>
                </div>
                <div className="content">
                    <h1>Sofa With Carpet</h1>
                    <p>comfortable for you</p>
                    <div className="price">
                    <p>From  &#8377;5000</p>
                    <div className="add"><AiOutlinePlusCircle/></div>
                </div>
                    <div className="star">
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiOutlineStar/>
                    </div>
                  </div>
            </div>

            <div className= "product_item" data-aos="fade-up">
              <div className="item-image">
                  <img src={IMG10} alt="sofa" />
                  <div className="like">
                    <IoHeartCircle/>
                  </div>
                </div>
                <div className="content">
                    <h1>Sofa With Cushion</h1>
                    <p>comfortable for you</p>
                    <div className="price">
                    <p>From  &#8377;5000</p>
                    <div className="add"><AiOutlinePlusCircle/></div>
                </div>
                    <div className="star">
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiOutlineStar/>
                    </div>
                  </div>
            </div>

            <div className= "product_item" data-aos="fade-up">
              <div className="item-image">
                  <img src={IMG11} alt="sofa" />
                  <div className="like">
                    <IoHeartCircle/>
                  </div>
                </div>
                <div className="content">
                    <h1>Designer Seater</h1>
                    <p>comfortable for you</p>
                    <div className="price">
                    <p>From  &#8377;5000</p>
                    <div className="add"><AiOutlinePlusCircle/></div>
                </div>
                    <div className="star">
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiOutlineStar/>
                    </div>
                  </div>
            </div>

            <div className= "product_item" data-aos="fade-up">
              <div className="item-image">
                  <img src={IMG12} alt="sofa" />
                  <div className="like">
                    <IoHeartCircle/>
                  </div>
                </div>
                <div className="content">
                    <h1>Chair</h1>
                    <p>comfortable for you</p>
                    <div className="price">
                    <p>From  &#8377;5000</p>
                    <div className="add"><AiOutlinePlusCircle/></div>
                </div>
                    <div className="star">
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiOutlineStar/>
                    </div>
                  </div>
            </div>
    </div>
      </div >
  )
}

export default Product

