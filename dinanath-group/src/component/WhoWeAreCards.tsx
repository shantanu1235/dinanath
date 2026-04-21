// import React from "react";
// import styled from "styled-components";

// const Card = ({ title, para, icon }) => {
//   return (
//     <StyledWrapper>
//       <div className="card">
//         <div className="content">
//           {icon}
//           <h3>{title}</h3>
//           <p className="para">{para}</p>
//         </div>
//       </div>
//     </StyledWrapper>
//   );
// };

// const StyledWrapper = styled.div`
//   .card {
//     position: relative;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 360px;

//     border-radius: 24px;
//     line-height: 1.6;
//     transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
//   }

//   .content {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 24px;
//     padding: 36px;
//     border-radius: 22px;
//     color: #ffffff;
//     min-height: 70vh;
//     overflow: hidden;
//     background: #a12a12;
//     transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
//   }

//   .content::before {
//     position: absolute;
//     content: "";
//     top: -4%;
//     left: 50%;
//     width: 90%;
//     height: 90%;
//     transform: translate(-50%);
//     background: #ced8ff;
//     z-index: -1;
//     transform-origin: bottom;

//     border-radius: inherit;
//     transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
//   }

//   .content::after {
//     position: absolute;
//     content: "";
//     top: -8%;
//     left: 50%;
//     width: 80%;
//     height: 80%;
//     transform: translate(-50%);
//     background: #e7ecff;
//     z-index: -2;
//     transform-origin: bottom;
//     border-radius: inherit;
//     transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
//   }

//   .content svg {
//     width: 48px;
//     height: 48px;
//   }

//   .content .para {
//     z-index: 1;
//     opacity: 1;
//     font-size: 18px;
//     transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
//   }

//   .content .link {
//     z-index: 1;
//     color: #fea000;
//     text-decoration: none;
//     font-family: inherit;
//     font-size: 16px;
//     transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
//   }

//   .content .link:hover {
//     text-decoration: underline;
//   }

//   .card:hover {
//     transform: translate(0px, -16px);
//   }

//   .card:hover .content::before {
//     rotate: -8deg;
//     top: 0;
//     width: 100%;
//     height: 100%;
//   }
//   .content > h3 {
//     font-size: 30px;
//     margin:0;
//     padding:0;
//   }

//   .card:hover .content::after {
//     rotate: 8deg;
//     top: 0;
//     width: 100%;
//     height: 100%;
//   }

//   @media (max-width: 768px) {
//     .card {
//       position: relative;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       width: 100%;

//       border-radius: 24px;
//       line-height: 1.6;
//       transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
//     }
//   }
// `;

// export default Card;


import React from 'react';
import styled from 'styled-components';

const Card = ({ title, para, icon }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="content">
          <p className="heading">{title}</p>
          <p className="para">
          {para}
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 350px;
    padding: 2px;
    height:70vh;
    border-radius: 24px;
    overflow: hidden;
    line-height: 1.6;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding: 34px;
    border-radius: 22px;
    color: #ffffff;
      height:70vh;
    overflow: hidden;
    background: #ffffff;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .content .heading {
    font-weight: 700;
    font-size: 36px;
    line-height: 1.3;
    z-index: 1;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .content .para {
    z-index: 1;
    opacity: 0.8;
    font-size: 18px;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card::before {
    content: "";
    position: absolute;
    height: 200%;
    width: 160%;
    border-radius: inherit;
    background: #a12a12;
    background: linear-gradient(to right,  #a12a12,  #a12a12);
    transform-origin: center;
    animation: moving 4.8s linear infinite paused;
    transition: all 0.88s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card:hover::before {
    animation-play-state: running;
    z-index: -1;
    width: 20%;
  }

  .card:hover .content .heading,
  .card:hover .content .para {
    color: #000000;
  }

  .card:hover {
    box-shadow: 0rem 6px 13px rgba(10, 60, 255, 0.1),
      0rem 24px 24px rgba(10, 60, 255, 0.09),
      0rem 55px 33px rgba(10, 60, 255, 0.05),
      0rem 97px 39px rgba(10, 60, 255, 0.01), 0rem 152px 43px rgba(10, 60, 255, 0);
    scale: 1.05;
    color: #000000;
  }

  @keyframes moving {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }`;

export default Card;
