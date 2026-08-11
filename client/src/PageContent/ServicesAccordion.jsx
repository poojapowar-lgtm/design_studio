import { useState } from "react";
import "./services.css";

export default function ServicesAccordion() {
  const [active, setActive] = useState(null);
  const [activeCard, setActiveCard] = useState(null);

  const services = [
    {
      id: 0,
      title: "DESIGN STRATEGY & CONSULTING",
      description:
        "We help organizations define the right problems and identify future opportunities through research-driven design and strategic thinking. Our approach blends academic rigor with industry relevance to deliver impactful innovation.",

      cards: [
        {
          image: "/assets/images/innerpage/design-strategy1.avif",
          title: "DESIGN STRATEGY, RESEARCH & INNOVATION",
          content: [
            "We address complex societal challenges through inclusive, sustainable, and human-centered design.",
            "Includes: Inclusive Design • Public Infrastructure • Healthcare Systems • Education Design • Sustainability"
          ]
        },
        {
          image: "/assets/images/innerpage/design-strategy2.avif",
          title: "Design Strategy, Research & Innovation",
          content: [
            "We create user-centric products that balance functionality, aesthetics, and manufacturability.",
            "Includes: Industrial Design • Transportation & Mobility Design • CMF Design • Prototyping • Design for Manufacturing"
          ]

        },
        {
          image: "/assets/images/innerpage/design-strategy3.avif",
          title: "INTERACTION DESIGN (UX/UI & DIGITAL SYSTEMS)",
          content: [
            "We design intuitive digital experiences that seamlessly connect users, interfaces, and technologies.",
            "Includes: UX/UI Design • Interaction Design • Service Interfaces • Information Architecture • Usability Testing"
          ]
        },
        {
          image: "/assets/images/innerpage/design-strategy4.avif",
          title: "COMMUNICATION DESIGN & BRANDING",
          content: [
            "We craft compelling visual systems and narratives that help brands communicate effectively across platforms.",
            "Includes: Brand Identity • Graphic Design • Visual Communication • Motion Graphics • Digital Content Design"
          ]
        },
        {
          image: "/assets/images/innerpage/design-strategy5.avif",
          title: "ANIMATION, FILM & VIDEO DESIGN",
          content: [
            "We bring ideas to life through storytelling, motion, and cinematic experiences.",
            "Includes: Animation Films • Explainer Videos • Storyboarding • Film Production • Experience Narratives"
          ]
        },
        {
          image: "/assets/images/innerpage/design-strategy6.avif",
          title: "DESIGN FOR SOCIAL IMPACT & PUBLIC SYSTEMS",
          content: [
            "We address complex societal challenges through inclusive, sustainable, and human-centered design.",
            "Includes: Inclusive Design • Public Infrastructure • Healthcare Systems • Education Design • Sustainability"
          ]
        },
      ],
    },

    {
      id: 1,
      title: "FACULTY & PROFESSIONAL DEVELOPMENT PROGRAMS",
      description:
        "We enable educators, professionals, and organizations to build design capabilities through structured, hands-on, and industry-relevant learning experiences.",

      cards: [
        {
          image: "/assets/images/innerpage/professional-development1.avif",
          title: "Executive Education & Professional Programs",
          content: [
            "We offer advanced learning programs for working professionals and leaders to integrate design into business and innovation.",
            "Includes: Design Thinking for Leaders • Innovation Strategy • Business Design • Leadership through Design"
          ]
        },
        {
          image: "/assets/images/innerpage/professional-development2.webp",
          title: "Short-Term & Certificate Courses",
          content: [
            "Focused programs designed to build specific skills in a short duration with practical outcomes.",
            "Includes: UX/UI Design • Product Design • Communication Design • Digital Tools & Prototyping"
          ]
        },
        {
          image: "/assets/images/innerpage/professional-development3.webp",
          title: "Corporate Training & Custom Programs",
          content: [
            "Tailored training solutions designed to meet organizational goals and industry-specific challenges.",
            "Includes: Customized Workshops • Design Sprints • Innovation Labs • Capability Building"
          ]
        },
        {
          image: "/assets/images/innerpage/professional-development4.webp",
          title: "Workshops & Bootcamps",
          content: [
            "Hands-on, intensive learning experiences focused on solving real-world problems.",
            "Includes: Design Thinking Workshops • Rapid Prototyping • Creative Problem Solving • Interdisciplinary Collaboration"
          ]
        },
        {
          image: "/assets/images/innerpage/professional-development5.avif",
          title: "Summer & Winter Design Schools",
          content: [
            "Immersive seasonal programs offering experiential learning through live projects and studio culture.",
            "Includes: Foundation Programs • Thematic Studios • Portfolio Development • Industry Exposure"
          ]
        },
        {
          image: "/assets/images/innerpage/professional-development6.webp",
          title: "Immersive Learning Labs",
          content: [
            "Studio-based environments that simulate real-world design challenges and collaborative learning.",
            "Includes: Live Projects • Mentored Studios • Cross-Disciplinary Learning • Experimental Design Labs"
          ]
        },
      ],
    },

    {
      id: 2,
      title: "INDUSTRY DRIVEN DESIGN PROJECTS",
      description:
        "We collaborate with industry partners to solve real-world challenges through design-led innovation, combining academic depth with practical execution.",

      cards: [
        {
          image: "/assets/images/innerpage/industry-driven1.avif",
          title: "Sponsored Industry Projects",
          content: [
            "Industry-funded projects addressing specific challenges through structured design processes.",
            "Includes: Problem Framing • Concept Development • Prototyping • Final Design Solutions"
          ]
        },
        {
          image: "/assets/images/innerpage/industry-driven2.avif",
          title: "Live Client Engagements",
          content: [
            "Real-time collaboration with industry stakeholders on active problem statements.",
            "Includes: Client Briefs • Iterative Design • Feedback Loops • Implementation Support"
          ]
        },
        {
          image: "/assets/images/innerpage/industry-driven3.avif",
          title: "Co-Creation & Innovation Projects",
          content: [
            "Collaborative innovation involving industry, faculty, and students working together.",
            "Includes: Workshops • Ideation Sessions • Concept Co-Development • Pilot Solutions"
          ]
        },
        {
          image: "/assets/images/innerpage/industry-driven4.avif",
          title: "Product & System Development Projects",
          content: [
            "End-to-end design and development of products, services, and systems.",
            "Includes: Product Design • Service Design • System Design • Design for Manufacturing"
          ]
        },
        {
          image: "/assets/images/innerpage/industry-driven5.avif",
          title: "Research & Long-Term Collaborations",
          content: [
            "Strategic partnerships focused on deep research and future-forward innovation.",
            "Includes: Design Research • Emerging Technologies • Sustainability • Social Innovation"
          ]
        },
        {
          image: "/assets/images/innerpage/industry-driven6.avif",
          title: "Sector-Specific Design Projects",
          content: [
            "Targeted design interventions across key domains.",
            "Includes: Healthcare • Mobility • Smart Cities • Education • Social Impact"
          ]
        }
      ],
    },
  ];

  // SERVICE ACCORDION
  const toggle = (id) => {
    setActive(active === id ? null : id);

    // Close any opened card when changing service
    setActiveCard(null);
  };

  // CARD READ MORE
  const handleCardClick = (cardId) => {
    setActiveCard(
      activeCard === cardId ? null : cardId
    );
  };

  return (
    <div className="services-container">
      <div className="services-section">

        {/* MAIN HEADING */}
        <h2 className="services-heading">
          SERVICES
        </h2>

        {/* SERVICES */}
        {services.map((service) => (
          <div
            className={`service-item ${active === service.id ? "active" : ""
              }`}
            key={service.id}
          >

            {/* SERVICE HEADER */}
            <div
              className="service-header"
              onClick={() => toggle(service.id)}
            >
              <h3 className={active === service.id ? "active-title" : ""}>
                {service.title}
              </h3>

              <span
                className={
                  active === service.id
                    ? "active-icon"
                    : "plus-icon"
                }
              >
                {active === service.id ? "×" : "+"}
              </span>
            </div>

            {/* SERVICE CONTENT */}
            {active === service.id && (
              <div className="service-expand">

                {/* DESCRIPTION */}
                {service.description && (
                  <p className="service-desc">
                    {service.description}
                  </p>
                )}

                {/* SERVICE CARDS */}
                {service.cards &&
                  service.cards.length > 0 && (
                    <div className="service-grid">

                      {service.cards.map(
                        (card, index) => {
                          const cardId = `${service.id}-${index}`;

                          return (
                            <div
                              className="card"
                              key={cardId}
                            >

                              {/* IMAGE */}
                              <img
                                src={card.image}
                                alt={card.title}
                              />

                              {/* NORMAL CARD OVERLAY */}
                              <div className="card-overlay">

                                {/* TITLE LEFT */}
                                <div className="card-title">
                                  {card.title}
                                </div>

                                {/* READ MORE RIGHT */}
                                <button
                                  type="button"
                                  className="read-more"
                                  onClick={(e) => {
                                    e.stopPropagation();

                                    handleCardClick(
                                      cardId
                                    );
                                  }}
                                >
                                  learn more
                                </button>

                              </div>

                              {/* CONTENT OVERLAY */}
                              {activeCard === cardId && (
                                <div
                                  className="card-content-overlay"
                                  onClick={() =>
                                    setActiveCard(null)
                                  }
                                >
                                  {card.content.map((text, index) => (
                                    text && <p className="content-text" key={index}>{text}</p>
                                  ))}
                                </div>
                              )}

                            </div>
                          );
                        }
                      )}

                    </div>
                  )}

              </div>
            )}

          </div>
        ))}

      </div>
    </div>
  );
}