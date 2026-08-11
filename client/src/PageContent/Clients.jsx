import "./clients.css";

const clients = [
  { name: "Samsung", img: "/assets/images/clients/Samsung.png" },
  { name: "Google", img: "/assets/images/clients/Google.png" },
  { name: "BARC", img: "/assets/images/clients/BARC.png" },
  { name: "INDIAN RAILWAYS", img: "/assets/images/clients/Indian-Railways.png" },
  { name: "ECIL", img: "/assets/images/clients/ECIL.png" },
  { name: "Saint-Gobain", img: "/assets/images/clients/Saint-Gobain.png" },
  { name: "Thermax Ltd", img: "/assets/images/clients/Samsung.png" },
  { name: "MAHARASHTRA BAMBOO ", img: "/assets/images/clients/MAHARASHTRA-BAMBOO.png" },
  { name: "Volkswagen", img: "/assets/images/clients/Volkswagen.png" },
  { name: "IPR", img: "/assets/images/clients/IPR.png" },
];

export default function Clients() {
  return (
    <section className="clients-container">
      <div className="clients">
        {/* TEXT */}
        <div className="top">
          <h2>TRUSTED BY</h2>
          <p>
            We work with organisations that believe design changes outcomes —
            from government bodies to global corporations.
          </p>
        </div>

        {/* LOGOS */}
        <div className="logos-wrapper">
          <div className="logos">
            {[...clients, ...clients].map((c, i) => (
              <div key={i} className="logo-item">
                <img src={c.img} alt={c.name} />
                <span>{c.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bottom">
          <p>
            Want to join our list of satisfied clients? Let’s talk about what we
            can build together.
          </p>

          <button className="cta">
            WORK WITH US →
          </button>
        </div>
      </div>
    </section>
  );
}