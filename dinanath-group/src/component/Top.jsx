import React from "react";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { IoMailOpenOutline } from "react-icons/io5";

const Top = () => {
  return (
    <ul className="top-header">
      <li>
        <BsClockHistory className="top-icons" />
        <ul className="mail">
          <li>Email Us</li>
          <li>
            <a href="mailto:ho@ddckanpur.edu.in">ho@ddckanpur.edu.in</a>
          </li>
        </ul>
      </li>
      <li>
        <MdOutlinePhonelinkRing className="top-icons" />
        <ul className="mail">
          <li>Call Us</li>
          <li>
            <a href="tel: +9140-23061889">+91-9984666611</a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Top;
