
import React,{ useEffect } from 'react'
import HomeLayout from '../components/Layout/HomeLayout'
import {Link} from 'react-router-dom'
import AddItem from "../pages/AddItem"
import Carousel from "../pages/Carousel"
import "../styles/HomeStyle.css"
import hp1 from "../images/hp1.jpg"
import m1 from "../images/categoryImg/militria1.png"
import a1 from "../images/categoryImg/art1.png"
import camera1 from "../images/categoryImg/camera1.png"
import car1 from "../images/categoryImg/car1.png"
import coins1 from "../images/categoryImg/coins1.png"
import fashion1 from "../images/categoryImg/fashion1.png"
import furniture1 from "../images/categoryImg/furniture1.png"
import game1 from "../images/categoryImg/game1.png"
import glass1 from "../images/categoryImg/glass1.png"
import interior1 from "../images/categoryImg/interior1.png"
import jewellery1 from "../images/categoryImg/jewellery1.png"
import sport1 from "../images/categoryImg/sport1.png"
import toys1 from "../images/categoryImg/toys1.png"
import watch1 from "../images/categoryImg/watch1.png"
import book1 from "../images/categoryImg/book1.png"
import commercial1 from "../images/categoryImg/commercial1.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactUsHome from './ContactUsHome'

const Home = () => {

  useEffect(() => {
    AOS.init();
  }, [])
 
  return (
    <HomeLayout>

      {/* ======= Hero Section ======= */}
<div id="hero" className="hero d-flex align-items-center section-bg">
  <div className="container">
    <div className="row justify-content-between gy-5">
      <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
        <h2 data-aos="fade-up" className="opemAuction">Open Ascending <br />Auction</h2>
        <p data-aos="fade-up" data-aos-delay={100} style={{fontFamily: 'Rajdhani'}}>The ascending auction, also known as the English auction, starts with low initial bids. Participants then raise their bids until no one offers a higher price. The highest bidder at the end secures the item.</p>
        <div className="d-flex" data-aos="fade-up" data-aos-delay={200}>
        <Link to="/auction-now" className='p-2'>
            <button className='btn-add-item'>AUCTION NOW</button>
            </Link>
          <AddItem/>
        </div>
      </div>
      <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start pt-4">
        <img src={hp1} className="img-fluid hero-img" alt data-aos="zoom-out" data-aos-delay={300} />
      </div>
    </div>
  </div>
</div>{/* End Hero Section */}

    </HomeLayout>
  )
}

export default Home