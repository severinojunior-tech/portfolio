import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="01/2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Go Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">AiRISTA (Sparks, MD)</h4>
            <p>
              Built and optimized scalable <strong>Golang</strong> and <strong>Node.js</strong> microservices for event-driven systems. <br/>
              Migrated legacy <strong>Python</strong> services to Go, cutting latency and improving concurrency. <br/>
              Developed <strong>Kafka</strong> pipelines, <strong>REST/gRPC APIs</strong>, and deployed workloads via <strong>Kubernetes (EKS)</strong> and <strong>Helm</strong>. <br/>
              Created a <strong>Slack GenAI bot</strong> integrated with <strong>OpenAI</strong> and <strong>Pinecone</strong> RAG pipelines. <br/>
              Automated <strong>CI/CD</strong> with Jenkins, enhanced observability with <strong>OpenTelemetry</strong>, and visualized metrics using <strong>React</strong>, <strong>Prometheus</strong>, and <strong>Grafana</strong>. <br/>
              Leveraged <strong>AWS</strong> and <strong>Databricks</strong> for AI-driven services and cloud deployments.<br/>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="07/2023 - 12/2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Eduforma (Lyon, France)</h4>
            <p>
              Developed full-stack web applications with <strong>React.js</strong> and <strong>Golang</strong>, improving performance and responsiveness.<br />
              Migrated large-scale <strong>Python/Django</strong> systems to Go, reducing latency by 30%.<br />
              Automated design workflows using <strong>Cadence tools</strong> and custom Go scripts.<br />
              Managed <strong>AWS</strong> infrastructure and implemented <strong>TypeScript</strong> for type safety and maintainability.<br />
              Built a React + Go property management platform, reducing admin overhead by 25%, and integrated <strong>SAP FICO</strong> modules to enhance financial reporting accuracy.<br />
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="11/2022 - 06/2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Uber (CA, US)</h4>
            <p>
              Built robust backends with <strong>Golang</strong> and <strong>Python</strong>, improving efficiency and reliability.<br />
              Automated <strong>CI/CD</strong> pipelines using <strong>Jenkins</strong> and optimized deployments with <strong>Kubernetes</strong> and <strong>Helm</strong>.<br />
              Managed cloud infrastructure with <strong>AWS</strong>, implementing backup and recovery via <strong>S3</strong>.<br />
              Streamlined business processes through <strong>Cadence</strong> workflows, <strong>Kafka</strong> integration, and <strong>SAP</strong> module customization.<br />
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="07/2021 - 11/2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Sr. Golang Developer | Team Lead</h3>
            <h4 className="vertical-timeline-element-subtitle">Eduforma (Lyon, France)</h4>
            <p>
              Led development of high-performance <strong>React.js</strong> and <strong>Golang</strong> applications, delivering scalable, responsive solutions.<br />
              Built reusable components and optimized <strong>Redux</strong> state management, improving efficiency and user satisfaction.<br />
              Developed secure <strong>Golang REST APIs</strong> integrating <strong>MySQL</strong>, <strong>MongoDB</strong>, and third-party services.<br />
              Deployed <strong>serverless</strong> architectures with <strong>AWS Lambda</strong>, <strong>API Gateway</strong>, and <strong>CDK</strong> for cost-efficient scalability.<br />
              Automated <strong>CI/CD</strong> pipelines using <strong>Jenkins</strong> and <strong>Kubernetes</strong>, enhancing delivery speed and reliability.<br />
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="07/2021 - 11/2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Golang Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Microsoft (TX, US)</h4>
            <p>
              Built responsive <strong>React.js</strong> applications with optimized UI/UX, increasing user engagement by 80%.<br />
              Collaborated with teams to enhance usability, reducing bounce rates by 20%.<br />
              Integrated <strong>Jenkins</strong> with <strong>Git</strong> for automated <strong>CI/CD</strong> build triggers.<br />
              Used <strong>Redux</strong> and <strong>Golang/Java gRPC</strong> for efficient data handling, cutting load times by 15%.<br />
              Deployed scalable apps on <strong>AWS</strong>, leveraging <strong>Docker</strong> and <strong>Kubernetes</strong> for containerized microservices.<br />
              Worked with <strong>MongoDB</strong>, <strong>Cassandra</strong>, and <strong>MySQL</strong>, ensuring reliable data storage and access.<br />
              Conducted code reviews that improved maintainability by 85%.<br />
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;