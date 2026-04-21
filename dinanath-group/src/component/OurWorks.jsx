import React from "react";
import Header from "./Header";
import WhoWeAreCards from "./WhoWeAreCards";
import { TbTargetArrow } from "react-icons/tb";
import { GiBurningBook } from "react-icons/gi";
import { MdVisibility } from "react-icons/md";
const OurWorks = () => {
  return (
    <>
      <Header
        title={"WHO WE ARE"}
        img={
          "https://t4.ftcdn.net/jpg/05/12/94/55/360_F_512945508_i4qKw6tXGUwAkPHiOJeBdc71VwS3iEqX.jpg"
        }
      />
      <ul className="WhoWeAre">
        <li>
          <h1>Who We Are</h1>
        </li>
        <li>
          <h3 className="text-[27px] font-[500]">
            Making Life Smoother and Easier Every Day
          </h3>
        </li>
        <li>
          <p>
            We are dedicated to making life smoother and easier every day with
            practical and user-friendly solutions. Our focus is on simplifying
            your daily routines and enhancing your overall convenience.
            Experience seamless solutions designed to fit effortlessly into your
            lifestyle.
          </p>
        </li>
      </ul>

      <div className="Cards">
        <WhoWeAreCards
          title={"Mission"}
          para={
            "We deliver excellence by focusing on clear goals, customer needs, innovation, and collaboration. Emphasizing quality, accountability, and adaptability, we exceed expectations, overcome challenges, and celebrate successes in every project."
          }
          icon={<TbTargetArrow />}
        />
        <WhoWeAreCards
          title={"Vision"}
          icon={<MdVisibility />}
          para={
            "Our vision is to lead with purpose, bridging gaps and setting new benchmarks in every sector we operate. By staying aligned with global trends and local needs, we continue to foster trust and drive transformative growth."
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
    </>
  );
};

export default OurWorks;
