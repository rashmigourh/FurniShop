import React from 'react'
import "../home/home.css"
import img1 from "../../assets/card1.png"
import img2 from "../../assets/card2.png"
import img3 from "../../assets/card3.png"
import img4 from "../../assets/card4.png"
import img from "../../assets/home_img.jpg"

function Home() {
  return (
    <div className="container">
        <div className='home_container'>
        <div className='image_cards'>
        <div className="card" style={{background:"var(--color-green)"}}>
            <div className="content">
                <h1>BEST SALE</h1>
                <p>Comfort</p>
                <p>Chair</p>
                <div className="price">
                    <p>From  &#8377;3000 to  &#8377;5000</p>
                </div>
            </div>
            <div className="image">
                <img src={img1} alt="" />
            </div>
        </div>

        <div className="card" style={{background:"var(--color-orange)"}}>
            <div className="content">
                <h1>NEW ARRIVAL</h1>
                <p>Wooden Drawer</p>
                <div className="price">
                    <p>From  &#8377;3000 to  &#8377;5000</p>
                </div>
            </div>
            <div className="image">
                <img src={img2} alt="" />
            </div>
        </div>

        <div className="card" style={{background:"var(--color-pink)"}}>
            <div className="content">
                <h1>15% OFF SALE</h1>
                <p>Sofa Set</p>
                <div className="price">
                    <p>From  &#8377;3000 to  &#8377;5000</p>
                </div>
            </div>
            <div className="image">
                <img src={img3} alt="" />
            </div>
        </div>

        <div className="card" style={{background:"var(--color-blue)"}}>
            <div className="content">
                <h1>WITH FREE OFFERS</h1>
                <p>Table And Chair</p>
                <div className="price">
                    <p>From  &#8377;3000 to  &#8377;5000</p>
                </div>
            </div>
            <div className="image">
                <img src={img4} alt="" />
            </div>
        </div>

        <div className="card" style={{background:"var(--color-green)"}}>
            <div className="content">
                <h1>BEST SALE</h1>
                <p>Comfort</p>
                <p>Chair</p>
                <div className="price">
                    <p>From  &#8377;3000 to  &#8377;5000</p>
                </div>
            </div>
            <div className="image">
                <img src={img1} alt="" />
            </div>
        </div>

        <div className="card" style={{background:"var(--color-green)"}}>
            <div className="content">
                <h1>BEST SALE</h1>
                <p>Comfort</p>
                <p>Chair</p>
                <div className="price">
                    <p>From  &#8377;3000 to  &#8377;5000</p>
                </div>
            </div>
            <div className="image">
                <img src={img1} alt="" />
            </div>
        </div>

        <div className="card" style={{background:"var(--color-green)"}}>
            <div className="content">
                <h1>BEST SALE</h1>
                <p>Comfort</p>
                <p>Chair</p>
                <div className="price">
                    <p>From  &#8377;3000 to  &#8377;5000</p>
                </div>
            </div>
            <div className="image">
                <img src={img1} alt="" />
            </div>
        </div>

        <div className="card" style={{background:"var(--color-green)"}}>
            <div className="content">
                <h1>BEST SALE</h1>
                <p>Comfort</p>
                <p>Chair</p>
                <div className="price">
                    <p>From  &#8377;3000 to  &#8377;5000</p>
                </div>
            </div>
            <div className="image">
                <img src={img1} alt="" />
            </div>
        </div>
      </div>
      </div>
      </div>
  )
}

export default Home
