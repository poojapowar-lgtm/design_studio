import React from "react";
import { useState } from "react";
import "./contact.css";

export default function ContactSection() {
  return (
    <section className="contact">
      <div className="container">

        {/* LEFT SIDE */}
        <div className="left">
          <p className="tag">CONTACT US</p>
          <h2 className="innerpage-title">LET’S MAKE SOMETHING TOGETHER</h2>
          <p className="title-desc">
            Whether you have a brief or just an idea — we’d love to hear from you.
          </p>

          <div className="info">
            <h4>GET IN TOUCH</h4>

            <div className="item">
              <div className="icon"></div>
              <div>
                <span>VISIT US</span>
                <p>
                  Rajbaug, Loni Kalbhor, <br />Pune - Solapur Highway, Pune - 412201, <br />Maharashtra, India.
                </p>
              </div>
            </div>

            <div className="item">
              <div className="icon"></div>
              <div>
                <span>EMAIL</span>
                <p>Sohnit.Kumar@mituniversity.edu.in</p>
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
        {/* <div className="contact-right">
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
        </div> */}

        <div className="contact-right">
          <form
            className="form"
            onSubmit={async (e) => {
              e.preventDefault();

              const form = e.target;
              const submitButton = form.querySelector("button");

              submitButton.disabled = true;
              submitButton.innerText = "SENDING...";

              const formData = new FormData(form);

              const GOOGLE_SCRIPT_URL =
                "https://script.google.com/macros/s/AKfycbxtXYOGM3yD_N0UdgULGRZufKJIFNO6fe5p6FfT1qNy9AUhTe5x7i5BSKe9e41F1EyV9Q/exec";

              try {
                await fetch(GOOGLE_SCRIPT_URL, {
                  method: "POST",
                  body: new URLSearchParams(formData),
                  mode: "no-cors",
                });

                alert("Thank you! Your message has been submitted successfully.");

                form.reset();
              } catch (error) {
                console.error("Form submission error:", error);

                alert("Something went wrong. Please try again.");
              }

              submitButton.disabled = false;
              submitButton.innerText = "SEND MESSAGE →";
            }}
          >
            <h4>SEND US A MESSAGE</h4>

            <div className="row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />

            <input
              type="text"
              name="service"
              placeholder="Service Interested In"
              required
            />

            <textarea
              name="message"
              placeholder="Tell us about your project..."
              required
            ></textarea>

            <button type="submit">
              SEND MESSAGE →
            </button>
          </form>
        </div>


      </div>
    </section>
  );
}