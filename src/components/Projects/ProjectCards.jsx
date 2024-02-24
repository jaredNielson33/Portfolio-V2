import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({ imgPath, title, description, ghLink, demoLink, isBlog }) => {
  return (
    <div className="project-card">
      <Card>
        <Card.Img variant="top" src={imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title><strong>{title}</strong></Card.Title>
          <Card.Text>
            {description}
          </Card.Text>

          <div className="d-flex justify-content-center">
          <Button variant="primary" href={ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {isBlog ? "Blog" : "GitHub"}
          </Button>
          {"\n"}
          {"\n"}

          {!isBlog && demoLink && (
            <Button
              variant="primary"
              href={demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

ProjectCard.propTypes = {
  imgPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ghLink: PropTypes.string.isRequired,
  demoLink: PropTypes.string,
  isBlog: PropTypes.bool.isRequired,
};

export default ProjectCard;