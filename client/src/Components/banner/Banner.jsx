import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner-container">
      <div className="banner-image">
        <div className="banner-content">
          <p className="banner-top-text">
            MITID Design Studio • Pune, India
          </p>

          <div className="banner-center">
            <h1 className="banner-title"> Design Consultancy<br/><span>Industry Projects <br/> & Industry Training</span></h1>

            <p className="banner-description">
              Our design services are best in class,<br />
              combining creativity with strategic insights to deliver exceptional<br />
              results.
            </p>

            <button className="banner-btn">
              ABOUT US
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;