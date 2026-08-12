import React from "react";
import "./about_us.css";

const teamData = [
  {
    id: 1,
    post: "Prof.",
    name: "Nachiket",
    surname: "thakur",
    img: "/assets/images/Nachiket_thakur.avif",
    desc: `With 20 years of experience, Dr. Nachiket is an innovation strategist specializing in new product development across multiple industries. He holds an M.Des from IIT Mumbai and a PhD from Pune University focusing on the success of product design processes.`,
  },
  {
    id: 2,
    post: "Prof.",
    name: "HARSHIT",
    surname: "DESAI",
    img: "/assets/images/HARSHIT_DESAI.avif",
    desc: `With 15+ years in Design Management and Innovation, Harshit bridges industry, government, and academia at the intersection of design, tech, and business. He is currently pursuing a PhD on the business value of design.`,
  },
  {
    id: 3,
    post: "Prof.",
    name: "SOHNIT",
    surname: "kumar",
    img: "/assets/images/SOHNIT_KUMAR.avif",
    desc: `Sohnit blends technology and imagination to create thoughtful, user-focused products. With experience in healthcare, agriculture, and consumer design, he’s worked with BARC, Indus Biotech, ECIL and Yipli. Trained in engineering, product design, and fine arts, he brings a unique, multidisciplinary lens to every project.`,
  },
];

const TeamSection = () => {
  return (
    <section className="team">
      <div className="team-header">
        {/* <p className="tag">ABOUT US</p> */}
        <h2 className="title">
          MEET THE <span>TEAM</span>
        </h2>
        <p className="section-subtitle">
          From product design to interactive digital platforms — a cross-section
          of work that defines who we are.
        </p>
      </div>

      <div className="team-slider">
        <button className="nav left">‹</button>

        <div className="inspiration-cards">
          {teamData.map((member) => (
            <div className="inspiration-card" key={member.id}>

              <img
                src={member.img}
                alt={`${member.name} ${member.surname}`}
              />

              {/* Overlay */}
              <div className="leader-overlay">
                <div className="leader-post">
                  {member.post}
                </div>

                <div className="leader-name">
                  {member.name}
                </div>

                <div className="leader-surname">
                  {member.surname}
                </div>
              </div>

              <p className="desc">
                {member.desc}
              </p>

              {/* <div className="icons">
                <span>in</span>
                <span>ig</span>
                <span>m</span>
              </div> */}

            </div>
          ))}
        </div>

        <button className="nav right">›</button>
      </div>
    </section>
  );
};

export default TeamSection;