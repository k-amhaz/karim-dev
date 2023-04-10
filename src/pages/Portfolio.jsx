import React from "react";
import "../css/Portfolio.css";
import { Container } from "@mui/material";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <Container>
        <div className="portfolio-container">
          <div className="text">
            <h4>Portfolio</h4>
            <p>
              Let my work speak for itself: Showcasing my skills through each
              project...
            </p>
          </div>
          <div className="projects">
            <a href="https://ko-commerce.netlify.app/" className="no-underline">
              <motion.div
                className="card"
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 60, opacity: 0.0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="img">
                  <img src="/e-commerce.png" alt="E-commerce" />
                </div>
                <h6>E-commerce project</h6>
              </motion.div>
            </a>
            <a
              href="https://6432540ef7271a59becfd1d8--lucky-kheer-937c9e.netlify.app/"
              className="no-underline"
            >
              <motion.div
                className="card"
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 60, opacity: 0.0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="img">
                  <img src="api.png" alt="Api project" />
                </div>
                <h6>API project</h6>
              </motion.div>
            </a>
            <a
              href="https://travel-lebanon.netlify.app/"
              className="no-underline"
            >
              <motion.div
                className="card"
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 60, opacity: 0.0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="img">
                  <img src="/tourism.png" alt="Tourism website" />
                </div>
                <h6>Tourism website</h6>
              </motion.div>
            </a>
            <a
              href="https://ko-memory-game.netlify.app/"
              className="no-underline"
            >
              <motion.div
                className="card"
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 60, opacity: 0.0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="img">
                  <img src="/momory-cards.jpg" alt="Memory cards game" />
                </div>
                <h6>Memory cards game</h6>
              </motion.div>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
