import React, {useState} from 'react'
import "../navbar/navbar.css"
import {FaBars} from "react-icons/fa"
// import {BsFillCartCheckFill} from "react-icons/bs"
import {BiSolidUser} from "react-icons/bi"
import Search from './Search'
import {BsSuitHeart, BsFillCartCheckFill} from "react-icons/bs"
import Dropdown from './Dropdown'

function Navbar() {
  const [menuBar, setMenuBar]=useState(false); 
  
  return (
    <div id='nav'>
      {/* top_container */}
      <div className="top_head">
        <p>Free Shipping Over &#8377;100 & Free Returns</p>
        <p>Hotline:+91 9056XXXXXX</p>
      </div>

      {/* middle_container */}
      <div className="mid_head flex-wrap">
      <div className="logo">
                  <h2><span>F</span>urni<span>S</span>hop</h2>
      </div>
      <div className="searchBar flex-wrap">
      <Search />
      </div>

      <div className="icons_container flex-wrap">
        <div className="icon">
          <div className="logo">
            <BsSuitHeart />
          </div>
          <div className="content">
          <p>Favourite</p>
          <p> Wishlist</p>
          </div>
        </div>
        <div className="icon">
          <div className="logo">
          <BiSolidUser />
          </div>
          <div className="content">
          <p>Log In</p>
          <p> My Account</p>
          </div>
        </div>
        <div className="icon">
          <div className="logo">
            <BsFillCartCheckFill />
          </div>
          <div className="content">
          <p>0</p>
          <p>&#8377;0</p>
          </div>
        </div>
      </div>
      </div>

      {/* bottom_container */}
      <div className="navbar">
        <div className="dropdown_container">
          <Dropdown className="dropdown"/>
        </div>
      <div className={ menuBar ? "nav_links active" : "nav_links"}>
        <a href='#home'>Home</a>
        <a href='#product'>Product</a>
        <a href='#special'>Special Offer</a>
        <a href='#popular'>Popular Products</a>
        <a href='services'>Services</a>
        <a>Reviews</a>
        <a href='#contact'>Contact Us</a>
        </div>
        <div id="menu_bar" onClick={() => setMenuBar(!menuBar)}>
         <FaBars />
          </div>
      </div>

    </div>
  )
}

export default Navbar
