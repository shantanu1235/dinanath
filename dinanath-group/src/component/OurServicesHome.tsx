import React from "react";
import OurServicesCards from "./OurServicesCards";

const OurServicesHome = () => {
  return (
    <div>
      <ul className="WhoWeAre">
        <li>
          <h1>Unmatched Services. Unmatched Excellence.</h1>
        </li>
        <li>
          <h3 className="font-[500] text-[25px]">
            We have built many products and some of them are below
          </h3>
        </li>
        <li>
          <p>
            We combine innovation, expertise, and customer-centric solutions to
            deliver excellence across industries. Our approach is built on
            collaboration, cutting-edge technology, and sustainable practices,
            ensuring efficiency and lasting impact. From education to
            healthcare, real estate to hospitality, we prioritize quality,
            ethical standards, and measurable results to drive progress and
            empower communities.
          </p>
        </li>
      </ul>

      <div className="OurServiceCards">
        <OurServicesCards
          img={
            "https://iimbg.ac.in/wp-content/uploads/2023/05/Learning-Ambience-1024x683.jpg"
          }
          title={"EDUCATION"}
          para={
            "Empowering Minds, Shaping Future. We are committed to fostering a culture of learning and knowledge. Through our institutions and educational initiatives, we aim to provide world-class education that equips individuals with the skills and confidence to succeed in a rapidly evolving world. Our focus on innovation and excellence ensures that students receive a transformative experience."
          }
        />
        <OurServicesCards
          img={
            "https://img.freepik.com/free-photo/medicine-capsules-global-health-with-geometric-pattern-digital-remix_53876-126742.jpg"
          }
          title={"PHARMACY"}
          para={
            "Ensuring Quality Healthcare Access. Good health is the foundation of a thriving society. Our pharmaceutical ventures are dedicated to making high-quality, affordable healthcare products accessible to all. We prioritize research, safety, and innovation to ensure that every product we offer meets the highest standards of efficacy and reliability."
          }
        />
        <OurServicesCards
          img={
            "https://www.idfy.com/wp-content/uploads/2021/05/Healthcare-BGV-scaled.jpg"
          }
          title={"HEALTH-CARE"}
          para={
            "Compassionate Care, Advanced Solutions. Healthcare is more than just a service—it's a responsibility. We bring together cutting-edge medical technology and compassionate care to improve lives. From hospitals and clinics to specialized medical services, our healthcare initiatives prioritize patient well-being, accessibility, and medical excellence."
          }
        />
        <OurServicesCards
          img={
            "https://images.unsplash.com/photo-1582407947304-fd86f028f716?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D"
          }
          title={"REAL-ESTATE"}
          para={
            "Building Dreams, Creating Landmarks. We don't just construct buildings—we create communities. Our real estate projects are designed to enhance lifestyles, offering modern infrastructure, sustainable living, and architectural brilliance. With a strong commitment to quality and innovation, we develop residential, commercial, and mixed-use spaces that inspire and elevate everyday life."
          }
        />
        <OurServicesCards
          img={
            "https://st2.depositphotos.com/1000291/5355/i/450/depositphotos_53556525-stock-photo-hotel-reception-with-bell.jpg"
          }
          title={"HOSPITALITY"}
          para={
            "Redefining Comfort & Luxury. Hospitality is at the heart of creating memorable experiences. Our ventures in the hospitality sector focus on delivering unparalleled service, comfort, and elegance. Whether it's premium hotels, fine dining, or leisure services, we blend sophistication with warmth to provide an exceptional guest experience."
          }
        />
      </div>
    </div>
  );
};

export default OurServicesHome;
