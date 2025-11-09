import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, 
faMdb, 
faJira, faConnectdevelop, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labels_1 = [
    "Go",
    "React",
    "Node",
    "Python",
    "Redux",
    "GraphQL"
];

const labels_2 = [
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "Jenkins",
    "Helm"
];

const labels_3 = [
    "OpenAI",
    "Databricks",
    "Pinecone",
    "Slack Bot"
];

const labels_4 = [
    "Kafka",
    "gRPC",
    "REST",
    "Microservices"
];

const labels_5 = [
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Cassandra"
];

const labels_6 = [
    "Jira",
    "Confluence",
    "Agile",
    "Mentorship"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faConnectdevelop} size="3x" />
                        <h3>Programming & Development</h3>
                        <p>Strong foundation in backend and frontend development, capable of building high-performance, scalable web applications from the ground up using modern frameworks and languages.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labels_1.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x" />
                        <h3>DevOps & Cloud Engineering</h3>
                        <p>Expert in deploying, scaling, and automating applications using containerization and cloud-native practices. Experienced in CI/CD, monitoring, and infrastructure management.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labels_2.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <h3>AI, Machine Learning & GenAI</h3>
                        <p>Hands-on experience developing GenAI-powered applications and data pipelines using modern AI frameworks and LLM integration for intelligent automation.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labels_3.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faAws} size="3x" />
                        <h3>System Architecture & Microservices</h3>
                        <p>Architected and optimized distributed systems and event-driven applications with a focus on scalability, reliability, and maintainability.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labels_4.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faMdb} size="3x" />
                        <h3>Database & Data Engineering</h3>
                        <p>Experienced in designing, optimizing, and maintaining data solutions across SQL, NoSQL, and distributed environments.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labels_5.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faJira} size="3x" />
                        <h3>Agile, Collaboration & Leadership</h3>
                        <p>Led cross-functional teams, mentored developers, and delivered enterprise-scale projects using Agile practices with strong documentation and collaboration.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labels_6.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;