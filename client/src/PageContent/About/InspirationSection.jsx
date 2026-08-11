import React from "react";
import "./about_us.css";

const leaders = [
  {
    id: 1,
    post: "Prof. DR",
    name: "Vishwanath",
    surname: "Karad",
    img: "/assets/images/Vishwanath_Karad.avif",
    desc: `Founder of MIT Group of Institutions and MIT ADT University, Dr. Karad is a visionary educationist who pioneered a holistic approach that blends science, spirituality, and peace. His leadership laid the foundation for a multidisciplinary, value-driven learning ecosystem.`,
  },
  {
    id: 2,
    post: "Prof. DR",
    name: "MAngesh t.",
    surname: "Karad",
    img: "/assets/images/Mangesh_karad.avif",
    desc: `Executive President of MIT ADT University, Dr. Mangesh Karad emphasizes experiential learning and all-round development. He actively supports co-curricular initiatives, including sports like karate, to build discipline and character.`,
  },
  {
    id: 3,
    post: "DR",
    name: "SUNIL",
    surname: "Karad",
    img: "/assets/images/SUNIL_KARAD.avif",
    desc: `Executive Director and Trustee, Dr. Sunil Karad drives innovation and strategic growth across MIT institutions. He focuses on integrating technology, entrepreneurship, and scalable education models to expand impact.`,
  },
];

const InspirationSection = () => {
  return (
    <section className="inspiration">
      {/* HEADER */}
      <div className="inspiration-header">
        <p className="tag">LEADERSHIP</p>
        <h2 className="title">
          OUR <span>INSPIRATIONS</span>
        </h2>
        <p className="section-subtitle">
          Guided by visionaries shaping education through innovation, values,
          and holistic growth.
        </p>
      </div>

      {/* CARDS */}
      <div className="inspiration-cards">
        {leaders.map((item) => (
          <div className="inspiration-card" key={item.id}>

            <img
              src={item.img}
              alt={`${item.name} ${item.surname}`}
            />

            <div className="leader-overlay">
              <div className="leader-post">
                {item.post}
              </div>

              <div className="leader-name">
                {item.name}
              </div>

              <div className="leader-surname">
                {item.surname}
              </div>
            </div>

            <p className="desc">
              {item.desc}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
};

export default InspirationSection;