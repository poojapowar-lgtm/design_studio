import { useState } from "react";
import "./collection.css";

const filters = [
  "ALL",
  "INDUSTRIAL DESIGN",
  "BRANDING",
  "INTERACTION DESIGN",
  "SPATIAL",
  "PRINT",
  "MOTION",
];

const projects = [
  {
    title: "CARBON SULPHUR ANALYSER",
    category: "INDUSTRIAL DESIGN",
    img: "/assets/images/innerpage/collection1.webp",
  },
  {
    title: "CMM MACHINE",
    category: "INDUSTRIAL DESIGN",
    img: "/assets/images/innerpage/collection2.avif",
  },
  {
    title: "TRACE DETECTOR (TRACO)",
    category: "INDUSTRIAL DESIGN",
    img: "/assets/images/innerpage/collection3.avif",
  },
  {
    title: "CANDLE PACKAGING",
    category: "BRANDING",
    img: "/assets/images/innerpage/collection4.avif",
  },
  {
    title: "TYPOGRAPHY SYSTEM",
    category: "PRINT",
    img: "/assets/images/innerpage/collection5.avif",
  },
  {
    title: "FRESTY BRAND",
    category: "BRANDING",
    img: "/assets/images/innerpage/collection6.avif",
  },
    {
    title: "CANDLE PACKAGING",
    category: "BRANDING",
    img: "/assets/images/innerpage/collection7.webp",
  },
];

export default function Collection() {
  const [active, setActive] = useState("ALL");

  const filtered =
    active === "ALL"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="collection-container">
      <div className="collection">
        <p className="cl-subtitle">OUR WORK</p>
        <h2 className="cl-title">COLLECTION</h2>

        <p className="desc">
          From brand identities to interactive digital platforms — a cross-section
          of work that defines who we are.
        </p>

        {/* FILTERS */}
        <div className="filters">
          {filters.map((f) => (
            <button
              key={f}
              className={active === f ? "active" : ""}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid">
          {filtered.map((item, i) => (
            <div key={i} className="card">
              <img src={item.img} alt="" />
              <div className="card-info">
                <h4>{item.title}</h4>
                <span>{item.category}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}