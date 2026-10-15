/**
 * CENTRALIZED PORTFOLIO DATA
 * Edit this file to update links, skills, experience items, projects, certifications, or services.
 */

export const NAVIGATION_LINKS = [
  { name: "About", path: "/" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Certifications", path: "/certifications" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export const PERSONAL_INFO = {
  name: "Tanvirul Islam",
  title: "Computer Science & Engineering Graduate",
  bio: "I'm a passionate and detail-oriented CSE graduate with a strong foundation in programming, problem solving, and building real-world solutions. I enjoy turning ideas into impactful digital products and love to learn new technologies.",
  location: "Chattogram, Bangladesh",
  educationBadge: "CSE Graduate",
  institutionShort: "IIUC",
  status: "Open to Opportunities",
  email: "tanvirul.islam@gmail.com",
  phone: "+880 1700 XXX XXX",
  linkedin: "https://linkedin.com/in/tanvirul-islam",
  linkedinHandle: "/tanvirul-islam",
  github: "https://github.com/tanvirul-islam",
  githubHandle: "/tanvirul-islam",
  cvUrl: "/cv/Tanvirul_Islam_CV.pdf",
};

export const SKILLS_CATEGORIES = [
  "All",
  "Languages",
  "Frameworks",
  "Tools",
  "Databases",
  "Others",
];

export const SKILLS_DATA = [
  // Languages (Matching Showcase Image)
  { id: 1, name: "C / C++", category: "Languages", badge: "C", color: "#3B82F6" },
  { id: 2, name: "Python", category: "Languages", badge: "PY", color: "#FACC15" },
  { id: 3, name: "JavaScript", category: "Languages", badge: "JS", color: "#EAB308" },
  { id: 4, name: "SQL", category: "Languages", badge: "SQL", color: "#38BDF8" },
  { id: 5, name: "TypeScript", category: "Languages", badge: "TS", color: "#2563EB" },
  { id: 6, name: "Java", category: "Languages", badge: "JV", color: "#F97316" },
  { id: 7, name: "Dart", category: "Languages", badge: "DT", color: "#06B6D4" },
  { id: 8, name: "HTML & CSS", category: "Languages", badge: "H5", color: "#EF4444" },

  // Frameworks & Libraries (Matching Showcase Image + Flutter/Tailwind)
  { id: 9, name: "React", category: "Frameworks", badge: "RC", color: "#22D3EE" },
  { id: 10, name: "Next.js", category: "Frameworks", badge: "NX", color: "#FFFFFF" },
  { id: 11, name: "Node.js", category: "Frameworks", badge: "ND", color: "#22C55E" },
  { id: 12, name: "Express.js", category: "Frameworks", badge: "EX", color: "#9CA3AF" },
  { id: 13, name: "Flutter", category: "Frameworks", badge: "FL", color: "#38BDF8" },
  { id: 14, name: "Tailwind CSS", category: "Frameworks", badge: "TW", color: "#06B6D4" },
  { id: 15, name: "PyTorch / OpenCV", category: "Frameworks", badge: "CV", color: "#F97316" },

  // Tools (Pre-populated)
  { id: 16, name: "Git & GitHub", category: "Tools", badge: "GIT", color: "#F97316" },
  { id: 17, name: "VS Code", category: "Tools", badge: "VS", color: "#3B82F6" },
  { id: 18, name: "Vercel", category: "Tools", badge: "VC", color: "#E5E7EB" },
  { id: 19, name: "Docker", category: "Tools", badge: "DK", color: "#0EA5E9" },
  { id: 20, name: "Postman", category: "Tools", badge: "PM", color: "#FB923C" },
  { id: 21, name: "Cisco Packet Tracer", category: "Tools", badge: "NW", color: "#10B981" },

  // Databases (Pre-populated)
  { id: 22, name: "MongoDB", category: "Databases", badge: "MG", color: "#22C55E" },
  { id: 23, name: "MySQL", category: "Databases", badge: "MY", color: "#38BDF8" },
  { id: 24, name: "PostgreSQL", category: "Databases", badge: "PG", color: "#60A5FA" },
  { id: 25, name: "Firebase", category: "Databases", badge: "FB", color: "#FBBF24" },

  // Others (Pre-populated)
  { id: 26, name: "Computer Vision & ML", category: "Others", badge: "AI", color: "#39FF14" },
  { id: 27, name: "ROS / MAVLink Drones", category: "Others", badge: "ROS", color: "#A855F7" },
  { id: 28, name: "IoT & Embedded Systems", category: "Others", badge: "IOT", color: "#14B8A6" },
  { id: 29, name: "RESTful APIs", category: "Others", badge: "API", color: "#39FF14" },
];

export const EXPERIENCE_DATA = [
  {
    id: 1,
    period: "2024 - 2025",
    organization: "IEEE RAS IIUC SBC",
    role: "Programme Coordinator",
    highlights: [
      "Organized workshops, seminars and robotics events",
      "Supported robotics community and student engagement",
    ],
  },
  {
    id: 2,
    period: "2023 - 2024",
    organization: "IEEE ComSoc IIUC SBC",
    role: "Executive Committee",
    highlights: [
      "Contributed to technical and community initiatives",
      "Worked on events and collaborations",
    ],
  },
  {
    id: 3,
    period: "2022 - 2024",
    organization: "Freelance Projects",
    role: "Full Stack Developer",
    highlights: [
      "Built web applications using MERN/Next.js",
      "Worked with clients on small to medium projects",
    ],
  },
  {
    id: 4,
    period: "2021 - 2025",
    organization: "B.Sc in Computer Science & Engineering",
    role: "International Islamic University Chittagong (IIUC)",
    highlights: [
      "Completed degree with strong foundation in CSE",
      "Worked on academic and research projects",
    ],
  },
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Salat Tracker",
    techStack: "Flutter • Mobile App",
    description: "A prayer tracking app with azan, qibla, and more features.",
    image: "/images/projects/salat-tracker.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Agriculture Crop Health Prediction",
    techStack: "Python • Machine Learning",
    description: "Predicting crop health using satellite imagery and environmental data.",
    image: "/images/projects/crop-health.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Disaster Intelligence",
    techStack: "Python • Computer Vision",
    description: "Multi-modal disaster detection and analysis system.",
    image: "/images/projects/disaster-intel.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Portfolio Website",
    techStack: "React • Next.js",
    description: "Personal portfolio website with modern UI/UX and animations.",
    image: "/images/projects/portfolio.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "IoT Smart Farming",
    techStack: "IoT • Embedded",
    description: "Smart agriculture system using sensors and microcontrollers.",
    image: "/images/projects/smart-farming.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "Drone Control System",
    techStack: "Python • ROS",
    description: "Autonomous drone with live video and GPS tracking.",
    image: "/images/projects/drone-control.jpg",
    link: "#",
  },
];

export const CERTIFICATIONS_DATA = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "Programming Hero",
    year: "2024",
    badgeText: "P",
    badgeColor: "bg-emerald-500/20 text-neon-primary border-neon-primary/50",
    link: "#",
  },
  {
    id: 2,
    title: "Machine Learning",
    issuer: "Coursera",
    year: "2024",
    badgeText: "C",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-400/50",
    link: "#",
  },
  {
    id: 3,
    title: "Python for Data Science",
    issuer: "Coursera",
    year: "2023",
    badgeText: "C",
    badgeColor: "bg-sky-500/20 text-sky-400 border-sky-400/50",
    link: "#",
  },
  {
    id: 4,
    title: "Java Programming",
    issuer: "HackerRank",
    year: "2023",
    badgeText: "H",
    badgeColor: "bg-green-500/20 text-green-400 border-green-400/50",
    link: "#",
  },
  {
    id: 5,
    title: "Web Development (HTML, CSS, JS)",
    issuer: "freeCodeCamp",
    year: "2022",
    badgeText: "fCC",
    badgeColor: "bg-indigo-500/20 text-indigo-400 border-indigo-400/50",
    link: "#",
  },
  {
    id: 6,
    title: "Problem Solving",
    issuer: "HackerRank",
    year: "2022",
    badgeText: "H",
    badgeColor: "bg-emerald-500/20 text-neon-primary border-neon-primary/50",
    link: "#",
  },
];

export const SERVICES_DATA = [
  {
    id: 1,
    title: "Web Development",
    description: "Responsive and scalable web applications using modern technologies.",
    iconName: "Code2",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Cross-platform apps with Flutter for Android & iOS.",
    iconName: "Smartphone",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Clean, user-friendly and modern interfaces.",
    iconName: "Palette",
  },
  {
    id: 4,
    title: "Machine Learning",
    description: "Data analysis, model building and intelligent solutions.",
    iconName: "BrainCircuit",
  },
  {
    id: 5,
    title: "Problem Solving & Automation",
    description: "Scripting, automation and custom tools.",
    iconName: "Wrench",
  },
  {
    id: 6,
    title: "Technical Support & Consultation",
    description: "Guidance on tech, projects and career growth.",
    iconName: "Lightbulb",
  },
];