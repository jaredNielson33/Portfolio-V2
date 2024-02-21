import React from "react";
import Typewriter from "typewriter-effect";
import "../../styles/typewritter.scss";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Developer",
          "MERN Stack Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
