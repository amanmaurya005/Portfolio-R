import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaBehance } from "react-icons/fa";
import "aos/dist/aos.css";
import "../style/Contact.css";
// import './index.css'


const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h1 data-aos="fade-up">Contact Me</h1>
      <p data-aos="fade-up" data-aos-delay="200">
        Let's connect! Feel free to message me for projects, collaborations, or queries.
      </p>

      <div className="contact-wrapper">
        {/* Contact Details Card */}
        <div className="contact-card" data-aos="fade-right">
          <h2>Get in Touch</h2>
          <a
            href="mailto:amanmaurya@gmail.com?subject=Hello%20Aman&body=Hi%20Aman,"
            className="email-link"
          >
            <p><FaEnvelope /> amanmaurya@gmail.com</p>
          </a>
          <p><FaPhone /> +91 8387023571</p>

          <div className="social-icons">
            <a href="https://github.com/amanmaurya005/"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/aman-maurya-04b31227b/"><FaLinkedin /></a>
            <a href="https://www.behance.net/yourusername"><FaBehance /></a>
            <a
              href="mailto:amanmaurya@gmail.com?subject=Hello%20Aman&body=Hi%20Aman,"
              className="email-link"
            >
              <FaEnvelope />
            </a>
          </div>

        </div>

        {/* Contact Form */}
        <form
          className="contact-form"
          data-aos="fade-left"
          action="mailto:amanmaurya@gmail.com"
          method="POST"
          encType="text/plain"
        >
          <div className="input-group">
            <input type="text" name="Name" required />
            <label>Name</label>
          </div>

          <div className="input-group">
            <input type="email" name="Email" required />
            <label>Email</label>
          </div>

          <div className="input-group">
            <textarea name="Message" required></textarea>
            <label>Message</label>
          </div>

          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
