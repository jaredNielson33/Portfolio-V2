import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../assets/Jared_Nielson_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "./Resume.scss";

function Resume() {
  const width = window.innerWidth;

  return (
    <div>
      <Container fluid className="resume">
        <Row className="resume__container">
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            className="resume__button"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume__row">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row className="resume__container">
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            className="resume__button"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;
