import { Container} from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import chatify from "../../assets/Projects/chatify.png";
import Curve from "../Waves/Curve";
import "./projects.scss";

function Projects() {
  return (
    <Container fluid className="project-section px-0">
      <Container fluid className="project-heading-container">
        <h1 className="project-heading">
          My Recent <strong className="yellow">Works </strong>
        </h1>
        <p className="text-white mb-5">
          Here are a few projects I've worked on recently.
        </p>
        <Curve />  
      </Container>
      <Container fluid className="project-card-container">
          <div className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </div>
      </Container>
    </Container>
  );
}

export default Projects;
