import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import TypewriterComponent from "./Typewriter";
import Wave from "../Waves/Wave";
import "./Home.scss";

function Home() {
  return (
    <section>
      <Container fluid className='home' id='home'>
        <Container className='home__content'>
          <Row>
            <Col md={12} className='home-header'>
              <h1 style={{ paddingBottom: 15 }} className='home__content-heading'>
                Hello!
              </h1>

              <h1 className='home__content-heading-name'>
                I&rsquo;M
                <strong className='home__content-main-name'> JARED NIELSON</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <TypewriterComponent />
              </div>
            </Col>
          </Row>
        </Container>
        <Wave />
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;
