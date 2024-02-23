import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className='home-about' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about__description'>
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className='yellow'> INTRODUCE </span> MYSELF
            </h1>
            <p className='home-about__body'>
              I&rsquo;m Jared Nielson, a seasoned web developer with seven years
              of experience specializing in frontend frameworks and
              technologies. My journey in web development began with a spark of
              curiosity and a love for problem-solving. Over the years, this
              passion has only grown stronger, driving me to stay at the
              forefront of industry trends and technologies.
              <br />
              <br />
              In each project I undertake, my goal is simple: to build
              intuitive, user-centric applications that not only meets but
              exceeds expectations. Whether it&rsquo;s crafting responsive user
              interfaces, optimizing performance, or integrating cutting-edge
              features, I approach every task with dedication, attention to
              detail, and excellence.
            </p>
          </Col>
          <Col md={4} className='avatar'>
            <Tilt>
              <img src={myImg} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
