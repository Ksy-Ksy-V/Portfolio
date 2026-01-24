import React from 'react';
import './Workflow.css';

const workflowStages = [
  {
    number: "01",
    title: "Research & Planning",
    description:
      "Analysis of competitors, studying customer desires, and drawing up a comprehensive work plan to ensure project success.",
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description:
      "Creation of a professional layout and design system, including interactive prototyping for better user experience.",
  },
  {
    number: "03",
    title: "Development & Delivery",
    description:
      "Development of a modern, fast website or application that meets the best modern practices and performance standards.",
  },
];

export function Workflow() {
  return (
    <section className="workflow-section">
      <div className="workflow-container">
        <div className="workflow-header">
          <span className="workflow-label">
            &lt; How I Work /&gt;
          </span>
          <h2 className="workflow-title">
            My Workflow
          </h2>
        </div>

        <div className="workflow-grid">
          {workflowStages.map((stage, index) => (
            <div
              key={index}
              className="workflow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="workflow-card-overlay"></div>

              <div className="workflow-card-content">
                <div className="workflow-number">
                  {stage.number}
                </div>

                <h3 className="workflow-card-title">
                  {stage.title}
                </h3>

                <p className="workflow-card-description">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Workflow;
