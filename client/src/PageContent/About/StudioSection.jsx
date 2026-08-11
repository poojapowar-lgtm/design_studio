import React from "react";
import "./about_us.css";

const StudioSection = () => {
  return (
    <section className="studio">
      <div className="studio-container">

        {/* LEFT CONTENT */}
        <div className="studio-left">
          <h2 className="subtitle">
            A STUDIO ROOTED <br /> IN EDUCATION
          </h2>

          <p className="studio-desc">
            We are the professional design practice of MIT Institute of Design — one of India's premier design schools. Our
            studio bridges academic rigour with real-world creative execution.
          </p>

          <p className="studio-desc small">
            Founded in Pune and drawing on a multidisciplinary faculty and a
            vibrant alumni community, we deliver design solutions that are
            thoughtful, strategic, and beautifully crafted.
          </p>

          {/* SERVICES GRID */}
          <div className="studio-services">
            <div className="service-box">
              <span>01</span>
              <h4>INDUSTRIAL DESIGN</h4>
              <p>Products, systems, and experiences that define innovation.</p>
            </div>

            <div className="service-box">
              <span>02</span>
              <h4>DIGITAL DESIGN</h4>
              <p>Websites, apps, and digital experiences built around people.</p>
            </div>

            <div className="service-box">
              <span>03</span>
              <h4>BRAND IDENTITY</h4>
              <p>Environmental graphics, wayfinding, and exhibition design.</p>
            </div>

            <div className="service-box">
              <span>04</span>
              <h4>RESEARCH-LED</h4>
              <p>Every project starts with deep insight and ends with intent.</p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="studio-right">
          <div className="image-grid">
            <div className="img large"></div>
            <div className="img small top"></div>
            <div className="img small bottom"></div>
          </div>

          {/* STATS */}
          <div className="stats">
            <div>
              <h3>6+</h3>
              <p>DISCIPLINES</p>
            </div>
            <div>
              <h3>12+</h3>
              <p>DEPARTMENTS</p>
            </div>
            <div>
              <h3>5000+</h3>
              <p>ALUMNI</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StudioSection;