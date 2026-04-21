import React from "react";
import Header from "./Header";
import Img1 from "../assets/Images/DDC1.jpg";
import Img2 from "../assets/Images/DDC2.jpg";
import Img3 from "../assets/Images/DDC3.jpg";
import Img4 from "../assets/Images/DDC4.jpg";
import Img5 from "../assets/Images/DDC5.jpg";
import Img6 from "../assets/Images/DDC6.jpg";
import Img7 from "../assets/Images/DDC7.jpg";
import Img8 from "../assets/Images/DDC8.jpg";

const AboutUs = () => {
  return (
    <div>
      <Header
        title={"ABOUT US"}
        img={
          "https://info.singerthai.co.th/storage/about-us/vision/bg-vision-02.jpg"
        }
      />
      <div className="grid grid-cols-1 border-gray-100 border p-3 md:m-3  md:grid-cols-2 overflow-hidden gap-6">
        {/* Left Content */}

        <div className="flex flex-col gap-2.5 justify-center sm:px-0 md:px-4 sm:py-5   md:p-16 lg:p-13">
          <h2 className=" text-4xl font-bold leading-relaxed lg:text-start sm:text-start text-[#a12a12] mb-2">
            About Us
          </h2>

          <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal sm:text-start lg:text-start  mb-4">
            Welcome to Dinanath Group
          </h2>
          <h4 className="text-gray-900 text-1xl font-bold font-manrope leading-normal lg:text-start md:text-center sm:text-start mb-5">
            Innovating, Building, and Transformaing Lives Across Industries
          </h4>

          <p className="text-gray-600 mb-6 text-justify">
            Dinanath Group, we believe in creating a lasting impact through
            innovation, excellence, and unwavering commitment. With a diverse
            portfolio spanning education, healthcare, hospitality, real estate,
            and pharmacy, we strive to redefine industry standards and
            contribute meaningfully to society.
          </p>

          <p className="text-gray-600 mb-8 text-justify">
            For Year, We have been at the forefront of driving progress,
            delivering exceptional services, and fostering a future where
            businesses and communications flourish together. Our dedication to
            quality, integrity and custmor satisfaction makes us a trusted name
            in every sector we operate in.
          </p>
        </div>
        <div className=" relative w-full flex justify-center items-center md:h-auto">
          <img
            src={Img6}
            className=" object-cover sm:size-[100%] md:size-[80%]"
          />
        </div>
      </div>{" "}
      <div className="flex flex-col w-full lg:px-15 ">
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/2  h-[60vh] ">
            <img
              src={Img7}
              alt="Person working on home repair"
              className=" w-[100%] h-[100%]"
            />
          </div>

          <div className="w-full md:w-1/2 bg-[#a12a12] text-white p-8 md:p-12 flex flex-col gap-3 justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Early Foundations and Growth
            </h2>
            <p className="mt-8 text-[15px] text-justify">
              The journey began with the establishment of a pharmaceutical
              retail business, which quickly earned a reputation for trust and
              quality. However, the family's vision extended far beyond
              pharmacy. Recognizing the lack of quality educational institutions
              in their region, the next generation took bold steps to expand
              into education.
            </p>
            <p className="mb-8 text-[15px] text-justify">
              In 2002, Dayanand Dinanath Group of Institutions (DDGI) was
              founded in memory of Late Shri Dinanath Sachan Ji, with a mission
              to provide affordable and high-quality education. Starting with a
              single campus, the institution grew into a multi-disciplinary
              educational group spanning schools, colleges, and technical
              institutes. Today, it continues to shape future leaders in
              education, pharmacy, management, and technology.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row w-full">
          {/* Left Content */}
          <div className="w-full md:w-1/2 gap-3  text-black p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Expansion into Real Estate and Healthcare
            </h2>
            <p className="mt-8 text-[15px] text-justify">
              With a deep understanding of urban development and community
              needs, the group expanded into real estate, establishing Arcadium
              Realty—one of the leading real estate developers in Lucknow. Under
              its leadership, landmark projects such as Arcadium ONE, Arcadium
              Central, and upcoming residential ventures have transformed
              cityscapes and created world-class living spaces.
            </p>
            <p className="mb-8 text-[15px] text-justify">
              Parallelly, recognizing the need for accessible and advanced
              healthcare, Dinanath Hospital was founded. Built on the principles
              of compassionate care and medical excellence, it has become a
              trusted name in healthcare, with future plans to expand into
              cancer research and treatment.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 h-[60vh]">
            <img
              src={Img4}
              alt="Person examining appliance"
              fill
              className=" w-[100%] h-[100%]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full lg:px-15  mb-20">
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/2  h-[60vh] ">
            <img
              src={Img5}
              alt="Person working on home repair"
              className=" w-[100%] h-[100%]"
            />
          </div>

          <div className="w-full md:w-1/2 bg-[#a12a12]   text-white p-8 md:p-12 flex flex-col gap-3 justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Diversification and Future Vision
            </h2>
            <p className="mt-8 text-[15px] text-justify">
              Dinanath Group has evolved into a multi-industry conglomerate with
              a strong presence in education, real estate, healthcare,
              hospitality, and pharmaceuticals. The group's 500+ crore project
              portfolio is a testament to its commitment to innovation,
              excellence, and community development. With a vision to expand
              internationally, particularly in the UK market, the group is
              continuously exploring new opportunities in business acquisitions,
              strategic investments, and urban transformation.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row w-full">
          {/* Left Content */}
          <div className="w-full md:w-1/2 gap-3 border-1 border-[#a12a12] text-black p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              A Legacy of Impact
            </h2>
            <p className="mt-8 text-[15px] text-justify">
              From a humble beginning to a diversified enterprise, Dinanath
              Group’s journey reflects a deep commitment to nation-building,
              entrepreneurship, and social responsibility. The group continues
              to empower individuals and communities, ensuring that the values
              of Late Shri Dinanath Sachan Ji live on in every endeavor.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 h-[60vh]">
            <img
              src={Img3}
              alt="Person examining appliance"
              fill
              className=" w-[100%] h-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
