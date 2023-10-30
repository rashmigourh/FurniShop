import React from 'react'
import "../footer/footer.css"
import {FaRegPaperPlane,FaGooglePlay,FaApple} from "react-icons/fa"
import {AiOutlineMail,AiOutlinePhone,AiFillTwitterCircle,AiOutlineInstagram} from "react-icons/ai"

function Footer() {
  return (
    <div>
       <div className="footer m-top" >
        <div className="newSetteler">
            <div className="new">
                <div className="icon"><FaRegPaperPlane/></div>
                <p>Sign Up for Newsletter</p>
                </div>
            <div className="new">
        <input type="text" placeholder='Search Furniture Here'/>
        <div className="button">
        <button>Subscribe</button>
      </div>
      </div>
        </div>
    <div className="box-container">
    <div class="box">
        <h3>Contact Us</h3>
        <p>FurniShop</p>
        <p>No. 1259 Freedom, New York, 11111</p>
        <p>United States</p>
        <p>+91 9013XXXXXX</p>
        <p>demo@gmail.com</p>
        <div className="icon">
          <AiOutlineMail/>
          <AiOutlinePhone/>
          <AiFillTwitterCircle/>
          <AiOutlineInstagram/>
        </div>
      </div>

      <div className="box">
        <h3>branch locations</h3>
        <a href="#">India</a>
        <a href="#">Dubai</a>
        <a href="#">USA</a>
        <a href="#">Japan</a>
      </div>

      <div className="box">
        <h3>policies</h3>
        <a href="#">privacy policy </a>
        <a href="#">cookie policy</a>
        <a href="#">advertising policy</a>
        <a href="#">terms of use</a>
      </div>

      <div className="box">
        <h3>Follow us</h3>
        <a href="#">facebook</a>
        <a href="#">instagram</a>
        <a href="#">twitter</a>
        <a href="#">linkedin</a>
      </div>
    </div>

    <div className="last_contact">
    <h1 className="credit flex">created by <span>FurniShop</span> all rights reserved</h1>

    <div className="download flex">
        <div className="card">
            <div className="icon"><FaGooglePlay/></div>
            <div className="content">
                <h4>Get it on play store</h4>
                <h1>Google Play</h1>
            </div>
        </div>
        <div className="card">
            <div className="icon"> <FaApple/></div>
            <div className="content">
                <h4>Get it on play store</h4>
                <h1>Google Play</h1>
            </div>
        </div>
    </div>
    </div>
  </div>
    </div>
  )
}

export default Footer
