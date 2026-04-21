
import React from "react";
import HeroSections from "../component/HeroSections";
import img from "../assets/Images/DDC6.jpg";
import WhoWeAre from "../component/WhoWeAre";
import OurServicesHome from "../component/OurServicesHome";
import WhoWeAreCards from "../component/WhoWeAreCards"
import { TbTargetArrow } from "react-icons/tb";
import { MdVisibility } from "react-icons/md";
import { GiBurningBook } from "react-icons/gi";
const Home = () => {
  return (
    <div>
      <HeroSections />
      <div className="grid grid-cols-1 border-gray-100 border m-3  md:grid-cols-2 overflow-hidden gap-6">
        <div className="flex flex-col justify-center sm:px-0 md:px-4 sm:py-5   md:p-16 lg:p-13">
          <h2 className=" text-4xl font-bold leading-relaxed lg:text-start sm:text-start text-[#a12a12] mb-2">
            About Us
          </h2>

          <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal sm:text-start lg:text-start  mb-4">
            Welcome to Dinanath Group
          </h2>
          <h4 className="text-gray-900 text-1xl font-bold font-manrope leading-normal lg:text-start md:text-center sm:text-start mb-5">
            Innovating, Building, and Transformaing Lives Across Industries
          </h4>

          <p className="text-gray-600 mb-6 ">
            Dinanath Group, we believe in creating a lasting impact through
            innovation, excellence, and unwavering commitment. With a diverse
            portfolio spanning education, healthcare, hospitality, real estate,
            and pharmacy, we strive to redefine industry standards and
            contribute meaningfully to society.
          </p>

          <p className="text-gray-600 mb-8">
            For Year, We have been at the forefront of driving progress,
            delivering exceptional services, and fostering a future where
            businesses and communications flourish together. Our dedication to
            quality, integrity and custmor satisfaction makes us a trusted name
            in every sector we operate in.
          </p>
        </div>

        <div className=" relative w-full flex justify-center items-center md:h-auto">
          <img
            src={img}
            className=" object-cover sm:size-[100%] md:size-[80%]"
          />
        </div>
      </div>{" "}
      <WhoWeAre />
 <div className="Cards">
<WhoWeAreCards
          title={"Mission"}
          para={
            "To drive progress and innovation across education, healthcare, hospitality, real estate, and pharmacy, delivering excellence and creating lasting societal impact through unwavering commitment and customer-centric solutions."
          }
          icon={<TbTargetArrow />}
        />
        <WhoWeAreCards
          title={"Vision"}
          icon={<MdVisibility />}
          para={
            "To redefine industry standards, empower communities, and foster sustainable growth, becoming a global leader in transforming lives and shaping a better future through innovation and excellence."
          }
        />
        <WhoWeAreCards
          title={"Values"}
          icon={<GiBurningBook />}
          para={
            "Integrity, Innovation, Excellence, Compassion, and Sustainability. We prioritize quality, customer satisfaction, and ethical practices, striving to create meaningful impact and inspire trust in every sector we serve."
          }
        />
      </div>
      <OurServicesHome />
    </div>
  );
};

export default Home;
