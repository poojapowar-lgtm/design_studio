import { useRef } from "react";
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
    desc: `Harshit Desai With 15+ years in Design Management and Innovation, Harshit bridges industry, government, and academia at the intersection of design, tech, and business. He is currently pursuing a PhD on the business value of design.`,
  },
  {
    id: 3,
    post: "Prof.",
    name: "SOHNIT",
    surname: "kumar",
    img: "/assets/images/SOHNIT_KUMAR.avif",
    desc: `Sohnit blends technology and imagination to create thoughtful, user-focused products. With experience in healthcare, agriculture, and consumer design, he’s worked with BARC, Indus Biotech, ECIL and Yipli. Trained in engineering, product design, and fine arts, he brings a unique, multidisciplinary lens to every project.`,
  },
    {
    id: 4,
    post: "DR",
    name: "Prof.Dandeswar ",
    surname: "Bisoyi ",
    img: "/assets/images/dandeswar-bisoyi.png",
    desc: `An creative technologist, educator, and designer specializing in the convergence of real-time technologies that are transforming design education and innovation. With more than two decades of experience in design education and research, he combines academic leadership, technological expertise, and creative practice to drive meaningful impact.`,
  },
];

const TeamSection = () => {
  const cardsRef = useRef(null);

  const scrollCards = (direction) => {
    if (cardsRef.current) {
      const scrollAmount = cardsRef.current.clientWidth * 0.8;

      cardsRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };


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

        <button
          className="nav left"
          onClick={() => scrollCards("left")}
          aria-label="Previous"
        >
          ‹
        </button>

        <div className="inspiration-cards" ref={cardsRef}>
          {teamData.map((member) => (
            <div className="inspiration-card" key={member.id}>

              <img
                src={member.img}
                alt={`${member.name} ${member.surname}`}
                draggable="false"
              />

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

            </div>
          ))}
        </div>

        <button
          className="nav right"
          onClick={() => scrollCards("right")}
          aria-label="Next"
        >
          ›
        </button>

      </div>

    </section>
  );
};

export default TeamSection;