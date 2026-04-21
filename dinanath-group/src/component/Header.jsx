import React from "react";

const Header = ({ img, title }) => {
  return (
    <div
      className="Header"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover", // You might want to add these
        backgroundPosition: "center", // for better display
      }}
    >
      <ul>
        <li>
          <h2>{title}</h2>
        </li>
        <li>
          <p>Home </p>
          <p>|</p>
          <p>
            <span className="Home-header-button">{title}</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Header;
