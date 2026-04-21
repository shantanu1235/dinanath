import React from "react";
import Header from "./Header";
import img1 from "../assets/Images/DDC4.jpg"
import img2 from "../assets/image.png"
import img3 from "../assets/Image1.jpg"
import img4 from "../assets/image2.png"

const OurServices = () => {
  return (
    <div>
      <Header
        title={"OUR SERVICES"}
        img={
          "https://lh4.googleusercontent.com/proxy/QVjziimSdZ9kAckRaQKI0z_4JQ0NbfBDea5SdjFKKS6dSpC3q4JcWe73oHQrFCdsnMIr7zpGqPYLRLlBf63nqy5UUOe-OgynjY-uJb2pyl_k4UkkSKbcfuxTCQ"
        }
      />

      <div className="w-full lg:px-15 lg:py-15  gap-[20px] flex flex-col ">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row gap-[20px] md:h-[70vh]">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://dinanathgroup.com/assets/ddcin-BSlONq7E.jpg"
              alt="Construction worker with safety vest"
              fill
              className="  object-cover size-[100%] "
            />
          </div>

          {/* Right Content */}
          <div className="w-full  md:h-[70vh] gap-3 md:w-1/2 bg-[#a12a12] text-white p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase">
              EDUCATION
            </h2>
            <p className="text-[15px] text-justify">
              At Financial Freedom Advisors, we empower individuals and families
              to take control of their financial future. Through personalized
              strategies and comprehensive planning, we help you build wealth,
              manage risk, and create lasting security. Our tailored approach
              ensures your unique goals become achievable realities.
            </p>
            <p className="text-[15px] text-justify">
              We provide the tools and knowledge to navigate life's financial
              complexities with clarity. From retirement planning to investment
              management, our solutions are designed to grow and protect your
              assets. Let us help you turn aspirations into action and dreams
              into financial freedom.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-[20px]  md:h-[70vh]">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src={img1}
              alt="Construction worker with safety vest"
              fill
              className="  object-cover size-[100%] "
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:h-[70vh] gap-3 md:w-1/2 bg-[#a12a12] text-white  p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase">
              PHARMACY
            </h2>
            <p className="text-[15px] text-justify">
              We believe quality healthcare is a right, not a privilege. Our
              pharmaceutical initiatives focus on delivering affordable,
              effective medicines while maintaining uncompromising safety
              standards.
            </p>
            <p className="text-[15px] text-justify">
              Through cutting-edge research and advanced manufacturing, we
              develop reliable treatments that address real health challenges.
              Every product reflects our commitment to scientific excellence.
            </p>
            <p className="text-[15px] text-justify">
              From urban centers to remote areas, we work tirelessly to improve
              medication access. Our mission is to create a healthier world, one
              patient at a time.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-[20px]  md:h-[70vh]">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src={img3}
              alt="Construction worker with safety vest"
              fill
              className="  object-cover size-[100%] "
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:h-[70vh] gap-3 md:w-1/2 bg-[#a12a12] text-white  p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase">
              HEALTH-CARE
            </h2>
            <p className="text-[15px] text-justify">
              At the core of our mission lies a simple truth: every patient
              deserves compassionate, world-class care. We combine advanced
              medical technologies with human-centered approaches to deliver
              treatment that heals both body and spirit. Our network of
              hospitals, clinics, and specialized centers brings expert care
              closer to communities, ensuring accessibility without compromising
              on the highest standards of medical excellence.
            </p>
            <p className="text-[15px] text-justify">
              We're redefining healthcare delivery through continuous innovation
              and unwavering commitment. From pioneering treatments to creating
              welcoming healing environments, our initiatives address the
              complete spectrum of patient needs. By blending cutting-edge
              solutions with genuine empathy, we're building a healthcare system
              that doesn't just treat illnesses but enhances overall wellbeing
              and quality of life for all.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-[20px]  md:h-[70vh]">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src={img2}
              alt="Construction worker with safety vest"
              fill
              className="  object-cover size-[100%] "
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:h-[70vh] gap-3 md:w-1/2 bg-[#a12a12] text-white  p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase">
              REAL-ESTATE
            </h2>
            <p className="text-[15px] text-justify">
              We don't simply construct buildings—we design living ecosystems
              that bring people together. Our real estate vision transforms
              urban landscapes through cutting-edge infrastructure,
              environmentally conscious designs, and architectural masterpieces
              that stand the test of time. With an unwavering commitment to
              excellence, we develop residential havens, dynamic commercial
              hubs, and innovative mixed-use spaces that seamlessly integrate
              work, life, and leisure.
            </p>
            <p className="text-[15px] text-justify">
              Each project is conceived with meticulous attention to detail,
              incorporating smart technologies and sustainable practices to
              create spaces that are both functional and inspiring. We believe
              in developments that don't just house people, but nurture
              connections, foster growth, and enhance quality of life. From
              luxury apartments to business districts, our creations redefine
              modern living while respecting our shared environment.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-[20px]  md:h-[70vh]">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src={img4}
              alt="Construction worker with safety vest"
              fill
              className="  object-cover size-[100%] "
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:h-[70vh] gap-3 md:w-1/2 bg-[#a12a12] text-white p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase">
              HOSPITALITY
            </h2>
            <p className="text-[15px] text-justify">
              Hospitality lies at the heart of crafting unforgettable moments.
              Our ventures in this sector are dedicated to delivering unmatched
              service, refined comfort, and timeless elegance. From luxurious
              hotels and exquisite fine dining to bespoke leisure experiences,
              we combine sophistication with genuine warmth to create
              exceptional guest journeys. Every detail is thoughtfully designed
              to exceed expectations, ensuring stays are not just comfortable
              but truly extraordinary.
            </p>
            <p className="text-[15px] text-justify">
              We believe true luxury is about personalized attention, seamless
              service, and creating spaces where guests feel both indulged and
              at home. Our commitment to excellence transforms ordinary stays
              into memorable escapes, setting new standards in hospitality where
              every experience is as exceptional as it is effortless.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
