import React, { useState, useEffect } from "react";
import "../css/Slider.css";
import skills from "../data";
import { Container } from "@mui/material";

export default function Slider() {
  const [skillsArray] = useState(skills);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = skillsArray.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, skillsArray]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="title up">
        <h2>Skills</h2>
      </div>
      <div className="section-center">
        {skillsArray.map((item, indexSkill) => {
          const { id, image, title, experience, percentage } = item;
          let position = "nextSlide";
          if (indexSkill === index) {
            position = "activeSlide";
          }
          if (
            indexSkill === index - 1 ||
            (index === 0 && indexSkill === skillsArray.length - 1)
          ) {
            position = "lastSlide ";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={title} className="person-img" />
              <h4 className="item-title">{title}</h4>
              <p className="title experience">
                <span> Experience:</span> {experience} Years
              </p>
              <div className="experience text skilled">
                <span> Skilled:</span>
                <div className="main-stick">
                  <span
                    className="percentage-stick"
                    style={{
                      width: `${percentage}%`,
                    }}
                  ></span>
                </div>
              </div>
            </article>
          );
        })}
        <button
          className="prev"
          onClick={() => {
            setIndex(index - 1);
          }}
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <button
          className="next"
          onClick={() => {
            setIndex(index + 1);
          }}
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
}
