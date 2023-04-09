import React, { useState } from "react";
import { Container, Button } from "@mui/material";
import "../css/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  function toggler() {
    setToggle((prevValue) => !prevValue);
  }

  return (
    <div className="header">
      <Container>
        <div className="container">
          <div className="logo">Karim</div>
          <div
            onClick={toggler}
            className={toggle ? "active drop" : "drop"}
          ></div>
          <div className={toggle ? "toggled-nav" : "non-active toggled-nav"}>
            <ul>
              <Link to="/" className="no-underline">
                <li>Home</li>
              </Link>

              <Link to="/about" className="no-underline">
                <li>About</li>
              </Link>

              <Link to="/skills" className="no-underline">
                <li>Skills</li>
              </Link>

              <Link to="/portfolio" className="no-underline">
                <li>Portfolio</li>
              </Link>

              <Link to={"/contact"} className="no-underline">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <nav>
            <ul>
              <Link to="/" className="no-underline">
                <li>Home</li>
              </Link>

              <Link to="/about" className="no-underline">
                <li>About</li>
              </Link>

              <Link to="/skills" className="no-underline">
                <li>Skills</li>
              </Link>

              <Link to="/portfolio" className="no-underline">
                <li>Portfolio</li>
              </Link>

              <Link to={"/contact"} className="no-underline">
                <li>Contact</li>
              </Link>
            </ul>
          </nav>
          <a href="https://wa.me/96176653295" className="no-underline">
            <Button className="call-btn" variant="outlined">
              Call me
            </Button>
          </a>
        </div>
      </Container>
    </div>
  );
}
