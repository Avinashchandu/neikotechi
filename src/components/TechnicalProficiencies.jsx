import React from 'react';
import './TechnicalProficiencies.css';
import { Container } from 'react-bootstrap';

const skills = [
  "Java", "Python",
  "Servlets", "JSP",
  "SQL",
  "HTML", "CSS", "JavaScript",
  "Spring", "Spring Boot", "React (Basics)",
  "RESTful API ",
  "Data Structures and Algorithms",
  "OOPs"
];

const TechnicalProficiencies = () => {
    return (
        <Container fluid style={{backgroundColor:"#352F44"}}>
        <div className="technical-container">
            <h1 className="technical-title">Technical Proficiencies</h1>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div style={
                        {
height:"100px",width:"150px",display:"flex",alignItems:"center",justifyContent:"center"
                        }
                    } key={index} className="skill-box">
                        {skill}
                    </div>
                ))}
            </div>
        </div>
        </Container>
    );
};

export default TechnicalProficiencies;
