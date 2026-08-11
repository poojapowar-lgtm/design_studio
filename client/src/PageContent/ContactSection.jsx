import "./contact.css";

export default function ContactSection() {
  return (
    <section className="contact">
      <div className="container">
        
        {/* LEFT SIDE */}
        <div className="left">
          <p className="tag">CONTACT US</p>
          <h2>LET’S MAKE SOMETHING TOGETHER</h2>
          <p className="subtext">
            Whether you have a brief or just an idea — we’d love to hear from you.
          </p>

          <div className="info">
            <h4>GET IN TOUCH</h4>

            <div className="item">
              <div className="icon"></div>
              <div>
                <span>VISIT US</span>
                <p>
                  Vishwanjaya, Loni Kalbhor <br />
                  Pune, Maharashtra 412201
                </p>
              </div>
            </div>

            <div className="item">
              <div className="icon"></div>
              <div>
                <span>EMAIL</span>
                <p>studio@mitid.edu.in</p>
              </div>
            </div>

            <div className="item">
              <div className="icon"></div>
              <div>
                <span>PHONE</span>
                <p>+91 20 67652374</p>
                <small>Mon - Sat, 9am – 6pm</small>
              </div>
            </div>
          </div>

          <div className="hours">
            <h5>STUDIO HOURS</h5>
            <p>Mon - Fri: 9:00 am - 7:00 pm</p>
            <p>Saturday & Sunday: Closed</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact right">
          <form className="form">
                      <h4>SEND US A MESSAGE</h4>
            <div className="row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>

            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Service Interested In" />

            <textarea placeholder="Tell us about your project..."></textarea>

            <button type="submit">SEND MESSAGE →</button>
          </form>
        </div>

      </div>
    </section>
  );
}