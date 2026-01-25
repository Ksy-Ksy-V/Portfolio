import cinePeekImg from '../img/projectPrev01.jpg';
import catGameImg from '../img/projectPrev02.png';
import kitoImg from '../img/projectPrev03.png';

export const heroSectionData = {
  greeting: "< Hello, I'm Ksenia Voitikh/>",
  title: {
    main: "Front-End Developer",
    secondary: "& Designer"
  },
  description: [
    "Crafting dynamic, user-focused web applications",
    "with a blend of technical precision and creativity."
  ],
  descriptionsMobile: [
    "Crafting dynamic, user-focused",
    "web applications",
    "with a blend of technical",
    "precision and creativity."
  ],
  typingSpeed: 100,
  buttons: {
    primary: "Download CV",
    secondary: "View Projects"
  }
};

export const techStackData = {
  technologies: [
    'TypeScript',
    'JavaScript',
    'React',
    'HTML5',
    'Next.js',
    'Node.js',
    'CSS3',
    'Tailwind',
    'Git',
    'Figma',
    'Photoshop',
    'Illustrator',
    'Responsive Design',
    'Web Performance',
  ]
};

export const workflowData = {
  sectionLabel: "< How I Work />",
  sectionTitle: "My Workflow",
  stages: [
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
  ]
};

export const projectsData = {
  sectionLabel: "< Recent Work />",
  sectionTitle: "Featured Projects",
  projects: [
    {
      title: "CinePeek",
      date: "April 2024",
      description:
        "A dynamic web application designed for movie and TV show enthusiasts to discover and track their favorite content.",
      image: cinePeekImg,
      tags: ["React", "API", "TypeScript"],
      route: "/portfolio-details/1",
    },
    {
      title: "Personal Portfolio",
      date: "July 2024",
      description:
        "Modern portfolio website showcasing projects and skills with clean design and smooth animations.",
      image: null,
      tags: ["React", "Motion", "Design"],
      route: "/",
    },
    {
      title: "Cat Game",
      date: "August 2024",
      description:
        "A 2D retro-style platformer with pixelated graphics reminiscent of classic arcade games.",
      image: catGameImg,
      tags: ["Canvas", "JavaScript", "Game Dev"],
      route: "/portfolio-details/2",
    },
    {
      title: "Kito",
      date: "September - December 2024",
      description:
        "A comprehensive web app for anime fans to explore, organize, and track their favorite shows.",
      image: kitoImg,
      tags: ["React", "Database", "UI/UX"],
      route: "/portfolio-details/3",
    },
  ]
};
