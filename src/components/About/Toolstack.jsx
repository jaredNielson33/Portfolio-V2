import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiMacos,
  SiMiro
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="card__icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="card__icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="card__icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="card__icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="card__icons">
        <SiMiro />
      </Col>
    </Row>
  );
}

export default Toolstack;
