import WorkflowCard from '../../UI/Card/WorkflowCard';

const workflowStages = [
  {
    number: "01",
    title: "Research & Planning",
    description:
      "Analysis of competitors, studying customer desires, and drawing up a comprehensive work plan to ensure project success.",
    technologies: ["Figma", "Notion", "Miro", "Jira"],
  },
  {
    number: "02",
    title: "Design & Prototyping",
    description:
      "Creation of a professional layout and design system, including interactive prototyping for better user experience.",
    technologies: ["Figma", "Adobe XD"],
  },
  {
    number: "03",
    title: "Development & Delivery",
    description:
      "Development of a modern, fast website or application that meets the best modern practices and performance standards.",
    technologies: ["React", "TypeScript", "Node.js", "Git", "Next.js", "Vercel"],
  },
];


export function Workflow() {
  return (
    <section style= {{
      padding: '4rem 2rem',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'var(--color-background-default)',
    }}>
      <div style={ {
  maxWidth: '1200px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}}>
        <div style={{
  width: '100%',
  textAlign: 'center',
  marginBottom: '3rem',
}}>
          <h3 style={ {
  display: 'inline-block',
  fontSize: '0.875rem',
  fontWeight: '500',
  color: 'var(--color-primary-main)',
  marginBottom: '0.5rem',
  fontFamily: 'monospace',
}}>
            &lt; How I Work /&gt;
          </h3>
          <h2 style={{
  fontSize: '2.5rem',
  fontWeight: 'bold',
  color: 'var(--color-text-primary)',
  margin: 0,
}}>
            My Workflow
          </h2>
        </div>

        <div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
  width: '100%',
  padding: '1rem',
  marginBottom:  '4rem',
}}>
          {workflowStages.map((stage, index) => {
            const randomDelay = Math.random() * 5;
            const randomDuration = 12 + Math.random() * 8;
            
            return (
              <WorkflowCard
                key={index}
                stage={stage}
                index={index}
                randomDelay={randomDelay}
                randomDuration={randomDuration}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Workflow;
