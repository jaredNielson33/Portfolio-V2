import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../assets/about.png";
import Toolstack from "./Toolstack";
import WaveOpacity from "../Waves/WaveOpacity";
import "../../styles/about.scss";
import "../../styles/waves.scss";

function About() {
  return (
    <>
      <Container fluid className='about-section'>
        <Container>
          <Row
            className="justify-content-center position-relative p-3"
          >
            <Col md={12} className="about-content">
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                About <strong className='yellow'>Me</strong>
              </h1>
              <Aboutcard />
            </Col>
            {/* <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col> */}
          </Row>
        </Container>
        <WaveOpacity />
      </Container>

      <Container fluid className='skills-section'>
        <Container>
          <Row>
            <Col md={12} style={{ textAlign: "center" }}>
              <h1 className='project-heading'>
                Professional <strong className='yellow'>Skillset </strong>
              </h1>

              <Techstack />

              <h1 className='project-heading'>
                <strong className='yellow'>Tools</strong> I use
              </h1>
              <Toolstack />

              {/* <Github /> */}
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default About;
