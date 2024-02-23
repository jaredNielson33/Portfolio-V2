import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import WaveOpacity from "../Waves/WaveOpacity";
import "./About.scss";
import WorkPlaces from "./WorkPlaces";

function About() {
  return (
    <>
      <Container fluid className='about'>
        <Container>
          <Row className='justify-content-center position-relative p-3'>
            <Col md={12} className='about__content'>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                About <strong className='yellow'>Me</strong>
              </h1>
              <Aboutcard />
            </Col>
          </Row>
        </Container>
        <WaveOpacity />
      </Container>

      <Container fluid className='skills'>
        <Container>
          <Row className='mb-3'>
            <Col md={12} style={{ textAlign: "center" }}>
              <h1 className='project-heading'>
                Places I've <strong className='yellow'>Worked </strong>
              </h1>
              <WorkPlaces />
            </Col>
          </Row>
          <Row>
            <Col md={12} style={{ textAlign: "center" }}>
              <h1 className='project-heading'>
                Professional <strong className='yellow'>Skillset </strong>
              </h1>

              <Techstack />
            </Col>
          </Row>

          <Row>
            <Col md={12} style={{ textAlign: "center" }}>
              <h1 className='project-heading'>
                <strong className='yellow'>Tools</strong> I use
              </h1>
              <Toolstack />
            </Col>
          </Row>
          {/* <Github /> */}
        </Container>
      </Container>
    </>
  );
}

export default About;
