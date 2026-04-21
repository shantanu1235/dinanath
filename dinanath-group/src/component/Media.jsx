import React, { useState } from "react";
import Header from "./Header";
import { IoClose } from "react-icons/io5";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ev1 from "../assets/Images/ev1.jpg";
import ev2 from "../assets/Images/ev2.jpg";
import ev3 from "../assets/Images/ev3.jpg";
import ev4 from "../assets/Images/ev4.jpg";
import ev5 from "../assets/Images/ev5.jpg";
import ev6 from "../assets/Images/ev6.jpg";
import ev7 from "../assets/Images/ev7.jpg";
import ev8 from "../assets/Images/ev8.jpg";
import ev9 from "../assets/Images/ev9.jpg";
import ev10 from "../assets/Images/ev10.jpg";
import ev11 from "../assets/Images/ev11.jpg";
import ev12 from "../assets/Images/ev12.jpg";
import ev13 from "../assets/Images/ev13.jpg";
import ev14 from "../assets/Images/ev14.jpg";
import ev15 from "../assets/Images/ev15.jpg";
import ev16 from "../assets/Images/ev16.jpg";
import ev17 from "../assets/Images/ev17.jpg";
import ev18 from "../assets/Images/ev18.jpg";
import ev19 from "../assets/Images/ev19.jpg";
import ev20 from "../assets/Images/ev20.jpg";
import ev21 from "../assets/Images/ev21.jpg";
import ev22 from "../assets/Images/ev22.jpg";

import { RiEyeLine } from "react-icons/ri";

const Media = () => {
  const images = [
    ev1,
    ev2,
    ev3,
    ev4,
    ev5,
    ev6,
    ev7,
    ev8,
    ev9,
    ev10,
    ev11,
    ev12,
    ev13,
    ev14,
    ev15,
    ev16,
    ev17,
    ev18,
    ev19,
    ev20,
    ev21,
    ev22,
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const closeOverlay = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div>
      <Header
        title={"MEDIA"}
        img={
          "https://png.pngtree.com/thumb_back/fh260/background/20230607/pngtree-an-art-gallery-with-lots-of-framed-walls-image_2933000.jpg"
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="group  relative overflow-hidden rounded-lg"
          >
            <img
              src={image}
              alt={`Event ${index + 1}`}
              className="w-full h-[50vh] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
              <button
                onClick={() => handleImageClick(index)}
                className="opacity-0 cursor-pointer group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-[#a12a12]  text-white px-6 py-4 rounded-lg hover:bg-gray-200 text-2xl hover:text-gray-700"
              >
                <RiEyeLine />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Image overlay */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[99999] p-4">
          <button
            className="absolute top-0 cursor-pointer right-0 m-4 bg-white text-gray-800 p-2 rounded-full  hover:bg-gray-200 transition-colors"
            onClick={closeOverlay}
          >
            <IoClose size={24} />
          </button>
          <button
            className="absolute z-10 cursor-pointer left-0 top-1/2 -translate-y-1/2 m-4 bg-white text-gray-800 p-3 rounded-full hover:bg-gray-200 transition-colors"
            onClick={goToPrevious}
          >
            <FaAngleLeft size={24} />
          </button>
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <img
              src={images[selectedImageIndex]}
              alt="Full size"
              className="w-full max-h-[80vh] object-contain"
            />
          </div>

          <button
            className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 m-4 bg-white text-gray-800 p-3 rounded-full hover:bg-gray-200 transition-colors"
            onClick={goToNext}
          >
            <FaAngleRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Media;
