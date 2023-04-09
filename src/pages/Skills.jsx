import { Container } from "@mui/system";
import React from "react";
import Slider from "../components/Slider";

export default function Skills() {
  return (
    <div className="skills">
      <Container>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Slider />
        </div>
      </Container>
    </div>
  );
}
