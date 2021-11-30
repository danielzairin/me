import { Container, Row, Col } from "reactstrap";
import { BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs";

function App() {
  return (
    <div className="py-3">
      <Container fluid>
        <iframe
          src="https://www.youtube.com/embed/rx8J1Ib2Esk?modestbranding=1"
          title="YouTube video player"
          frameBorder="0"
          allow="fullscreen"
          className="w-100 vh-100"
        ></iframe>
      </Container>
      <Container className="my-5">
        <h1>About Me</h1>
        <p>
          I am Daniel Zairin, a computer science student at Universiti Sains
          Malaysia. I started learning programming and computer science with the
          help of free resources on the Internet. During my secondary school
          education, I was a student heading for failure, but my teachers never
          gave up on me. I am forever grateful to my teachers.
          <b> My goal in life is to always give back to the community.</b> In my
          free time, I enjoy reading books and playing video games.
        </p>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <img
              alt="about-me-col1"
              className="img-fluid shadow"
              src="me.jpg"
            />
          </Col>
          <Col>
            <Row>
              <Col>
                <img
                  alt="about-me-col2-row1"
                  className="img-fluid shadow"
                  src="with-naz.png"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <img
                  alt="about-me-col2-row2"
                  className="img-fluid shadow mt-3"
                  src="laptop.png"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <h1>Notable Achievements</h1>
        <p>
          My biggest achievements are a reflection of my academic performance. I
          have been on the Dean's List for School of Computer Science, USM for 5
          semesters in a row. I am also the recipient of the "Best Intern Award"
          from my school during my internship with Telebort.
        </p>
      </Container>
      <Container fluid>
        <Row>
          <Col xs={5}>
            <img
              alt="achievements-col1"
              className="img-fluid shadow"
              src="deans-list.png"
            />
          </Col>
          <Col>
            <img
              alt="achievements-col2"
              className="img-fluid shadow"
              src="best-intern.png"
            />
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <h1>In the Industry</h1>
        <p>
          In early to mid 2021 I had my first internship with Telebort, an
          education platform for kids to learn programming. I was an instructor
          and teached programming fundamentals, web and mobile development.
          Outside of class, I am one of the company's developers working on
          their custom e-learning platform and mobile app using the
          <b> React</b> and <b>React Native</b> frameworks. The internship was a
          huge part of my personal growth and has taught me how to be a leader
          and team player.
        </p>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <img
              alt="achievements-col2"
              className="img-fluid shadow"
              src="at-school.png"
            />
          </Col>
          <Col>
            <img
              alt="achievements-col2"
              className="img-fluid shadow"
              src="tech-team-a.png"
            />
          </Col>
          <Col>
            <img
              alt="achievements-col2"
              className="img-fluid shadow"
              src="dashboard.png"
            />
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <h1>Always Growing</h1>
        <p>
          I have a growth mindset and am always open to new challenges. I like
          to tackle projects in domains I am unfamiliar with, some of which I
          have already explored include machine learning, serverless web
          development, back-end as a service, and future web technologies such
          as Svelte. Currently, I am getting my hands dirty with the Internet of
          Things, natural language processing, and graphics programming. No
          matter how difficult a task may be, I am
          <b> intellectually fearless</b> and welcome the challenge.
        </p>
      </Container>
      <Container fluid>
        <Row>
          <img
            alt="achievements-col2"
            className="img-fluid shadow"
            src="teaching.png"
          />
        </Row>
        <Row className="mt-4">
          <Col>
            <img
              alt="achievements-col2"
              className="img-fluid shadow"
              src="peace.png"
            />
          </Col>
          <Col>
            <img
              alt="achievements-col2"
              className="img-fluid shadow"
              src="the-gang.png"
            />
          </Col>
          <Col>
            <img
              alt="achievements-col2"
              className="img-fluid shadow"
              src="virtual-class.png"
            />
          </Col>
        </Row>
      </Container>
      <Container className="my-5 text-center">
        <div className="mb-4">
          <a
            href="https://github.com/danielzairin"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub fontSize={50} />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-zairin-bbb584209"
            target="_blank"
            rel="noreferrer"
            className="mx-3"
          >
            <BsLinkedin fontSize={50} />
          </a>
          <a href="mailto:danielzairink@gmail.com">
            <BsEnvelope fontSize={50} />
          </a>
        </div>
        <a href="resume.pdf">Traditional Resume</a>
      </Container>
    </div>
  );
}

export default App;
