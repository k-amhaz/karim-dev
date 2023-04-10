import React from "react";
import "../css/Home.css";
import { Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="home">
      <Container>
        <div className="home-container">
          <motion.div
            className="texts"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 60, opacity: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="hi">
              Hi,
              <br />
              It's Karim
            </p>
            <h4>CODING ARTIST</h4>
            <p>Never hear about it?</p>
            <Link className="no-underline" to={"/about"}>
              <Button className="button" variant="outlined">
                Explore more
              </Button>
            </Link>
          </motion.div>
          <div className="social">
            <div className="img-holder">
              <motion.img
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 60, opacity: 0.1 }}
                transition={{ duration: 0.6 }}
                src="/my-photo.jpeg"
                alt=""
              />
            </div>
            <motion.div
              className="icons"
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 60, opacity: 0.1 }}
              transition={{ duration: 0.6 }}
            >
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
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
}
