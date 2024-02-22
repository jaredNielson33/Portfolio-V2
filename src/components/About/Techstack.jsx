import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiSass,
  DiAngularSimple,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="card__icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="card__icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="card__icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="card__icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="card__icons">
        <DiAngularSimple />
      </Col>
      <Col xs={4} md={2} className="card__icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="card__icons">
        <DiSass />
      </Col>
      <Col xs={4} md={2} className="card__icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="card__icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="card__icons">
        <SiFirebase />
      </Col>
    </Row>
  );
}

export default Techstack;
