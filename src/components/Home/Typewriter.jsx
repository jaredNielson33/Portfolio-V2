import Typewriter from "typewriter-effect";
import "./Typewriter.scss";

function TypewriterComponent() {
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

export default TypewriterComponent;
