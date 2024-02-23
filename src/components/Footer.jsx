import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "../styles/Footer.scss";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className='footer'>
      <Row>
        <Col md={12}>
          <div className='footer__navigation'>
            <h1 className='yellow'>Let&rsquo;s Connect</h1>
            <ul className='footer__list'>
              <li className='footer__item'>
                <a
                  href='https://github.com/jaredNielson33'
                  target='_blank'
                  rel='noreferrer'
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className='footer__item'>
                <a
                  href='https://www.linkedin.com/in/jared-nielson-0518/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className='footer__item'>
                <a
                  href='https://www.facebook.com/jared.nielson.33'
                  target='_blank'
                  rel='noreferrer'
                >
                  <AiFillFacebook />
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <p className='footer__copyright'>
            Copyright © {year} Jared Nielson &nbsp;<sub>•</sub>&nbsp; All rights
            reserved
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
