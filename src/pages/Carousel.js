import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Carousel.css'; // Import your custom CSS for styling

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

const Carousel = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,
  };

  return (
    <div className="carousel-container">
      <Slider {...carouselSettings}>
      <div> <img src={book1}  /> </div>

      <div> <img src={camera1}  /> </div>

    
      </Slider>
    </div>
  );
};

export default Carousel;
