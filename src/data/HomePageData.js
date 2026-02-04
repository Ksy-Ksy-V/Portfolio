import cinePeekImg from '../img/projectPrev01.jpg'

export const heroSectionData = {
    greeting: "< Hello, I'm Ksenia Voitikh/>",
    title: {
        main: 'Front-End Developer',
        secondary: '& Designer',
    },
    description: [
        'Crafting dynamic, user-focused web applications',
        'with a blend of technical precision and creativity.',
    ],
    descriptionsMobile: [
        'Crafting dynamic, user-focused',
        'web applications',
        'with a blend of technical',
        'precision and creativity.',
    ],
    typingSpeed: 100,
    buttons: {
        primary: 'Download CV',
        secondary: 'View Projects',
    },
}

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
    ],
}

export const workflowData = {
    sectionLabel: '< How I Work />',
    sectionTitle: 'My Workflow',
    stages: [
        {
            number: '01',
            title: 'Research & Planning',
            description:
                'Analysis of competitors, studying customer desires, and drawing up a comprehensive work plan to ensure project success.',
            technologies: ['Figma', 'Notion', 'Miro', 'Jira'],
        },
        {
            number: '02',
            title: 'Design & Prototyping',
            description:
                'Creation of a professional layout and design system, including interactive prototyping for better user experience.',
            technologies: ['Figma', 'Adobe XD'],
        },
        {
            number: '03',
            title: 'Development & Delivery',
            description:
                'Development of a modern, fast website or application that meets the best modern practices and performance standards.',
            technologies: [
                'React',
                'TypeScript',
                'Node.js',
                'Git',
                'Next.js',
                'Vercel',
            ],
        },
    ],
}

export const projectsData = {
    sectionLabel: '< Recent Work />',
    sectionTitle: 'Featured Projects',
    projects: [
        {
            title: 'Pixel Play',
            description:
                'A 2D retro-style platformer with pixelated graphics reminiscent of classic arcade games.',
            image: `${process.env.PUBLIC_URL || ''}/img/card/pixelPlayPrevCard.png`,
            tags: ['Canvas API', 'JavaScript', 'Game Dev'],
            route: '/portfolio-details/2',
        },
        {
            title: 'Kito',
            description:
                'A comprehensive web app for anime fans to explore, organize, and track their favorite shows.',
            image: `${process.env.PUBLIC_URL || ''}/img/card/kitoPrevCard.png`,
            tags: ['React', 'TypeScript', 'Redux', 'MUI', 'Jikan API'],
            route: '/portfolio-details/3',
        },
        {
            title: 'Personal Portfolio',
            description:
                'Modern portfolio website showcasing projects and skills with clean design and smooth animations.',
            image: `${process.env.PUBLIC_URL || ''}/img/card/portfolioPrevCard.png`,
            tags: ['React', 'React Router', 'CSS Modules'],
            route: '/',
        },
    ],
}
