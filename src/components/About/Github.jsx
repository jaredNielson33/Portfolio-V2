import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="yellow">Code</strong>
      </h1>
      <GitHubCalendar
        username="jaredNielson33"
        blockSize={15}
        blockMargin={5}
        color="#52688F"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
