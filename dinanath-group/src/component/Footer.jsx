import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer">
      <ul>
        <li>
          <ul className="footer-section-1">
            <Link to="/">
              <img
                alt="footer-img"
                className="footer-img"
                src={
                  "https://dinanathgroup.com/assets/CompanyLogo1-BnwZ-zrp.png"
                }
              />
            </Link>

            <div className="About-ddc">
              <p>
                At Dinanath Group, we believe in the power of collaboration,
                innovation, and purpose-driven growth. Whether you are a
                customer, investor, or partner, we invite you to be a part of
                our vision to shape industries and create a brighter future.
                Together, we build, grow, and transform lives.
              </p>
            </div>
          </ul>
        </li>
        <li>
          <ul className="footer-section-1">
            <h2>Contact us</h2>

            <li>
              <div>
                <FaLocationDot className="Icon" />
                <span>
                  113/18, Swaroop Nagar, Kanpur, Uttar Pradesh 208002, India
                </span>
              </div>

              <div>
                <IoIosCall className="Icon" />
                <a className="foote-a" href="tel:9032001889">
                  +91-9984666611
                </a>
              </div>

              <div>
                <IoMail className="Icon" />
                <a href="mailto:sales@gaganasai.com">ho@ddckanpur.edu.in</a>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="footer-section-1">
            <h2>Quick Links</h2>

            <li>
              <div>
                <FaAngleRight className="Icon" />
                <Link className="foote-a" to="/">
                  Home
                </Link>
              </div>

              <div>
                <FaAngleRight className="Icon" />
                <Link className="foote-a" to="/about-us">
                  About
                </Link>
              </div>

              <div>
                <FaAngleRight className="Icon" />
                <Link className="foote-a" to="/our-services">
                  Our Services
                </Link>
              </div>

              <div>
                <FaAngleRight className="Icon" />
                <Link to="/media">Media</Link>
              </div>

              <div>
                <FaAngleRight className="Icon" />
                <Link to="/contact-us">Contact Us</Link>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <div className="Footer-last-section">
        <ul>
          <li>
            <span className="footer-copy-rights">
              © DINANATH GROUP CREATING VALUE SINCE 1955
            </span>
            . All Rights Reserved.
          </li>
          <li>
            <ul>
              <li>
                <a
                  target="blank"
                  href="https://x.com/DinanathGroup?t=ddBqHKifLOPlUTtYSOobTw&s=09"
                >
                  <FaTwitter className="social-media-icon" />
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://www.facebook.com/people/Dinanath-Group/61571710080192/?rdid=YCDthePRKgYtBXxS&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F167DXWcjN5%2F"
                >
                  <FaFacebookF className="social-media-icon" />
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://www.instagram.com/dinanathgroupofficial/profilecard/?igsh=enYwNGo1cG92OXR0"
                >
                  <AiFillInstagram className="social-media-icon" />
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://www.linkedin.com/company/dinanathgroup1995/"
                >
                  <FaLinkedinIn className="social-media-icon" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
