export const techStack = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { name: "PYTHON", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "LARAVEL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
  { name: "REACT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "NEXT.JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "MYSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "SQLITE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },
  { name: "DOCKER", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "GIT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" }
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern, high-performance e-commerce solution built with React and Laravel.",
    tech: ["REACT", "LARAVEL", "MYSQL"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "School Management System",
    description: "Comprehensive dashboard for managing student data and academic records.",
    tech: ["PHP", "MYSQL", "HTML", "CSS"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Personal web portfolio featuring a liquid glass design system and dark mode.",
    tech: ["REACT", "NEXT.JS", "CSS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    featured: true,
  },
  {
    id: 4,
    title: "Inventory API",
    description: "RESTful API service for stock tracking and warehouse management.",
    tech: ["PYTHON", "SQLITE", "DOCKER"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    featured: false,
  },
  {
    id: 5,
    title: "Real-time Chat App",
    description: "WebSocket-based messaging application with presence indicators.",
    tech: ["JS", "REACT", "DOCKER"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    featured: false,
  },
  {
    id: 6,
    title: "Task Organizer",
    description: "Minimalist kanban board for personal productivity and focus.",
    tech: ["REACT", "CSS", "GIT"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    featured: false,
  }
];

export const socials = {
  instagram: "https://instagram.com/",
  whatsapp: "https://wa.me/6281234567890", // Replace with real number later
  discord: "https://discord.com/",
  github: "https://github.com/"
};

export const education = {
  period: "2026-Present",
  school: "SMK TRIDHARMA 2 BOGOR",
  major: "Pengembangan Perangkat Lunak Dan Game"
};

export const music = {
  title: "Lofi Chill Vibes",
  url: "https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3" // Change this URL to your own music link (.mp3)
};

export const biodata = {
  name: "Software Developer",
  role: "Full-Stack Developer",
  location: "Bogor, Indonesia",
  hobbies: ["Coding", "Reading", "Gaming", "Music"],
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&q=80"
};
