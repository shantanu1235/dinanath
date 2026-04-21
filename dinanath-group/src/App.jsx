import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Top from "./component/Top";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./component/Home";
import HeroSections from "./component/HeroSections";
import WhoWeAre from "./component/WhoWeAre";
import WhoWeAreCards from "./component/WhoWeAreCards";
import { TbTargetArrow } from "react-icons/tb";
import { MdVisibility } from "react-icons/md";
import { GiBurningBook } from "react-icons/gi";
import OurServicesHome from "./component/OurServicesHome";
import ContactUs from "./component/ContactUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./component/AboutUs";
import OurServices from "./component/OurServices";
import Media from "./component/Media";
import OurWorks from "./component/OurWorks"
import OurTeams from "./component/OurTeams";
 
function App() {
  return (
    <>
      <BrowserRouter>
        <Top />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-services" element={<OurServices />} />
            <Route path="/media" element={<Media/>}/>
            <Route path="/who-we-are" element={<OurWorks/>}/>
            <Route path="/our-teams" element={<OurTeams/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
