import { Container, Row, Col } from "react-bootstrap";
import Home2 from "./Home2";
import Type from "./Type";
import Wave from "../Waves/Wave";
import "../../styles/home.scss";
import "../../styles/waves.scss";

function Home() {
  return (
    <section>
      <Container fluid className='home-section' id='home'>
        <Container className='home-content'>
          <Row>
            <Col md={12} className='home-header'>
              <h1 style={{ paddingBottom: 15 }} className='heading'>
                Hi There!{" "}
                {/* <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span> */}
              </h1>

              <h1 className='heading-name'>
                I&rsquo;M
                <strong className='main-name'> JARED NIELSON</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
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
