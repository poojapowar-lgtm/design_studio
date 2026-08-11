import React from "react";
import "./about_us.css";

const AboutBanner = () => {
    const cards = [
        {
            id: 1,
            title: "18+",
            subtitle: "Years of Excellence",
        },
        {
            id: 2,
            title: "80+",
            subtitle: "Projects Delivered",
        },
        {
            id: 3,
            title: "40+",
            subtitle: "Happy Clients",
        },
        {
            id: 4,
            title: "12+",
            subtitle: "Design Awards",
        },
    ];

    return (
        <section className="about-container">

            {/* LEFT SIDE */}
            <div
                className="banner-image"
                style={{
                    background: 'url("/assets/images/about-banner.webp") center / cover no-repeat'
                }}
            >
                <div className="about-bnr-content">
                    <div className="about-bnr-left">
                        <p className="banner-top-text" style={{ margin: "auto 0px" }}>
                            MITID Design Studio • Pune, India
                        </p>

                        <h1 className="banner-title2" style={{ fontSize: "clamp(16px, 3vw, 45px)" }}>Where Ideas</h1>
                        <h1 className="banner-title2" style={{ fontSize: "clamp(16px, 3vw, 45px)" }}>Meet</h1>
                        <h1 className="banner-title1" style={{ fontSize: "clamp(16px, 3vw, 45px)" }}>Impact</h1>

                        <p className="banner-description">
                            MIT Institute of Design Studio — crafting meaningful design solutions, along with distinctive visual id entities, digital experiences, and spatial environments for brands that dare to be different.
                        </p>

                        <button className="banner-btn">ABOUT US</button>
                    </div>


                    {/* RIGHT SIDE */}
                    <div className="about-bnr-right">
                        {cards.map((card) => (
                            <div className="about-bnr-card" key={card.id}>
                                <div className="about-card-overlay">
                                    <h1 className="banner-title1" style={{ margin: "0", fontSize: "clamp(16px, 3vw, 45px)" }}>{card.title}</h1>
                                    <p style={{ textTransform: "uppercase", color:"white"}}>{card.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutBanner;