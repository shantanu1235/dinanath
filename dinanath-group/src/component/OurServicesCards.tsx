import React from "react";

const OurServicesCards = ({ title, para, img }) => {
  return (
    <div className="relative flex sm:w-[100%] md:w-[28vw] flex-col mb-16 rounded-xl bg-gradient-to-br from-white to-gray-50 bg-clip-border text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative mx-4 -mt-6 h-[43vh] overflow-hidden rounded-xl bg-clip-border shadow-lg group">
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse" />
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={img} alt="" className="h-[100%]" />
        </div>
      </div>
      <div className="px-6 py-3">
        <h5 className=" block font-sans text-xl font-semibold leading-snug tracking-normal text-[#a12a12] antialiased group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h5>
      </div>
      <div className="px-6 py-0 pb-5">
        <p className="text-[15px]  text-gray-800 ">{para}</p>
      </div>
      {/* <div className="p-6 pt-0">
        <button className="group relative w-full inline-flex items-center justify-center px-6 py-3 font-bold text-white rounded-lg bg-gradient-to-r from-[#a12a12] to-[#a12a12] hover:from-[#a12a12ce] hover:to-[#a12a12ce] shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5">
          <span className="relative flex items-center gap-2">
            Read More
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
            >
              <path
                d="M17 8l4 4m0 0l-4 4m4-4H3"
                strokeWidth={2}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </button>
      </div> */}
    </div>
  );
};

export default OurServicesCards;
