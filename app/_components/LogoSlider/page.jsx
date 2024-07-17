"use client";
import React from 'react';
import Slider from "react-slick";
import Image from 'next/image';

const LogoSlider = () => {
  // Array of logo objects with src and alt properties
  const logos = [
    { src: "/assets/images/cardanothor.png", alt: "Cardanothor logo" },
    { src: "/assets/images/CC-logo-white.png", alt: "CC logo" },
    { src: "/assets/images/frigid-logo-white.png", alt: "Frigid logo" },
    { src: "/assets/images/Goombles-logo-light.png", alt: "Goombles logo" },
    { src: "/assets/images/MVPz_white_transparent_bg.png", alt: "MVPz logo" },
    { src: "/assets/images/Snekkies-logo-light.png", alt: "Snekkies logo" },
  ];

  // Slider settings configuration
  var settings = {
    dots: false, 
    arrows: false, 
    infinite: true, 
    speed: 4000, 
    autoplaySpeed: 0, 
    slidesToShow: 6, 
    cssEase: "linear", 
    autoplay: true, 
    responsive: [
      {
        breakpoint: 1199, 
        settings: {
          slidesToShow: 4, 
        },
      },
      {
        breakpoint: 991, 
        settings: {
          slidesToShow: 3, 
        },
      },
      {
        breakpoint: 767, 
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 479, 
        settings: {
          slidesToShow: 2, 
        },
      },
    ],
  };

  return (
    <section className="slider-section">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          
          <div className="text-center" key={index}>
            <Image
              src={logo.src} 
              alt={logo.alt} 
              height={46} 
              width={170} 
              className="h-auto w-auto inline-block opacity-50" 
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default LogoSlider;
