import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false); // New state for mobile dropdown

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileAbout = () => {
    setIsMobileAboutOpen(!isMobileAboutOpen);
  };

  return (
    <>
      <div className={`NavBar-new ${isSticky ? "sticky" : ""}`}>
        <ul>
          <li>
            <a href="/">
              <img
                className="Logo-nave"
                src={
                  "https://dinanathgroup.com/assets/CompanyLogo1-BnwZ-zrp.png"
                }
                alt="Logo"
              />
            </a>
          </li>
          <li>
            <ul>
              <li>
                <ul>
                  <li className="home">
                    <Link to="/">HOME</Link>
                  </li>
                  <li
                    className="about-dropdown"
                    onMouseEnter={() => setIsAboutHovered(true)}
                    onMouseLeave={() => setIsAboutHovered(false)}
                  >
                    <Link>ABOUT</Link>
                    {isAboutHovered && (
                      <div className="dropdown-content">
                        <Link to="/about-us">ABOUT US</Link>
                        <Link to="/who-we-are">WHO WE ARE</Link>
                        <Link to="/our-teams">OUR TEAMS</Link>
                      </div>
                    )}
                  </li>
                  <li className="home">
                    <Link to="/our-services">OUR SERVICES</Link>
                  </li>
                  <li className="home">
                    <Link to="/media">MEDIA</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact-us" href="/contact-us">
                  <Button />
                </Link>
              </li>
            </ul>
          </li>
          <li onClick={toggleMenu}>
            <GiHamburgerMenu size={40} />
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <IoClose size={40} onClick={toggleMenu} className="close-icon" />
          <li>
            <Link to="/" onClick={toggleMenu}>
              HOME
            </Link>
          </li>
          <li className="mobile-dropdown">
            <div className="mobile-dropdown-header" onClick={toggleMobileAbout}>
              ABOUT
              {isMobileAboutOpen ? <FaAngleDown /> : <FaAngleRight />}
            </div>
            {isMobileAboutOpen && (
              <div className="mobile-dropdown-content">
                <Link to="/about-us" onClick={toggleMenu}>
                  ABOUT US
                </Link>
                <Link to="/who-we-are" onClick={toggleMenu}>
                  WHO WE ARE
                </Link>
                <Link to="/our-teams" onClick={toggleMenu}>
                  OUR TEAMS
                </Link>
              </div>
            )}
          </li>
          <li>
            <Link to="/our-services" onClick={toggleMenu}>
              OUR SERVICES
            </Link>
          </li>
          <li>
            <Link to="/media" onClick={toggleMenu}>
              MEDIA
            </Link>
          </li>
          <li>
            <Link to="/contact-us" onClick={toggleMenu}>
              <Button />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;