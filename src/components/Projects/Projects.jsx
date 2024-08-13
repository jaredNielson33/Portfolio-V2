import { Container } from "react-bootstrap";
import CarHub from "../../assets/Projects/car-hub.png";
import EMRALD from "../../assets/Projects/EMRALD.png";
import ProjectCard from "./ProjectCards";
import Curve from "../Waves/Curve";
import "./Projects.scss";

function Projects() {
  return (
    <Container fluid className='projects px-0'>
      <Container fluid className='projects__heading-container'>
        <h1 className='projects__heading'>
          My<strong className='yellow ms-2'>Projects</strong>
        </h1>
        <Curve />
      </Container>
      <Container fluid className='projects__card-container'>
        <ProjectCard
          imgPath={EMRALD}
          isBlog={false}
          title='EMRALD Model Editor'
          description='Complete UI refresh of the open-source INL application EMRALD Model Editor, migrating from Angular.js to React'
          ghLink='https://github.com/idaholab/EMRALD'
          demoLink='https://emrald3app.inl.gov/'
        />
        <ProjectCard
          imgPath={CarHub}
          isBlog={false}
          title='Car Hub'
          description='JS Mastery practice project for Next.JS application using React, Typescript, Headless UI, and Tailwind'
          ghLink='https://github.com/jaredNielson33/cars_showcase'
          demoLink='https://cars-showcase-ts9e.vercel.app/'
        />
      </Container>
    </Container>
  );
}

export default Projects;
