import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p className='about-text'>
            I&apos;m a family-oriented individual, blessed with a supportive
            wife who constantly inspires me to strive for excellence. Together,
            we cherish the joy and adventure brought by our three adorable
            children, who undoubtedly light up our lives and keep each day
            filled with excitement.
            <br />
            <br />
            I am currently employed as a software developer at the Idaho Nation
            Laboratory.
            <br />
            <br />
            In my downtime, I&apos;m often enjoying time with my family. I have
            a passion for activities such as playing pickleball, golfing, and
            flying RC air planes. I also love exploring new destinations through
            travel, delving into DIY projects, and immersing myself in
            technologies.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
