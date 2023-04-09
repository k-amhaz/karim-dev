import React from "react";
import { Container, TextField } from "@mui/material";
import "../css/Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <Container>
        <div className="contact-container">
          <div className="text">
            <h4>Contact</h4>
            <p>Interested in working together?</p>
          </div>
          <form className="form">
            <input
              name="name"
              type="name"
              class="feedback-input"
              required
              placeholder="Name"
              style={{ color: "black" }}
            />
            <input
              name="email"
              type="email"
              class="feedback-input"
              placeholder="Email"
              required
              style={{ color: "black" }}
            />
            <textarea
              name="text"
              style={{ color: "black" }}  
              class="feedback-input"
              placeholder="Comment"
              required
            ></textarea>
            <input type="submit" value="SUBMIT" />
          </form>
          <div className="icons">
            <a href="https://www.instagram.com/karim.m.amhaz/">
              <img src="/instagram.png" alt="My instagram account" />
            </a>
            <a href="https://www.linkedin.com/in/karim-amhaz/">
              <img src="/linkedin.png" alt="My LinkedIn account" />
            </a>
            <a href="https://github.com/k-amhaz">
              <img src="/github.png" alt="My Github account" />
            </a>
            <a href="https://wa.me/96176653295">
              <img src="/whatsapp.png" alt="My Whatsapp number" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
