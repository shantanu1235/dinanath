import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Img1 from "../assets/Images/DDC1.jpg";
import Img2 from "../assets/Images/DDC2.jpg";
import Img3 from "../assets/Images/DDC3.jpg";
import Img4 from "../assets/Images/DDC4.jpg";
import Img5 from "../assets/Images/DDC5.jpg";
import Img6 from "../assets/Images/DDC6.jpg";
import Img7 from "../assets/Images/DDC7.jpg";
import Img8 from "../assets/Images/DDC8.jpg";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      src: Img1,
      alt: "Slide 1",
      text: "DINANATH GROUP",
    },
    {
      src: Img2,
      alt: "Slide 2",
      text: "DINANATH GROUP",
    },
    {
      src: Img3,
      alt: "Slide 3",
      text: "DAYANAND DINANATH EDUCATION CENTRE",
    },

    {
      src: Img4,
      alt: "Slide 4",
      text: "DINANATH HOSPITAL",
    },
    {
      src: Img5,
      alt: "Slide 5",
      text: "THE HUDDARD SCHOOL",
    },
    {
      src: Img6,
      alt: "Slide 6",
      text: "DDEC INTERNATIONAL SCHOOL",
    },
    {
      src: Img7,
      alt: "Slide 7",
      text: "DINANATH GROUP",
    },
    {
      src: Img8,
      alt: "Slide 8",
      text: "DINANATH GROUP",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000); // Change slide every second

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [slides.length]);

  return (
    <div
      className="carousel-main-1"
      style={{ overflow: "hidden", width: "100%" }}
    >
      <div
        className="carousel-inner-1"
        style={{
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item-1 ci-${index}`}
            style={{
              backgroundImage: `url(${slide.src})`,
            }}
          >
            <p>{slide.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
