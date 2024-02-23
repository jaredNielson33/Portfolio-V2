import { Container} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Curve from "../Waves/Curve";
import "./Projects.scss";

function Projects() {
  return (
    <Container fluid className="project-section px-0">
      <Container fluid className="project-heading-container">
        <h1 className="project-heading">
          My Recent <strong className="yellow">Works </strong>
        </h1>
        <p className="text-white mb-5">
          My <strong className="yellow">Projects</strong>
        </p>
        <Curve />  
      </Container>
      <Container fluid className="project-card-container">
          <div className="project-card">
            <ProjectCard
              imgPath='path-to-image'
              isBlog={false}
              title="RC Speed"
              description="Under construction"
              ghLink="https://github.com/jaredNielson33"
              demoLink="https://github.com/jaredNielson33"
            />
          </div>
      </Container>
    </Container>
  );
}

export default Projects;
