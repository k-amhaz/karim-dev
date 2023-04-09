import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "@mui/material";
import "../css/About.css";

export default function About() {
  return (
    <div className="about">
      <Container>
        <div className="about-container">
          <div className="img-holder">
            <img src="/my-photo.jpeg" alt="My Photo" />
            <div className="buttons">
              <Link to="/portfolio" className="no-underline">
                <Button className="about-btn one" variant="contained">
                  My Portfolio
                </Button>
              </Link>
              <Link to="/skills" className="no-underline">
                <Button className="about-btn two" variant="outlined">
                  My Skills
                </Button>
              </Link>
            </div>
          </div>
          <div className="info-container">
            <div className="info-grid">
              <div className="part">
                <h4>Who am I?</h4>
                <p>
                  Hey there! I'm Karim Amhaz, a high school student from Lebanon
                  who loves web development. I've been coding for three years
                  now and have a real passion for writing clean, efficient code
                  that's not just functional, but a work of art.
                </p>
              </div>
              <div className="part">
                <h4>My work</h4>
                <p>
                  When it comes to my work, I strive for excellence. My goal is
                  to create websites that not only work well, but also look
                  great and are easy to use. I take great pride in my work and
                  am committed to delivering projects that exceed my clients'
                  expectations.
                </p>
              </div>
              <div className="part">
                <h4>Hobbies</h4>
                <p>
                  I'm always eager to learn and explore new things. Reading up
                  on the latest web development trends and techniques is a daily
                  habit of mine. I believe that there's always something new to
                  discover and that's what keeps me excited about what I do.
                </p>
              </div>
              <div className="part">
                <h4>Thanks! ❤</h4>
                <p>
                  Thanks for checking out my profile. If you're looking for a
                  talented web developer who's passionate about their work,
                  let's chat!{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
