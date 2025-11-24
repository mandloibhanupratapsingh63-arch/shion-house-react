import React from "react";
import "./contact.css";
import Footer from "../components/footer";

const Contact = () => {
  return (
    <>
      <section className="contact-page">
        <div className="container contact-container">

          {/* LEFT SIDE */}
          <div className="contact-left">
            <h2 className="contact-title">Get In Touch</h2>

            <textarea placeholder="Enter Message"></textarea>

            <div className="input-row">
              <input type="text" placeholder="Enter your name" />
              <input type="email" placeholder="Email" />
            </div>

            <input className="subject-input" type="text" placeholder="Enter Subject" />

            <button className="send-btn">SEND</button>
          </div>

          {/* RIGHT SIDE */}
          <div className="contact-right">
            <div className="info-box">
              <i className="ri-home-4-line"></i>
              <div>
                <h4>Buttonwood, California.</h4>
                <p>Rosemead, CA 91770</p>
              </div>
            </div>

            <div className="info-box">
              <i className="ri-phone-line"></i>
              <div>
                <h4>+1 253 565 2365</h4>
                <p>Mon to Fri 9am to 6pm</p>
              </div>
            </div>

            <div className="info-box">
              <i className="ri-mail-line"></i>
              <div>
                <h4>SUPPORT@COLORLIB.COM</h4>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
