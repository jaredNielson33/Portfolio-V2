import { Col, Row } from "react-bootstrap";
import INL from "../../assets/WorkLogos/INL-logo.png";
import GM from "../../assets/WorkLogos/GM-logo.png";
import Kyani from "../../assets/WorkLogos/kyani-logo.png";
import Bowlero from "../../assets/WorkLogos/bowlero-logo.png";

function WorkPlaces() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="card__icons">
        <img src={INL} className="img-fluid" alt="INL-Logo" />
      </Col>
      <Col xs={4} md={2} className="card__icons">
        <img src={Bowlero} className="img-fluid" alt="Bowlero-Logo" />
      </Col>
      <Col xs={4} md={2} className="card__icons">
        <img src={Kyani} className="img-fluid" alt="Kyani-Logo" />
      </Col>
      <Col xs={4} md={2} className="card__icons">
        <img src={GM} className="img-fluid" alt="GM-Logo" />
      </Col>
    </Row>
  );
}

export default WorkPlaces;
