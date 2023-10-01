import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import finplan from "../../Assets/Projects/finplan.png";
import sms from "../../Assets/Projects/sms-categorizer.png";
import minco2 from "../../Assets/Projects/minco2.png";
import weccc from "../../Assets/Projects/weccc.png";
import ecommerce from "../../Assets/Projects/E-commerce.png";
import adventure from "../../Assets/Projects/adventure.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weccc}
              isBlog={false}
              title="Weccc"
              description="Web based Information Management System (IMS) build with Node.js, react.js, PowerBI, Material-UI, and MongoDB. Have volunteer and coordinator to maintain and keep track of the treatment of hospice people."
              ghLink="https://github.com/nisarg-shihora/weccc/tree/main"
              demoLink="https://weccc-ims-app.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adventure}
              isBlog={false}
              title="Adventure Booking System"
              description="Website for booking adventure and flight tickets developed with python Django web framework and sqlite database."
              ghLink="https://github.com/nisarg-shihora/Adventure_Booking"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={minco2}
              isBlog={false}
              title="MinCO2"
              description="Green software made using React.js, Jest. It shows the carbon emission based on your item usage. It also suggest the reducing the carbon emission from environment."
              ghLink="https://github.com/nisarg-shihora/MinCo2"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={finplan}
              isBlog={false}
              title="FinPlan"
              description="Developed a cutting-edge financial planning app using Flutter, enabling seamless expense and income management. Delivered intuitive user experience and robust features, ensuring efficient tracking and informed decision-making."
              ghLink="https://github.com/nisarg-shihora/Finplan"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-commerce"
              description="Designed a sleek and user-friendly front-end interface for an E-commerce app utilizing JSON API, Flutter, and Dart. Implemented intuitive navigation, visually appealing product displays, enhancing user engagement and satisfaction."
              ghLink="https://github.com/nisarg-shihora/E-commerce-App"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sms}
              isBlog={false}
              title="SMS Categorizer"
              description="Developed a cutting-edge Android application leveraging Java, machine learning algorithms, and NLP techniques to create an intelligent SMS categorization system. Implemented advanced algorithms to accurately classify incoming SMS messages into diverse categories, optimizing user experience."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
