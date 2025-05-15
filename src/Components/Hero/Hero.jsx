import React from "react";
import Slider from "react-slick";
import style from "./Hero.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import glasslady from "../../assets/glasslady.png"
import headphonesgirl from "../../assets/headphonesgirl.png"

export default function Hero() {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={style.container}>
      <Slider {...settings}>
       
        <div className={style.content}>
         ?
            <h2>Revolutionize your exams with ease</h2>
            <p>Our platform simplifies exam creation, management, and student assessment.</p>
            <button>Get Started</button>    
      ?
          <div className={style.contentImage}>
          
                <img src={glasslady} alt="glasseslady" />
           
          </div>
        </div>

        
        <div className={style.content}>
          <div className={style.contentLeft}>
            <h2>Revolutionize your exams with ease</h2>
            <p>Our platform simplifies exam creation, management, and student assessment.</p>
            <button>Get Started</button>
          </div>
          <div className={style.contentRight}>
         
                <img src={headphonesgirl} alt="headphonesgirl" />
          
          </div>
        </div>
      </Slider>
    </div>
  );
}
