export const personalInfo = {
  name: "SAFA YASMIN",
  role: "Frontend Developer",
  shortRole: "React & Frontend Developer",
  email: "safayasmin567@gmail.com",
  phone: "7736726617",
  location: "Calicut, Kerala, India",
  linkedin: "https://linkedin.com/in/safa-yasmin-dev/",
  linkedinDisplay: "linkedin.com/in/safa-yasmin-dev",
  github: "https://github.com",
  status: "Frontend Developer Intern @ Bridgeon Solutions",
  statusType: "active",
  bio: "Front-End Developer with hands-on experience in building responsive and user-friendly web applications using React.js. Skilled in JavaScript, HTML, CSS, Tailwind CSS, Redux Toolkit and TanStack Query. Passionate about developing clean, scalable and high-performance user interfaces with reusable components and modern development practices.",
  aboutDetailed: {
    intro: "I am a dedicated Front-End Developer with practical, hands-on industry experience building modern, responsive, and intuitive web applications. Currently interning at Bridgeon Solutions LLP in Calicut, I focus on turning complex user requirements into high-performance, component-driven user interfaces.",
    educationSummary: "My academic background includes completing Higher Secondary Education in Computer Science at DUHSS Thootha (2023 - 2025), where I developed core computer science foundations, algorithmic thinking, and problem-solving skills.",
    interests: "My technical passion lies in frontend architecture, component reusability, efficient global state management with Redux Toolkit, server-state caching with TanStack Query, and crafting fluid, accessible user interfaces with Tailwind CSS.",
    careerObjectives: "My objective is to build scalable, high-speed, and accessible web experiences while continuously growing as a software engineer, mastering modern frontend paradigms, and contributing impactful code to collaborative engineering teams."
  }
};

export const skillsData = {
  categories: [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "programming", name: "Programming" },
    { id: "tools", name: "Tools & Workflow" },
    { id: "soft", name: "Professional Skills" }
  ],
  items: [
    // Frontend Skills
    {
      name: "React.js",
      category: "frontend",
      level: "Proficient",
      description: "Reusable components, hooks (useMemo, useCallback), Virtual DOM, component lifecycle",
      badge: "Core Stack",
      featured: true
    },
    {
      name: "JavaScript",
      category: "frontend",
      level: "Advanced",
      description: "ES6+, asynchronous programming, closures, event loop, DOM manipulation",
      badge: "Language",
      featured: true
    },
    {
      name: "Redux Toolkit",
      category: "frontend",
      level: "Proficient",
      description: "Global state management, slices, reducers, dispatched actions, store configuration",
      badge: "State Management",
      featured: true
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      level: "Advanced",
      description: "Utility-first responsive design, custom theming, mobile-first layouts",
      badge: "Styling",
      featured: true
    },
    {
      name: "TanStack Query",
      category: "frontend",
      level: "Proficient",
      description: "API fetching, server state management, background caching, query invalidation",
      badge: "Data Fetching",
      featured: true
    },
    {
      name: "HTML5",
      category: "frontend",
      level: "Advanced",
      description: "Semantic markup, modern web standards, accessibility, SEO structure",
      badge: "Foundation",
      featured: false
    },
    {
      name: "CSS3",
      category: "frontend",
      level: "Advanced",
      description: "Flexbox, CSS Grid, keyframe animations, media queries, modern UI layouts",
      badge: "Foundation",
      featured: false
    },

    // Backend Skills
    {
      name: "Python",
      category: "backend",
      level: "Intermediate",
      description: "Object-oriented scripting, backend logic, data structures, server scripts",
      badge: "Backend Language",
      featured: true
    },
    {
      name: "Django",
      category: "backend",
      level: "Intermediate",
      description: "MVT architecture, REST APIs, ORM models, routing, backend web framework",
      badge: "Backend Framework",
      featured: true
    },

    // Programming
    {
      name: "Data Structures & Algorithms (DSA)",
      category: "programming",
      level: "Foundation",
      description: "Arrays, lists, searching, sorting, computational logic, algorithm optimization",
      badge: "Core CS",
      featured: true
    },

    // Tools
    {
      name: "Git",
      category: "tools",
      level: "Proficient",
      description: "Version control, branching, committing, merging, conflict resolution",
      badge: "Version Control",
      featured: true
    },
    {
      name: "GitHub",
      category: "tools",
      level: "Proficient",
      description: "Repository hosting, collaborative workflows, pull requests, code tracking",
      badge: "Collaboration",
      featured: true
    },
    {
      name: "VS Code",
      category: "tools",
      level: "Advanced",
      description: "Modern developer environment, debugging tools, extensions, workspace customization",
      badge: "IDE",
      featured: false
    },

    // Soft Skills
    {
      name: "Adaptability",
      category: "soft",
      level: "High",
      description: "Thriving in fast-paced tech environments and adopting new tools quickly",
      badge: "Mindset",
      featured: false
    },
    {
      name: "Problem Solving",
      category: "soft",
      level: "High",
      description: "Analytical debugging, structured algorithmic approach to complex issues",
      badge: "Core Strength",
      featured: false
    },
    {
      name: "Quick Learner",
      category: "soft",
      level: "High",
      description: "Rapidly comprehending new documentation, frameworks, and codebases",
      badge: "Growth",
      featured: false
    },
    {
      name: "Time Management",
      category: "soft",
      level: "High",
      description: "Prioritizing tasks, meeting sprint goals, and organized project delivery",
      badge: "Execution",
      featured: false
    },
    {
      name: "Team Collaboration",
      category: "soft",
      level: "High",
      description: "Active communication, peer code reviews, and cross-functional synergy",
      badge: "Teamwork",
      featured: false
    }
  ]
};

export const experienceData = [
  {
    role: "Frontend Developer Intern",
    company: "Bridgeon Solutions LLP",
    location: "Calicut",
    period: "01/2026 - Present",
    type: "Internship",
    current: true,
    description: "Contributing to real-world client and internal web applications, focusing on scalable frontend architectures, responsive design, and robust API communications.",
    responsibilities: [
      "Built responsive web applications using React.js and Tailwind CSS.",
      "Developed reusable UI components and managed state using Redux Toolkit.",
      "Integrated RESTful APIs for seamless data communication.",
      "Implemented TanStack Query for API fetching and caching."
    ],
    technologies: ["React.js", "Tailwind CSS", "Redux Toolkit", "TanStack Query", "REST APIs", "JavaScript"]
  }
];

export const projectsData = [
  {
    id: "bloomcraft",
    title: "BloomCraft",
    subtitle: "Flower & Crochet E-commerce Website",
    category: "Full-Featured Web Application",
    featured: true,
    tagline: "A modern, highly responsive e-commerce web platform for handcrafted crochet and flower creations with complete cart, wishlist, and checkout flows.",
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Router",
      "Axios",
      "JSON Server"
    ],
    highlights: [
      "Developed a responsive e-commerce website using React.js, JavaScript, Tailwind CSS, Redux Toolkit, and React Router.",
      "Built features like product listing, search, filtering, cart, wishlist, and checkout.",
      "Implemented global state management using Redux Toolkit.",
      "Integrated REST APIs using Axios and JSON Server.",
      "Developed authentication and protected routes.",
      "Optimized performance using React Hooks (useMemo, useCallback).",
      "Designed a fully responsive UI across devices."
    ],
    architecture: {
      stateManagement: "Redux Toolkit slices for centralized cart, wishlist, filter criteria, and auth state.",
      routing: "React Router with protected route guards for secure user authentication and order finalization.",
      apiIntegration: "Axios client connected to mock REST endpoints backed by JSON Server.",
      performance: "useMemo & useCallback applied to filtering algorithms and interactive handlers to prevent excessive re-renders."
    },
    keyFeatures: [
      {
        title: "Product Listing & Search",
        desc: "Instant real-time search with multi-parameter filtering for flower varieties and crochet categories."
      },
      {
        title: "Cart & Wishlist Architecture",
        desc: "Persistent global state powered by Redux Toolkit ensuring instantaneous user feedback."
      },
      {
        title: "Protected Routes & Auth",
        desc: "Secure checkout routes restricting unauthorized access until user authentication is validated."
      },
      {
        title: "Performance Optimization",
        desc: "Memorized calculations and callback functions ensuring 60fps UI responsiveness across mobile and desktop."
      }
    ],
    statusNotice: "Academic & Internship Showcase Project. Code review and architecture walkthrough available upon request."
  }
];

export const educationData = [
  {
    qualification: "Higher Secondary Education",
    institution: "DUHSS Thootha",
    stream: "Computer Science",
    period: "01/2023 - 01/2025",
    description: "Completed comprehensive computer science curriculum covering programming fundamentals, algorithms, computational logic, data structures, and computer organization.",
    highlights: [
      "Focused on Computer Science, Mathematics, and Analytical Problem Solving",
      "Built foundational programming knowledge in algorithm design and data representation",
      "Graduated with strong analytical skills leading to specialized front-end web engineering"
    ]
  }
];

export const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];
